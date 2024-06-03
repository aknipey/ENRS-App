import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_1B_5_Generic_EIL_Comm_Ind: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#DCE6F1",
    name: "NEPM 2013 Table 1B-5 Generic EIL - Comm-Ind",
  },
  values: [
    {
      chemCode: "50-29-3",
      chemName: "DDT",
      value: 640,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-38-2",
      chemName: "Arsenic",
      value: 160,
      units: "mg/kg",
      comments:
        "Aged values apply to arsenic contamination present in soil > 2 years. Refer Schedule B5c for < 2 years.",
    },
    {
      chemCode: "91-20-3",
      chemName: "Naphthalene",
      value: 370,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "91-20-3_VOC",
      chemName: "Naphthalene",
      value: 370,
      units: "mg/kg",
      comments: "",
    },
  ],
};
