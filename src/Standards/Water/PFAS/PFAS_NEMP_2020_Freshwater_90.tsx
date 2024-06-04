import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Freshwater_90: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
    freshwater: true,
  },
  visual: {
    colour: "#AED6F1",
    name: "PFAS NEMP 2020 Freshwater 90%",
    whiteBar: "PFAS NEMP 2020 Water",
    rowB: "90%",
    rowE: "Fresh",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS",
      value: 2,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 632,
      units: "ug/L",
      comments: "",
    },
  ],
};
