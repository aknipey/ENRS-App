import ExcelJS from "exceljs";
import { JSONObject } from "../types/fileStorage";
import { writeHeaders } from "./headingCreation";
import { writeStandards } from "./placeStandards";
import { Standard } from "../Standards/standardsTypes";
import { writeResults } from "./placeResults";

export const createTable = (
  worksheet: ExcelJS.Worksheet,
  table: JSONObject,
  standards: Standard[]
) => {
  writeHeaders(worksheet, table);
  let rowNum = writeStandards(worksheet, standards);
  writeResults(worksheet, table);
  //formatSheet(worksheet);

};
