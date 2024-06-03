import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Interim_Marine_80: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
    marine: true,
  },
  visual: {
    colour: "#D6EAF8",
    name: "PFAS NEMP 2020 Interim Marine 80%",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS",
      value: 31,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 1824,
      units: "ug/L",
      comments: "",
    },
  ],
};
