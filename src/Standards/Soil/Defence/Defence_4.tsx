import { Standard } from "../../standardsTypes";

export const Defence_4: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#FCD5B4",
    name: "Defence Category 4",
  },
  values: [
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 0.01,
      units: "mg/kg",
      comments: "Assumes Equal portions of PFOS/PFHxS",
    },
  ],
};
