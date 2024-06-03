import { Standard } from "../../standardsTypes";

export const Defence_2: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#F79646",
    name: "Defence Category 2",
  },
  values: [
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 20,
      units: "mg/kg",
      comments: "Assumes Equal portions of PFOS/PFHxS",
    },
  ],
};
