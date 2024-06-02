import ExcelJS from "exceljs";
import { JSONObject } from "../types/fileStorage";
import { writeHeaders } from "./headingCreation";

export const createTable = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject
) => {
  writeHeaders(worksheet, table);
  //writeStandards(worksheet, table);
  //writeResults(worksheet, table);

};
