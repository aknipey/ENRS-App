import { Standard } from "../../standardsTypes";

export const Defence_1: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#E26B0A",
    name: "Defence Category 1",
  },
  values: [
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: -999,
      units: "mg/kg",
      comments: "Assumes Equal portions of PFOS/PFHxS",
    },
  ],
};
