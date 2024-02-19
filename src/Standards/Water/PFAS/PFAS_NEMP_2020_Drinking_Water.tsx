import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Drinking_Water: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS only",
      value: 0.07,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 0.56,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "355-46-4",
      chemName: "PFHxS only",
      value: 0.07,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 0.07,
      units: "ug/L",
      comments: "",
    },
  ],
};
