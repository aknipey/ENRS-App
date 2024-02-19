import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Residential_with_garden_accessible_soil_HIL_A: Standard =
  {
    standardInfo: {
      matrix: "Soil",
      leached: false,
    },
    values: [
      {
        chemCode: "1763-23-1",
        chemName: "PFOS only",
        value: 0.01,
        units: "mg/kg",
        comments: "Assumes Equal portions of PFOS/PFHxS",
      },
      {
        chemCode: "335-67-1",
        chemName: "PFOA",
        value: 0.1,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "355-46-4",
        chemName: "PFHxS only",
        value: 0.01,
        units: "mg/kg",
        comments: "Assumes Equal portions of PFOS/PFHxS",
      },
      {
        chemCode: "355-46-4/1763-23-1",
        chemName: "PFOS and PFHxS",
        value: 0.01,
        units: "mg/kg",
        comments: "Assumes Equal portions of PFOS/PFHxS",
      },
    ],
  };
