import { Standard } from "../../standardsTypes";

export const PFAS_NEMP_2020_Ecological_indirect_exposure: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
  },
  visual: {
    colour: "#DDD9C4",
    name: "PFAS NEMP 2020 Ecological indirect exposure",
  },
  values: [
    {
      chemCode: "1763-23-1",
      chemName: "PFOS",
      value: 0.01,
      units: "mg/kg",
      comments: "",
    },
  ],
};
