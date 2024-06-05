import { Standard } from "../../standardsTypes";

export const ANZECC_2000_SE_AUS_Estuaries: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
  },
  visual: {
    colour: "#B8CCE4",
    name: "Upland River Default Trigger Values",
    whiteBar: "ANZECC 2000 Water Quality Guidelines",
    rowB: "South-east Australia ANZECC 2000",
    rowE: "Estuaries",
  },
  values: [
    {
      chemCode: "42617-16-3",
      chemName: "Chlorophyll a",
      value: 4,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7723-14-0",
      chemName: "Total Phosphorus",
      value: 30,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7723-14-0_Reac_AsP",
      chemName: "Filtered Reactive Phosphorus",
      value: 5,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "7727-37-9",
      chemName: "Nitrogen (Total)",
      value: 300,
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
      value: 15,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "DO%Sat",
      chemName: "Dissolved Oxygen % Saturation (Lab)",
      value: { min: 80, max: 110 },
      units: "%",
      comments: "",
    },
    {
      chemCode: "pH_Lab",
      chemName: "pH",
      value: { min: 7, max: 8.5 },
      units: "-",
      comments: "",
    },
    {
      chemCode: "TURBIDITY",
      chemName: "Turbidity (Lab)",
      value: { min: 0.5, max: 10 },
      units: "NTU",
      comments: "",
    },
  ],
};
