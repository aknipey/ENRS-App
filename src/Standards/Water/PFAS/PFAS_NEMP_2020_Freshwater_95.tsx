import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Freshwater_95: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
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
