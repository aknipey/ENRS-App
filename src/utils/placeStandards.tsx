import { Standard } from "../Standards/standardsTypes";
import ExcelJS from "exceljs";
import { FULL_BORDER } from "../consts/xlsxFormattingConsts";
import { processConditions } from "./standardProcessing";

export const writeStandard = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  groupStandards: Set<Standard>,
  rowNum: number
): number => {
  groupStandards.delete(standard);

  const width = worksheet.columnCount;

  for (let column = 6; column < width + 1; column++) {
    const cell = worksheet.getCell(rowNum, column);
    const columnKey = worksheet.getColumn(column).key;
    const analyte = standard.values.find((a) => a.chemCode === columnKey);

    let value;
    if (!analyte) {
      value = "-";
    } else if (analyte.value instanceof Object && "min" in analyte.value) {
      value = `${analyte.value.min} - ${analyte.value.max}`;
    } else if (analyte.value === -999) {
      value = "NL";
    } else {
      value = analyte.value;

      let units = analyte.units;
      if (units.charCodeAt(0) > 127) {
        if (units.includes("g/L")) {
          units = "ug/L";
        } else if (units.includes("g/kg")) {
          units = "ug/kg";
        } else {
          console.log("Units are being weird: ", units);
        }
      }

      if (units === "ug/L" || units === "ug/kg") {
        value = value * 1000;
      }
    }

    cell.value = value;
    cell.font = { name: "Arial", size: 10 };
    cell.alignment = { vertical: "middle", horizontal: "center" };
    cell.border = FULL_BORDER;
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: standard.visual.colour?.replace("#", "") ?? "FFFFFF",
      },
    };
  }

  return rowNum + 1;
};

const processDepth = (depth: string) => {
  if (depth[0] === ">") {
    return { upper: Number(depth[1]), lower: undefined };
  } else if (depth[1] === "-") {
    return { upper: Number(depth[0]), lower: Number(depth[2]) };
  } else {
    console.log("Depth is not in the right format: ", depth);
    return { upper: undefined, lower: undefined };
  }
};

export const writeDepthDependentStandard = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  groupStandards: Set<Standard>,
  rowNum: number
): number => {
  groupStandards.delete(standard);
  const width = worksheet.columnCount;

  for (let i = 0; i < standard.standardInfo.depthDependent!.length; i++) {
    const cellE = worksheet.getCell(i + rowNum, 5);
    cellE.value = standard.standardInfo.depthDependent![i];
    cellE.font = { name: "Arial", size: 10, bold: true };
    cellE.alignment = { vertical: "middle" };
    cellE.border = FULL_BORDER;
    cellE.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: standard.visual.colour?.replace("#", "") ?? "FFFFFF",
      },
    };

    for (let column = 6; column < width + 1; column++) {
      const cell = worksheet.getCell(i + rowNum, column);
      const columnKey = worksheet.getColumn(column).key;
      const analyte = standard.values.find((a, j) => {
        const sDepth = standard.standardInfo.depthDependent![i];
        const depth = processDepth(sDepth);

        const aDepth = a.conditions!;
        const conds = processConditions(aDepth);
        const ret =
          a.chemCode === columnKey &&
          conds?.upper === depth.upper &&
          ("lower" in depth ? conds?.lower === depth.lower : true);

        //console.log(ret, "Depth at ", j, ": ", depth, conds);

        return ret;
      });

      let value;
      if (!analyte) {
        value = "-";
      } else if (analyte.value instanceof Object && "min" in analyte.value) {
        value = `${analyte.value.min} - ${analyte.value.max}`;
      } else if (analyte.value === -999) {
        value = "NL";
      } else {
        value = analyte.value;

        let units = analyte.units;
        if (units.charCodeAt(0) > 127) {
          if (units.includes("g/L")) {
            units = "ug/L";
          } else if (units.includes("g/kg")) {
            units = "ug/kg";
          } else {
            console.log("Units are being weird: ", units);
          }
        }

        if (units === "ug/L" || units === "ug/kg") {
          value = value * 1000;
        }
      }

      cell.value = value;
      cell.font = { name: "Arial", size: 10 };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = FULL_BORDER;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: standard.visual.colour?.replace("#", "") ?? "FFFFFF",
        },
      };
    }
  }

  return rowNum + (standard.standardInfo.depthDependent?.length ?? 1);
};

export const writeStandardsE = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  groupStandards: Set<Standard>,
  rowNum: number
): number => {
  const eStandards1 = new Set<Standard>(
    Array.from(groupStandards).filter(
      (s) => s.visual.rowE && s.visual.rowE === standard.visual.rowE
    )
  );

  eStandards1.forEach((s) => groupStandards.delete(s));

  while (eStandards1.size > 0) {
    const standard1 = eStandards1.values().next().value;
    const cell = worksheet.getCell(rowNum, 5);
    cell.value = standard.visual.rowE;
    cell.font = { bold: true, name: "Arial", size: 10 };
    cell.alignment = { vertical: "middle" };
    cell.border = FULL_BORDER;
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: standard.visual.colour?.replace("#", "") ?? "FFFFFF",
      },
    };

    rowNum = writeStandard(worksheet, standard1, eStandards1, rowNum);
  }

  return rowNum;
};

