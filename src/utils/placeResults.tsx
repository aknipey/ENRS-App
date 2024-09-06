import ExcelJS from "exceljs";
import { JSONObject } from "../types/fileStorage";
import { FULL_BORDER } from "../consts/xlsxFormattingConsts";

const writeLORs = (worksheet: ExcelJS.Worksheet, table: JSONObject) => {
  const rowNum = worksheet.rowCount + 1;

  const cellB = worksheet.getCell(rowNum, 2);
  cellB.value = "Concentrations";
  cellB.font = { bold: true, size: 10, name: "Arial" };
  cellB.border = { left: { style: "thin" } };

  const cellE = worksheet.getCell(rowNum, 5);
  cellE.value = "Laboratory LOR or PQL";
  cellE.font = { bold: true, size: 10, name: "Arial" };
  cellE.border = { right: { style: "thin" } };
  cellE.alignment = { horizontal: "right" };

  const width = worksheet.columnCount;

  for (let i = 6; i <= width; i++) {
    const analyte = worksheet.getColumn(i).key;
    const example = table.data.find((test: JSONObject) => {
      return test.ChemCode === analyte;
    });
    let EQL = example?.EQL;
    let EQLUnits = example?.EQL_Units;

    if (!EQL || !EQLUnits) {
      console.log("No EQL or EQL_Units for ", analyte);
      continue;
    }

    if (EQLUnits.charCodeAt(0) > 127) {
      if (EQLUnits.includes("g/L")) {
        EQLUnits = "ug/L";
      } else if (EQLUnits.includes("g/kg")) {
        EQLUnits = "ug/kg";
      } else {
        console.log("EQLUnits are being weird: ", EQLUnits);
      }
    }

    if (EQLUnits === "ug/L" || EQLUnits === "ug/kg") {
      EQL = EQL / 1000;
    }

    const cell = worksheet.getCell(rowNum, i);
    cell.value = EQL;
    cell.font = { size: 10, name: "Arial" };
    cell.border = FULL_BORDER;
    cell.alignment = { horizontal: "center" };
  }
};

const writeUnits = (worksheet: ExcelJS.Worksheet, table: JSONObject) => {
  const rowNum = worksheet.rowCount + 1;

  const cellB = worksheet.getCell(rowNum, 2);
  cellB.value = "Area";
  cellB.font = { bold: true, size: 10, name: "Arial" };
  cellB.border = FULL_BORDER;
  cellB.alignment = { horizontal: "center" };

  const cellC = worksheet.getCell(rowNum, 3);
  cellC.value = "ID";
  cellC.font = { bold: true, size: 10, name: "Arial" };
  cellC.border = FULL_BORDER;
  cellC.alignment = { horizontal: "center" };

  const cellD = worksheet.getCell(rowNum, 4);
  cellD.value = "Depth (m)";
  cellD.font = { bold: true, size: 10, name: "Arial" };
  cellD.border = FULL_BORDER;
  cellD.alignment = { horizontal: "center" };

  const cellE = worksheet.getCell(rowNum, 5);
  cellE.value = "Date";
  cellE.font = { bold: true, size: 10, name: "Arial" };
  cellE.border = FULL_BORDER;
  cellE.alignment = { horizontal: "center" };

  const width = worksheet.columnCount;
  for (let i = 6; i <= width; i++) {
    const analyte = worksheet.getColumn(i).key;
    const example = table.data.find((test: JSONObject) => {
      return test.ChemCode === analyte;
    });
    let units = example?.Result_Unit;

    if (!units) {
      console.log("No units for ", analyte);
      continue;
    }

    if (units.charCodeAt(0) > 127) {
      if (units.includes("g/L") || units.includes("g/l")) {
        units = "mg/L";
      } else if (units.includes("mg/kg")) {
        units = "mg/kg";
      } else {
        console.log("Units are being weird: ", units);
      }
    }

    if (units === "ug/L") {
      units = "mg/L";
    } else if (units === "ug/kg") {
      units = "mg/kg";
    }

    const cell = worksheet.getCell(rowNum, i);
    cell.value = units;
    cell.font = { size: 10, name: "Arial" };
    cell.border = FULL_BORDER;
    cell.alignment = { horizontal: "center" };
  }
};

const writeData = (worksheet: ExcelJS.Worksheet, table: JSONObject) => {
  const width = worksheet.columnCount;
  for (let i = 0; i < width; i++) {
    
  }
}

export const writeResults = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject
) => {
  writeLORs(worksheet, table);
  writeUnits(worksheet, table);
  writeData(worksheet, table);
};
