export type SelectedStandardsId = number[];

export type SelectedStandardsIds = SelectedStandardsId[];

export type QuickSelectTable = {
  name: string;
  colour: string;
  standards: SelectedStandardsIds;
};
