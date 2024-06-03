import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Clay_Single_Composite_Lined_Landfill_ASLP: Standard =
  {
    standardInfo: {
      matrix: "Water",
      leached: true,
    },
    visual: {
      colour: "#B7DEE8",
      name: "PFAS NEMP 2020 Clay Single Composite Lined Landfill ASLP (Leached)",
    },
    values: [
      {
        chemCode: "1763-23-1",
        chemName: "PFOS only",
        value: 0.7,
        units: "ug/L",
        comments: "",
      },

      {
        chemCode: "335-67-1",
        chemName: "PFOA",
        value: 5.6,
        units: "ug/L",
        comments: "",
      },
      {
        chemCode: "355-46-4",
        chemName: "PFHxS only",
        value: 0.7,
        units: "ug/L",
        comments: "",
      },

      {
        chemCode: "355-46-4/1763-23-1",
        chemName: "PFOS and PFHxS",
        value: 0.7,
        units: "ug/L",
        comments: "",
      },
    ],
  };
