import ExcelJS from "exceljs";
import { JSONObject } from "../types/fileStorage";
import {
  ANALYTE_GROUPS,
  SPECIAL_ANALYTES_2,
  SPECIAL_ANALYTES_6,
} from "../consts/tableProduction";
import {
  ANALYTE_BORDER,
  FULL_BORDER,
  R6_BORDER,
} from "../consts/xlsxFormattingConsts";
import { chemistryMap } from "../consts/ChemistryMap";

const beginHeaders = (worksheet: ExcelJS.Worksheet, width: number) => {
  worksheet.getColumn(2).width = 16;
  worksheet.getColumn(3).width = 16;
  worksheet.getColumn(4).width = 9;
  worksheet.getColumn(5).width = 11;

  worksheet.getRow(2).height = 21;
  worksheet.getRow(3).height = 21;
  worksheet.getRow(4).height = 31;
  worksheet.getRow(5).height = 110;
  worksheet.getRow(6).height = 4.2;

  const B2 = worksheet.getCell(2, 2);
  B2.value = "Table X:  Total Concentration Results - {Matrix type}";
  B2.font = { bold: true, name: "Arial", size: 16 };
  B2.alignment = { horizontal: "center" };

  const B3 = worksheet.getCell(3, 2);
  B3.value = "Site:  Proj Loc";
  B3.font = { bold: true, name: "Arial", size: 16 };
  B3.alignment = { horizontal: "center" };

  const B4 = worksheet.getCell(4, 2);
  B4.value = "Analyte";
  B4.font = { bold: true, name: "Arial", size: 14 };
  B4.alignment = { horizontal: "center", vertical: "middle" };
  B4.border = FULL_BORDER;

  worksheet.mergeCells(2, 2, 2, width);
  worksheet.mergeCells(3, 2, 3, width);
  worksheet.mergeCells(4, 2, 6, 5);
};

const makeAnalyteSet = (table: JSONObject): Set<string> => {
  const sampleAnalytesCC = new Set<string>();

  // Does not deal with when there are no standards for a result.
  table.data.forEach((result: JSONObject) => {
    if (result.hasStandard) {
      sampleAnalytesCC.add(result.ChemCode);
    }
  });

  return sampleAnalytesCC;
};

const writeDefaultAnalytes = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject,
  analytesCC: Set<string>
): number => {
  let column = 6;
  ANALYTE_GROUPS.forEach((group, i) => {
    const analytesToShow = group.analyteChemCodes.filter((chemCode) =>
      analytesCC.has(chemCode)
    );

    if (i === 2 || i === 6) {
      const specialAnalytes =
        i === 2
          ? SPECIAL_ANALYTES_2.filter((chemCode) => analytesCC.has(chemCode))
          : SPECIAL_ANALYTES_6.filter((chemCode) => analytesCC.has(chemCode));

      specialAnalytes.forEach((chemCode) => {
        const nameCell = worksheet.getCell(4, column);
        nameCell.value = chemistryMap[chemCode].ChemName;
        nameCell.font = { name: "Arial", size: 10, bold: true };
        nameCell.alignment = {
          textRotation: 90,
          horizontal: "center",
          wrapText: true,
        };
        nameCell.border = ANALYTE_BORDER;

        worksheet.mergeCells(4, column, 5, column);

        const r6 = worksheet.getCell(6, column);
        r6.border = R6_BORDER;
        column++;
        analytesCC.delete(chemCode);
      });
    }

    if (analytesToShow.length === 0) return;

    const topLeft = worksheet.getCell(4, column);
    topLeft.value = group.name;
    topLeft.font = { name: "Arial", size: 10, bold: true };
    topLeft.alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };
    topLeft.border = FULL_BORDER;

    const startColumn = column;
    analytesToShow.forEach((chemCode) => {
      const nameCell = worksheet.getCell(5, column);
      nameCell.value = chemistryMap[chemCode].ChemName;
      nameCell.font = { name: "Arial", size: 10, bold: true };
      nameCell.alignment = {
        textRotation: 90,
        horizontal: "center",
        wrapText: true,
      };
      nameCell.border = ANALYTE_BORDER;

      const r6 = worksheet.getCell(6, column);
      r6.border = R6_BORDER;
      column++;
      analytesCC.delete(chemCode);
    });

    worksheet.mergeCells(4, startColumn, 4, column - 1);
  });

  return column;
};

const writeSpecialAnalytes = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject,
  analytesCC: Set<string>,
  width: number
): number => {
  if (analytesCC.size === 0) return width;

  while (analytesCC.size > 0) {
    const chemCode = analytesCC.values().next().value;
    const nameCell = worksheet.getCell(4, width);
    nameCell.value = chemistryMap[chemCode].ChemName;
    nameCell.font = { name: "Arial", size: 10, bold: true };
    nameCell.alignment = {
      textRotation: 90,
      horizontal: "center",
      wrapText: true,
    };
    nameCell.border = ANALYTE_BORDER;

    worksheet.mergeCells(4, width, 5, width);

    const r6 = worksheet.getCell(6, width);
    r6.border = R6_BORDER;
    width++;
    analytesCC.delete(chemCode);
  }

  return width;
};

const writeAnalytes = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject
): number => {
  // Make a set of all the analytes by chemCode that are in both the results and the standards

  // Go through the defaults analytes and create special structure
  // Go through the rest and add them to the left (with exceptions)

  const analytesCC = makeAnalyteSet(table);
  let width = writeDefaultAnalytes(worksheet, table, analytesCC);
  width = writeSpecialAnalytes(worksheet, table, analytesCC, width);

  return width;
};

export const writeHeaders = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject
) => {
  const width = writeAnalytes(worksheet, table);
  beginHeaders(worksheet, width - 1);
};
