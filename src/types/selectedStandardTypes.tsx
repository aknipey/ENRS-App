import { AllStandards } from "../Standards/standardsTypes";

export type SelectedStandardsId = number[];

export type SelectedStandardsIds = SelectedStandardsId[];

export type QuickSelectTable = {
  name: string;
  colour: string;
  standards: AllStandards[];
};

export type SedimentSets_T = {
  sand: boolean;
  silt: boolean;
  clay: boolean;
}

export type TextureSets_T = {
  coarse: boolean;
  fine: boolean;
}

export type WaterSets_T = {
  marine: boolean;
  freshwater: boolean;
}

export type ScreenedQSRules = {
  sediment: SedimentSets_T;
  texture: TextureSets_T;
  water: WaterSets_T;
}




