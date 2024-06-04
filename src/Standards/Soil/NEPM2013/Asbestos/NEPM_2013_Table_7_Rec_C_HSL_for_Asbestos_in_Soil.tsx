import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_7_Rec_C_HSL_for_Asbestos_in_Soil: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#F2DCDB",
    name: "NEPM 2013 Table 7 Rec C HSL for Asbestos in Soil",
    whiteBar: "NEPM (2013) Soil Investigation Levels",
    rowB: "Rec C HSL for Asbestos",
  },
  values: [
    {
      chemCode: "132207-33-1(ACM)",
      chemName: "Bonded ACM",
      value: 0.02,
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
