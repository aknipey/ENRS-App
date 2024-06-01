import { Matrix } from "../Standards/standardsTypes";
import { QuickSelectTable, ScreenedQSRules, SelectedStandardsIds } from "./selectedStandardTypes";

export type JSONObject = Record<string, any>;

export type AllInputs = {
  chemFileName: string;
  sampleFileName: string;
  selectedStandardsIds: SelectedStandardsIds;
  screeningCriteriaQS: ScreenedQSRules;
  quickSelectedTables: QuickSelectTable[];
};

export type ChemData = {
  SampleCode: string;
  ChemCode: string;
  OriginalChemName: string;
  Prefix: "<" | ">";
  Result: string;
  Result_Unit: string;
  Total_or_Filtered: string;
  Result_Type: string;
  Method_Type: string;
  Method_Name: string;
  Extraction_Date: string;
  Analysed_Date: string;
  EQL: string;
  EQL_Units: string;
  Comments: string;
  Lab_Qualifier: string;
  UCL: string;
  LCL: string;
};

export type SampleData = {
  SampleCode: string;
  Sampled_Date_Time?: string;
  Field_ID?: string;
  Depth?: string;
  Matrix_Type: Matrix;
  Sample_Type: string;
  Parent_Sample?: string;
  SDG: string;
  Lab_Name: string;
  Lab_SampleID: string;
  Lab_Comments?: string;
  Lab_Report_Number: string;
}

export type FilteredChemData = ChemData & {
  exceeded_standards: string;
  exceeded_notes: string;
};
