import ExcelJS from "exceljs";
import { JSONObject } from "../types/fileStorage";
import { ANALYTE_GROUPS } from "../consts/tableProduction";
import { ANALYTE_BORDER, FULL_BORDER } from "../consts/xlsxFormattingConsts";
import { chemistryMap } from "../consts/ChemistryMap";

const beginHeaders = (worksheet: ExcelJS.Worksheet) => {
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

  worksheet.mergeCells(2, 2, 2, 5);
  worksheet.mergeCells(3, 2, 3, 5);
  worksheet.mergeCells(4, 2, 6, 5);
};

const makeAnalyteSet = (table: JSONObject): Set<string> => {
  const sampleAnalytesCC = new Set<string>();

  // Does not deal with when there are no standards for a result.
  table.data.forEach((result: JSONObject) => {
    sampleAnalytesCC.add(result.ChemCode);
  });

  return sampleAnalytesCC;
};

const writeDefaultAnalytes = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject,
  analytesCC: Set<string>
) => {
  let column = 6;
  ANALYTE_GROUPS.forEach((group, i) => {
    const analytesToShow = group.analyteChemCodes.filter((chemCode) =>
      analytesCC.has(chemCode)
    );

    if (analytesToShow.length === 0) return;

    const topLeft = worksheet.getCell(4, column);
    topLeft.value = group.name;
    topLeft.font = { name: "Arial", size: 10 };
    topLeft.alignment = { horizontal: "center", vertical: "middle" };
    topLeft.border = FULL_BORDER;

    const startColumn = column;
    group.analyteChemCodes.forEach((chemCode) => {
      const nameCell = worksheet.getCell(5, column);
      nameCell.value = chemistryMap[chemCode].ChemName;
      nameCell.font = { name: "Arial", size: 10, bold: true };
      nameCell.alignment = { textRotation: 90 };
      nameCell.border = ANALYTE_BORDER;
      column++;
    });

    worksheet.mergeCells(4, startColumn, 4, column - 1);
  });
};

const writeAnalytes = (worksheet: ExcelJS.Worksheet, table: JSONObject) => {
  // Make a set of all the analytes by chemCode that are in both the results and the standards

  // Go through the defaults analytes and create special structure
  // Go through the rest and add them to the left (with exceptions)

  const analytesCC = makeAnalyteSet(table);

  writeDefaultAnalytes(worksheet, table, analytesCC);
};

export const writeHeaders = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject
) => {
  beginHeaders(worksheet);
  writeAnalytes(worksheet, table);
};
