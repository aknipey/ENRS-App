import { Standard } from "../../standardsTypes";

export const NSW_EPA_Recovered_Aggregate_Maximum_Average: Standard = {
  standardInfo: {
    matrix: "Soil",
    leached: false,
    max_average: true,
  },
  visual: {
    colour: "#FDE9D9",
    name: "NSW EPA Recovered Aggregate Maximum Average",
  },
  values: [
    {
      chemCode: "7439-97-6",
      chemName: "Mercury",
      value: 0.5,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-43-9",
      chemName: "Cadmium",
      value: 0.5,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7439-92-1",
      chemName: "Lead",
      value: 75,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-38-2",
      chemName: "Arsenic",
      value: 20,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-47-3",
      chemName: "Chromium (total)",
      value: 60,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-50-8",
      chemName: "Copper",
      value: 60,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-02-0",
      chemName: "Nickel",
      value: 40,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "7440-66-6",
      chemName: "Zinc",
      value: 200,
      units: "mg/kg",
      comments: "",
    },
    {
      chemCode: "EC_Field",
      chemName: "Electrical Conductivity (field)",
      value: 1.5,
      units: "dS/m",
      comments: "",
    },
    {
      chemCode: "Metal",
      chemName: "Metal",
      value: 1,
      units: "%",
      comments: "",
    },
    {
      chemCode: "Plaster",
      chemName: "Plaster",
      value: 0.3,
      units: "%",
      comments: "",
    },
    {
      chemCode: "8007-45-2",
      chemName: "Coal Tar",
      value: 0,
      units: "%",
      comments: "",
    },
  ],
};
