import { SelectedStandardsIds } from "./selectedStandardTypes";

export type JSONObject = Record<string, any>;

export type AllInputs = {
  chemFileName: string;
  sampleFileName: string;
  selectedStandardsIds: SelectedStandardsIds;
};
