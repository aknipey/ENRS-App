export type RangeValue = {
  min: number;
  max: number;
};

export type ChemicalProfile = {
  chemCode: string;
  chemName: string;
  value: number | RangeValue;
  units: string;
  leached?: boolean;
};

export type StandardInfo = {
  matrix: "Soil" | "Water";
};

export type Standard = {
  standardInfo: StandardInfo;
  values: ChemicalProfile[];
};
