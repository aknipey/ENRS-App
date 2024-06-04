import { Standard } from "../../standardsTypes";

export const Defence_3: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#FABF8F",
    name: "Defence Category 3",
    whiteBar: "Defence  PFAS Construction & Maintanance Framework (2021)",
    rowB: "Category 3",
  },
  values: [
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 1,
      units: "mg/kg",
      comments: "Assumes Equal portions of PFOS/PFHxS",
    },
  ],
};
