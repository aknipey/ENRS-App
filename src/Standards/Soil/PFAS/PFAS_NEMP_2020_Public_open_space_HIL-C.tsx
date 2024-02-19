import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Public_open_space_HIL_C: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS only",
      value: 1,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 10,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "355-46-4",
      chemName: "PFHxS only",
      value: 1,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 1,
      units: "mg/kg",
      comments: "",
    },
  ],
};
