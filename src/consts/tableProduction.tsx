import { AnalyteGroup } from "../types/tableProductionTypes";

export const ANALYTE_GROUPS: AnalyteGroup[] = [
  {
    name: "PFAS",
    analyteChemCodes: ["335-67-1", "1763-23-1", "355-46-4/1763-23-1"],
  },
  {
    name: "Organochlorine Pesticides (OCP)",
    analyteChemCodes: [
      "309-00-2 + 60-57-1",
      "309-00-2",
      "60-57-1",
      "57-74-9",
      "DDT+DDE+DDD",
      "76-44-8",
    ],
  },
  {
    name: "BTEX",
    analyteChemCodes: ["71-43-2", "108-88-3", "100-41-4", "1330-20-7"],
  },
  {
    name: "Total Recoverable Hydrocarbons",
    analyteChemCodes: [
      "C6-C9",
      "C10-C36",
      "C6-C10",
      "C10-C16",
      "C16-C34",
      "C34-C40",
    ],
  },
  {
    name: "Polycyclic Aromatic Hydrocarbons (PAHs)",
    analyteChemCodes: ["91-20-3", "50-32-8", "BaP_WHOTEQ", "TOTALPAH"],
  },
  {
    name: "Metals",
    analyteChemCodes: [
      "7440-38-2",
      "7440-43-9",
      "18540-29-9",
      "7440-47-3",
      "7440-50-8",
      "7439-92-1",
      "7439-97-6",
      "7440-02-0",
      "7440-66-6",
    ],
  },
  {
    name: "Foreign Materials",
    analyteChemCodes: ["8007-45-2", "Metal", "Plaster"],
  },
  {
    name: "Asbestos",
    analyteChemCodes: ["132207-33-1(FA&AF)", "132207-33-1(ACM)"],
  },
];
