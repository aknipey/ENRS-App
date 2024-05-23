import { Standard } from "../../standardsTypes";

export const Defence_non_detect: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  values: [
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 0,
      units: "mg/kg",
      comments: "Assumes Equal portions of PFOS/PFHxS",
    },
  ],
};
