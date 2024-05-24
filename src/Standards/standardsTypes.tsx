export type RangeValue = {
  min: number;
  max: number;
};

export type ChemicalProfile = {
  chemCode: string;
  chemName: string;
  value: number | RangeValue;
  units: string;
  comments?: string;
  conditions?: string;
  leached?: boolean;
};

export type Matrix = "Soil" | "Water" | "Error" | "Gas" | "SoilGas";

export type StandardInfo = {
  matrix: Matrix;
  leached: boolean;
};

export type Standard = {
  standardInfo: StandardInfo;
  values: ChemicalProfile[];
};

export type AllStandards = {
  name: string;
  value: AllStandards[] | Standard;
  colour?: string;
}
