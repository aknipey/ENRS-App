import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_1B_5_Generic_EIL_Areas_of_Ecological_Significance: Standard =
  {
    standardInfo: {
      matrix: "Soil",
      leached: false,
    },
    visual: {
      colour: "#DDD9C4",
      name: "NEPM 2013 Table 1B-5 Generic EIL - Areas of Ecological Significance",
      whiteBar: "NEPM (2013) Soil Investigation Levels",
      rowB: "Generic EIL - Areas of Ecological Significance",
    },
    values: [
      {
        chemCode: "50-29-3",
        chemName: "DDT",
        value: 3,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "7440-38-2",
        chemName: "Arsenic",
        value: 40,
        units: "mg/kg",
        comments:
          "Aged values apply to arsenic contamination present in soil > 2 years. Refer Schedule B5c for < 2 years.",
      },
      {
        chemCode: "91-20-3",
        chemName: "Naphthalene",
        value: 10,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "91-20-3_VOC",
        chemName: "Naphthalene",
        value: 10,
        units: "mg/kg",
        comments: "",
      },
    ],
  };
