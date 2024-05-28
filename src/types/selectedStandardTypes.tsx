import { Standard } from "../Standards/standardsTypes";

export type SelectedStandardsId = number[];

export type SelectedStandardsIds = SelectedStandardsId[];

export type QuickSelectTable = {
  name: string;
  colour: string;
  standards: Standard[];
};
