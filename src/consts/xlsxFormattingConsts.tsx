// import { RowObj } from "../types/excelFormatting";

import { Borders } from "exceljs";

export const EXCEEDED_STANDARDS_COL = 18;
export const PREFIX_COL = 3;
export const RESULT_COL = 4;
export const RESULT_UNIT_COL = 5;

export const HEADER_FORMATTING = {
  font: { bold: true, color: { rgb: "000000" } },
  fill: { fgColor: { rgb: "ADD8E6" } },
};

export const EXCEEDED_ROW_FORMATTING = { font: { color: { rgb: "FF0000" } } };

export const FULL_BORDER: Partial<Borders> = {
  top: { style: "thin" },
  left: { style: "thin" },
  bottom: { style: "thin" },
  right: { style: "thin" },
};

export const ANALYTE_BORDER: Partial<Borders> = {
  top: { style: "thin" },
  left: { style: "thin" },
  right: { style: "thin" },
};

export const R6_BORDER: Partial<Borders> = {
  left: { style: "thin" },
  right: { style: "thin" },
  bottom: { style: "thin" },
};
