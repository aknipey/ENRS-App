import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Ecological_direct_exposure: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#C4BD97",
    name: "PFAS NEMP 2020 Ecological direct exposure",
    whiteBar:
        "HEPA - PFAS National Environmental Management Plan 2.0 (NEMP) (2020)",
      rowB: "Ecological direct exposure",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS",
      value: 1,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 10,
      units: "mg/kg",
      comments: "",
    },
  ],
};
