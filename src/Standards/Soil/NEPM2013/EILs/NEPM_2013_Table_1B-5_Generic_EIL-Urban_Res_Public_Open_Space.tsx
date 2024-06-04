import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_1B_5_Generic_EIL_Urban_Res_Public_Open_Space: Standard =
  {
    standardInfo: {
      matrix: "Soil",
      leached: false,
    },
    visual: {
      colour: "#EBF1DE",
      name: "NEPM 2013 Table 1B-5 Generic EIL - Urban Residential and Public Open Space",
      whiteBar: "NEPM (2013) Soil Investigation Levels",
      rowB: "Generic EIL - Urban Residential/Public Open Space A/B/C",
    },
    values: [
      {
        chemCode: "50-29-3",
        chemName: "DDT",
        value: 180,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "7440-38-2",
        chemName: "Arsenic",
        value: 100,
        units: "mg/kg",
        comments:
          "Aged values apply to arsenic contamination present in soil > 2 years. Refer Schedule B5c for < 2 years.",
      },
      {
        chemCode: "91-20-3",
        chemName: "Naphthalene",
        value: 170,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "91-20-3_VOC",
        chemName: "Naphthalene",
        value: 170,
        units: "mg/kg",
        comments: "",
      },
    ],
  };
