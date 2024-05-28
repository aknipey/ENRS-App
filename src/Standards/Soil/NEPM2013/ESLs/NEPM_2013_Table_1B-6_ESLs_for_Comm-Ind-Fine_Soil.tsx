import { Standard } from "../../../standardsTypes";

export const NEPM_2013_Table_1B_6_ESLs_for_Comm_Ind_Fine_Soil: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
    fine: true,
  },
  values: [
    {
      chemCode: "100-41-4",
      chemName: "Ethylbenzene",
      value: 185,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "108-88-3",
      chemName: "Toluene",
      value: 135,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "1330-20-7",
      chemName: "Xylenes",
      value: 95,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "50-32-8",
      chemName: "Benzo(a)pyrene",
      value: 1.4,
      units: "mg/kg",
      comments: "Revised as per NEPC errata 6 Feb 2014",
      conditions: ">=0, <2",
    },
    {
      chemCode: "71-43-2",
      chemName: "Benzene",
      value: 95,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "C10-C16",
      chemName: "F2 C10-C16",
      value: 170,
      units: "mg/kg",
      comments:
        "ERRATA Updated 30 April 2014 . Naphthalene should not be subtracted.",
      conditions: ">=0, <2",
    },
    {
      chemCode: "C16-C34",
      chemName: "F3 >C16-C34",
      value: 2500,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "C16-C34SG",
      chemName: "F3 >C16-C34",
      value: 2500,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "C34-C40",
      chemName: "F4 >C34-C40",
      value: 6600,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "C34-C40SG",
      chemName: "F4 >C34-C40",
      value: 6600,
      units: "mg/kg",
      comments: "",
      conditions: ">=0, <2",
    },
    {
      chemCode: "F1-BTEX",
      chemName: "F1 C6-C10",
      value: 215,
      units: "mg/kg",
      comments:
        "Moderate reliability. To obtain F1 subtract the sum of BTEX concentrations from the C6 - C10 fraction.",
      conditions: ">=0, <2",
    },
    {
      chemCode: "F1-BTEXSG",
      chemName: "F1 C6-C10",
      value: 215,
      units: "mg/kg",
      comments:
        "Moderate reliability. To obtain F1 subtract the sum of BTEX concentrations from the C6 - C10 fraction.",
      conditions: ">=0, <2",
    },
    {
      chemCode: "F2-NAPHTHALENE",
      chemName: "F2 C10-C16",
      value: 170,
      units: "mg/kg",
      comments:
        "Errata 30 April 2014. Naphthalene should not be subtracted from >C",
      conditions: ">=0, <2",
    },
    {
      chemCode: "F2-NAPHTHALENESG",
      chemName: "F2 C10-C16",
      value: 170,
      units: "mg/kg",
      comments:
        "Moderate reliability. To obtain F2 subtract napthalene from the >C10 - C16 fraction.",
      conditions: ">=0, <2",
    },
  ],
};