export const writeStandardsC = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  bStandards: Set<Standard>,
  rowNum: number
): number => {
  const cStandards = new Set<Standard>(
    Array.from(bStandards).filter(
      (s) => s.visual.rowC && s.visual.rowC === standard.visual.rowC
    )
  );

  cStandards.forEach((s) => bStandards.delete(s));

  const cHeight = Array.from(cStandards).reduce((acc, s) => {
    return acc + (s.standardInfo.depthDependent?.length ?? 1);
  }, 0);

  const cell = worksheet.getCell(rowNum, 3);
  cell.value = standard.visual.rowC;
  cell.font = { bold: true, name: "Arial", size: 10 };
  cell.alignment = {
    vertical: "middle",
    horizontal: "center",
    textRotation: 90,
  };
  cell.border = FULL_BORDER;
  cell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: {
      argb: standard.visual.colour?.replace("#", "") ?? "FFFFFF",
    },
  };

  worksheet.mergeCells(rowNum, 3, rowNum + cHeight - 1, 4);

  while (cStandards.size > 0) {
    const standard1 = cStandards.values().next().value;
    if (standard1.visual.rowE) {
      rowNum = writeStandardsE(worksheet, standard1, cStandards, rowNum);
    } else if (standard1.standardInfo.depthDependent) {
      rowNum = writeDepthDependentStandard(
        worksheet,
        standard1,
        cStandards,
        rowNum
      );
    } else {
      rowNum = writeStandard(worksheet, standard1, cStandards, rowNum);
    }
  }

  return rowNum;
};

export const writeStandardsB = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  underWhiteStandards: Set<Standard>,
  rowNum: number
): number => {
  const bStandards = new Set<Standard>(
    Array.from(underWhiteStandards).filter(
      (s) => s.visual.rowB === standard.visual.rowB
    )
  );

  bStandards.forEach((s) => underWhiteStandards.delete(s));

  const bHeight = Array.from(bStandards).reduce((acc, s) => {
    return acc + (s.standardInfo.depthDependent?.length ?? 1);
  }, 0);

  const example = bStandards.values().next().value as Standard;

  const bWidth = example.visual.rowC
    ? 1
    : example.visual.rowE || example.standardInfo.depthDependent
    ? 3
    : 4;

  const cell = worksheet.getCell(rowNum, 2);
  cell.value = standard.visual.rowB;
  cell.font = {
    bold: true,
    name: "Arial",
    size: 10,
    color: { argb: standard.visual.colourB ?? "00000000" },
  };
  cell.alignment = { vertical: "middle" };
  cell.border = FULL_BORDER;
  cell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: {
      argb: standard.visual.colour?.replace("#", "") ?? "FFFFFF",
    },
  };

  worksheet.mergeCells(rowNum, 2, rowNum + bHeight - 1, 2 + bWidth - 1);

  while (bStandards.size > 0) {
    let standard1 = bStandards.values().next().value;
    if (standard1.visual.rowC) {
      rowNum = writeStandardsC(worksheet, standard1, bStandards, rowNum);
    } else if (standard1.visual.rowE) {
      rowNum = writeStandardsE(worksheet, standard1, bStandards, rowNum);
    } else {
      rowNum = writeStandard(worksheet, standard1, bStandards, rowNum);
    }
  }
  return rowNum;
};

export const writeGroupedStandards = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  standardsSet: Set<Standard>,
  rowNum: number
): number => {
  const underWhiteStandards = new Set<Standard>(
    Array.from(standardsSet).filter(
      (s) => s.visual.whiteBar === standard.visual.whiteBar
    )
  );

  underWhiteStandards.forEach((s) => standardsSet.delete(s));

  while (underWhiteStandards.size > 0) {
    const standard1 = underWhiteStandards.values().next().value;
    rowNum = writeStandardsB(worksheet, standard1, underWhiteStandards, rowNum);
  }

  return rowNum;
};

export const writeStandards = (
  worksheet: ExcelJS.Worksheet,
  standards: Standard[]
) => {
  let rowNum = 7;
  const standardsSet = new Set(standards);
  while (standardsSet.size > 0) {
    const standard = standardsSet.values().next().value;

    const cell = worksheet.getCell(rowNum, 2);
    cell.value = standard.visual.whiteBar;
    cell.font = { bold: true, name: "Arial", size: 12 };
    rowNum++;

    rowNum = writeGroupedStandards(worksheet, standard, standardsSet, rowNum);
  }

  return rowNum;
};
