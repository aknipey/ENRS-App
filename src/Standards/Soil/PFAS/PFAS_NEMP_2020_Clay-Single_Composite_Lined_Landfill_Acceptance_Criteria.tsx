import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Clay_Single_Composite_Lined_Landfill_Acceptance_Criteria: Standard =
  {
    standardInfo: {
      matrix: "Soil",
      leached: false,
    },
    visual: {
      colour: "#B7DEE8",
      name: "PFAS NEMP 2020 Clay Single Composite Lined Landfill Acceptance Criteria",
      whiteBar:
        "HEPA - PFAS National Environmental Management Plan 2.0 (NEMP) (2020)",
      rowB: "Clay/Single Composite Lined Landfill",
      rowE: "Total mg/kg"
    },
    values: [
      {
        chemCode: "1763-23-1",
        chemName: "PFOS only",
        value: 50,
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
        chemName: "PFHxS only",
        value: 50,
        units: "mg/kg",
        comments: "",
      },
      {
        chemCode: "355-46-4/1763-23-1",
        chemName: "PFOS and PFHxS",
        value: 50,
        units: "mg/kg",
        comments: "",
      },
    ],
  };
