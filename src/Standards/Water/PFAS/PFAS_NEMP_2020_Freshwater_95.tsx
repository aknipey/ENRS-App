import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Freshwater_95: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
    freshwater: true,
  },
  visual: {
    colour: "#85C1E9",
    name: "PFAS NEMP 2020 Freshwater 95%",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS",
      value: 0.13,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 220,
      units: "ug/L",
      comments: "",
    },
  ],
};
