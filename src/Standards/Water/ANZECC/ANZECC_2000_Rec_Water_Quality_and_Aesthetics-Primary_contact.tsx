import { Standard } from "../../standardsTypes";

export const ANZECC_2000_Rec_Water_Quality_and_Aesthetics_Primary_contact: Standard =
  {
    standardInfo: {
      matrix: "Water",
      leached: false,
    },
    visual: {
      colour: "#AEB6BF",
      name: "ANZECC 2000 Rec Water Quality and Aesthetics - Primary contact",
      whiteBar: "ANZECC 2000 Water Quality Guidelines",
      rowB: "Rec Water Quality and Aesthetics - Primary Contact",
    },
    values: [
      {
        chemCode: "Enterococci",
        chemName: "Enterococci",
        value: 60,
        units: "CFU/100ml",
        comments:
          "Max in any one sample (min 5 samples @ reg intervals > 1 month), median = 35 CFU/100ml (Bathing season)",
      },
      {
        chemCode: "Faecal_Coliform",
        chemName: "Faecal Coliforms",
        value: 600,
        units: "CFU/100ml",
        comments:
          "Max in any one sample (min 5 samples @ reg intervals > 1 month), median = 150 CFU/100ml (Bathing season)",
      },
    ],
  };
