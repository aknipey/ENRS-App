import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_1B_7_Management_Limits_Comm_Ind_Fine_Soil: Standard =
  {
    standardInfo: {
      matrix: "Soil",
      leached: false,
      fine: true,
    },
    visual: {
      colour: "#DCE6F1",
      name: "NEPM 2013 Table 1B-7 Management Limits Comm-Ind Fine Soil",
      whiteBar: "NEPM (2013) Soil Investigation Levels",
      rowB: "Management Limits 'D' (Comm-Ind)",
      rowE: "Fine",
    },
    values: [
      {
        chemCode: "C10-C16",
        chemName: "F2 C10-C16",
        value: 1000,
        units: "mg/kg",
        comments:
          "Separate management limits for BTEX & naphthalene are not available hence should not be subtracted from the relevant fractions to obtain F1 & F2",
      },
      {
        chemCode: "C16-C34",
        chemName: "F3 >C16-C34",
        value: 5000,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "C34-C40",
        chemName: "F4 >C34-C40",
        value: 10000,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "C6-C10",
        chemName: "F1 C6-C10",
        value: 800,
        units: "mg/kg",
        comments:
          "Separate management limits for BTEX & naphthalene are not available hence should not be subtracted from the relevant fractions to obtain F1 & F2",
      },
    ],
  };
