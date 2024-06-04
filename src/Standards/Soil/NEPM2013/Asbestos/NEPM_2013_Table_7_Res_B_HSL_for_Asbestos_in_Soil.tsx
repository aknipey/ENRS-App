import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_7_Res_B_HSL_for_Asbestos_in_Soil: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#FFFFCC",
    name: "NEPM 2013 Table 7 Res B HSL for Asbestos in Soil",
    whiteBar: "NEPM (2013) Soil Investigation Levels",
    rowB: "Res B HSL for Asbestos",
  },
  values: [
    {
      chemCode: "132207-33-1(ACM)",
      chemName: "Bonded ACM",
      value: 0.04,
      units: "%",
      comments: "",
    },
    {
      chemCode: "132207-33-1(FA&AF)",
      chemName: "FA and AF (friable asbestos)",
      value: 0.001,
      units: "%",
      comments: "",
    },
  ],
};
