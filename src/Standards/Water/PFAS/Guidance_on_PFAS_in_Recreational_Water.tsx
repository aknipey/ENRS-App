import { Standard } from "../../standardsTypes";

export const Guidance_on_PFAS_in_Recreational_Water: Standard = {
  standardInfo: {
    matrix: "Water",
    leached: false,
  },
  visual: {
    colour: "#AEB6BF",
    name: "Guidance on PFAS in Recreational Water",
  },
  values: [
    {
      chemCode: "355-46-4/1763-23-1",
      chemName: "PFOS/PFHxS",
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
  ],
};
