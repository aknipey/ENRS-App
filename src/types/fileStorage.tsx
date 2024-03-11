import { SelectedStandardsIds } from "./selectedStandardTypes";

export type JSONObject = Record<string, any>;

export type AllInputs = {
  chemFileName: string;
  sampleFileName: string;
  selectedStandardsIds: SelectedStandardsIds;
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

export type FilteredChemData = ChemData & {
  exceeded: boolean;
  exceeded_standards: string;
  exceeded_notes: string;
};
