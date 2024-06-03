import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_7_Comm_Ind_D_HSL_for_Asbestos_in_Soil: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#DCE6F1",
    name: "NEPM 2013 Table 7 Comm-Ind D HSL for Asbestos in Soil",
  },
  values: [
    {
      chemCode: "132207-33-1(ACM)",
      chemName: "Bonded ACM",
      value: 0.05,
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
