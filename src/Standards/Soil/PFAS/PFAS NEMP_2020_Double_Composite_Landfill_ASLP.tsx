import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Double_Composite_Landfill_ASLP: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: true,
  },
  visual: {
    colour: "#92CDDC",
    name: "PFAS NEMP 2020 Double Composite Landfill ASLP (Leached)",
    whiteBar:
        "HEPA - PFAS National Environmental Management Plan 2.0 (NEMP) (2020)",
      rowB: "Double Composite Lined Landfill",
      rowE: "ASLP mg/L"
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS only",
      value: 7,
      units: "ug/L",
      comments: "",
    },

    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 56,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "355-46-4",
      chemName: "PFHxS only",
      value: 7,
      units: "ug/L",
      comments: "",
    },

    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 7,
      units: "ug/L",
      comments: "",
    },
  ],
};
