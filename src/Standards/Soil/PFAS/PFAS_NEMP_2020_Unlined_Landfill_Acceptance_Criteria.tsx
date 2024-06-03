import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Unlined_Landfill_Acceptance_Criteria: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#DAEEF3",
    name: "PFAS NEMP 2020 Unlined Landfill Acceptance Criteria",
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
      chemName: "355-46-4",
      value: 20,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxs",
      value: 20,
      units: "mg/kg",
      comments: "",
    },
  ],
};
