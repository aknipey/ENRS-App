import { Standard } from "../Standards/standardsTypes";
import ExcelJS from "exceljs";
import { FULL_BORDER } from "../consts/xlsxFormattingConsts";

export const writeStandard = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  groupStandards: Set<Standard>,
  rowNum: number
): number => {
  groupStandards.delete(standard);

  return rowNum + 1;
};

export const writeDepthDependentStandard = (
  worksheet: ExcelJS.Worksheet,
  standard: Standard,
  groupStandards: Set<Standard>,
  rowNum: number
): number => {
  groupStandards.delete(standard);

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
