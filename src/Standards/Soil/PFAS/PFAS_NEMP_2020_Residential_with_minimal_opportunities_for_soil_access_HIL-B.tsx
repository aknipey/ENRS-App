import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Residential_with_minimal_opportunities_for_soil_access_HIL_B: Standard =
  {
    standardInfo: {
      matrix: "Soil",
      leached: false,
    },
    values: [
      {
        chemCode: "1763-23-1",
        chemName: "PFOS only",
        value: 2,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "335-67-1",
        chemName: "PFOA",
        value: 20,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "355-46-4",
        chemName: "PFHxS only",
        value: 2,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "355-46-4/1763-23-1",
        chemName: "PFOS and PFHxS",
        value: 2,
        units: "mg/kg",
        comments: "",
      },
    ],
  };
