import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Interim_Marine_99: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
    marine: true,
  },
  visual: {
    colour: "#5DADE2",
    name: "PFAS NEMP 2020 Interim Marine 99%",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS",
      value: 0.00023,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 19,
      units: "ug/L",
      comments: "",
    },
  ],
};
