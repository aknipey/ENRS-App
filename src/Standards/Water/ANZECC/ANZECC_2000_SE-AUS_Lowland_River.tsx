import { Standard } from "../../standardsTypes";

export const ANZECC_2000_SE_AUS_Lowland_River: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
  },
  visual: {
    colour: "#B8CCE4",
    name: "Upland River Default Trigger Values",
    whiteBar: "ANZECC 2000 Water Quality Guidelines",
    rowB: "South-east Australia ANZECC 2000",
    rowE: "Lowland River",
  },
  values: [
    {
      chemCode: "42617-16-3",
      chemName: "Chlorophyll a",
      value: 5,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7723-14-0",
      chemName: "Total Phosphorus",
      value: 50,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7723-14-0_Reac_AsP",
      chemName: "Filtered Reactive Phosphorus",
      value: 20,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7727-37-9",
      chemName: "Nitrogen (Total)",
      value: 500,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "NOx_as_N",
      chemName: "Nitrogen (Total Oxidised)",
      value: 40,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "NH4+",
      chemName: "Ammonium Ion",
      value: 20,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "DO%Sat",
      chemName: "Dissolved Oxygen % Saturation (Lab)",
      value: { min: 85, max: 110 },
      units: "%",
      comments: "",
    },
    {
      chemCode: "pH_Lab",
      chemName: "pH",
      value: { min: 6.5, max: 8 },
      units: "-",
      comments: "",
    },
    {
      chemCode: "EC_Lab",
      chemName: "Salinity",
      value: { min: 125, max: 2200 },
      units: "uS/cm",
      comments: "",
    },
    {
      chemCode: "TURBIDITY",
      chemName: "Turbidity (Lab)",
      value: { min: 6, max: 50 },
      units: "NTU",
      comments: "",
    },
  ],
};
