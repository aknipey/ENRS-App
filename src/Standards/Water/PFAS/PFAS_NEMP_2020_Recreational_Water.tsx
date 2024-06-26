import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Recreational_Water: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
  },
  visual: {
    colour: "#AEB6BF",
    name: "PFAS NEMP 2020 Recreational Water",
    whiteBar: "PFAS NEMP 2020 Water",
    rowB: "PFAS NEMP 2020 Recreational Water",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS only",
      value: 2,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "335-67-1",
      chemName: "PFOA",
      value: 10,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "355-46-4",
      chemName: "PFHxS only",
      value: 2,
      units: "ug/L",
      comments: "",
    },
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS and PFHxS",
      value: 2,
      units: "ug/L",
      comments: "",
    },
  ],
};
