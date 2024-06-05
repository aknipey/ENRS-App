import { Standard } from "../../standardsTypes";

export const ANZECC_2000_SE_AUS_Upland_River: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
  },
  visual: {
    colour: "#B8CCE4",
    name: "Upland Rivers Table 3.3.2-3",
    whiteBar: "ANZECC 2000 Water Quality Guidelines",
    rowB: "South-east Australia ANZECC 2000",
    rowE: "Upland River",
  },
  values: [
    {
      chemCode: "42617-16-3",
      chemName: "Chlorophyll a",
      value: -999,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7723-14-0",
      chemName: "Total Phosphorus",
      value: 20,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7723-14-0_Reac_AsP",
      chemName: "Filtered Reactive Phosphorus",
      value: 15,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7727-37-9",
      chemName: "Nitrogen (Total)",
      value: 250,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "NOx_as_N",
      chemName: "Nitrogen (Total Oxidised)",
      value: 15,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "NH4+",
      chemName: "Ammonium Ion",
      value: 13,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "DO%Sat",
      chemName: "Dissolved Oxygen % Saturation (Lab)",
      value: { min: 90, max: 110 },
      units: "%",
      comments: "",
    },
    {
      chemCode: "pH_Lab",
      chemName: "pH",
      value: { min: 6.5, max: 7.5 },
      units: "-",
      comments: "",
    },
    {
      chemCode: "EC_Lab",
      chemName: "Salinity",
      value: { min: 30, max: 350 },
      units: "uS/cm",
      comments: "",
    },
    {
      chemCode: "TURBIDITY",
      chemName: "Turbidity (Lab)",
      value: { min: 2, max: 25 },
      units: "NTU",
      comments: "",
    },
  ],
};
