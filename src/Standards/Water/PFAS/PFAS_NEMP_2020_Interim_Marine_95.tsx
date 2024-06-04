import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Interim_Marine_95: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
    marine: true,
  },
  visual: {
    colour: "#85C1E9",
    name: "PFAS NEMP 2020 Interim Marine 95%",
    whiteBar: "PFAS NEMP 2020 Water",
    rowB: "95%",
    rowE: "Marine",
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
