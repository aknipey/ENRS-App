import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Industrial_commercial_HIL_D: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#DCE6F1",
    name: "PFAS NEMP 2020 Industrial-commercial HIL-D",
    whiteBar:
        "HEPA - PFAS National Environmental Management Plan 2.0 (NEMP) (2020)",
      rowB: "HIL 'D' PFAS",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS only",
      value: 20,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 50,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "355-46-4",
      chemName: "PFHxS only",
      value: 20,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 20,
      units: "mg/kg",
      comments: "",
    },
  ],
};
