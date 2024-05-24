export const DEFENCE_IDS = [
  [0, 2, 0],
  [0, 2, 1],
  [0, 2, 2],
  [0, 2, 3],
  [0, 2, 4],
];

export const NEPM_A_IDS = [
  [0, 1, 0],
  [0, 3, 0, 0],
  [0, 3, 1, 2],
  [0, 3, 2, 4],
  [0, 3, 2, 5],
  [0, 3, 3, 0],
  [0, 3, 4, 6],
  [0, 3, 4, 7],
  [0, 3, 4, 8],
  [0, 3, 5, 2],
  [0, 3, 5, 3],
  [0, 5, 4],
];

export const NEPM_B_IDS = [
  [0, 1, 1],
  [0, 3, 0, 1],
  [0, 3, 1, 2],
  [0, 3, 2, 4],
  [0, 3, 2, 5],
  [0, 3, 3, 1],
  [0, 3, 4, 6],
  [0, 3, 4, 7],
  [0, 3, 4, 8],
  [0, 3, 5, 2],
  [0, 3, 5, 3],
  [0, 5, 5],
];

export const NEPM_C_IDS = [
  [0, 1, 2],
  [0, 3, 0, 2],
  [0, 3, 1, 2],
  [0, 3, 2, 4],
  [0, 3, 2, 5],
  [0, 3, 3, 2],
  [0, 3, 4, 3],
  [0, 3, 4, 4],
  [0, 3, 4, 5],
  [0, 3, 5, 2],
  [0, 3, 5, 3],
  [0, 5, 3],
];

export const NEPM_D_IDS = [
  [0, 1, 3],
  [0, 3, 0, 3],
  [0, 3, 1, 1],
  [0, 3, 2, 2],
  [0, 3, 2, 3],
  [0, 3, 3, 3],
  [0, 3, 4, 0],
  [0, 3, 4, 1],
  [0, 3, 4, 2],
  [0, 3, 5, 0],
  [0, 3, 5, 1],
  [0, 5, 2],
];

export const ACCORDION_SX = {
  "&:before": { display: "none" },
  boxShadow: "none",
  "&:not(:last-child)": {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
  },
  "& .MuiAccordionSummary-root": {
    "&": {
      minHeight: "28px", // Override MUI's default minHeight
    },
    minHeight: "0", // Reduce the minimum height of the summary
    "& > .MuiAccordionSummary-content": {
      margin: "4px 0", // Reduce the vertical margin around the summary content
    },
    "&.Mui-expanded": {
      minHeight: "0",
      margin: "0", // Remove additional margin when expanded
    },
    "& .MuiAccordionSummary-content": {
      margin: "0",
      alignItems: "center", // Align the content to center vertically
      display: "flex", // Use flex to align items
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      marginRight: "8px", // Adjust the right margin of the expand icon if needed
      alignSelf: "center", // Align the icon to center vertically
    },
  },
  "& .MuiAccordionDetails-root": {
    padding: "0 16px 0px",
    display: "block",
    paddingTop: "0px", // Reduce the padding-top of the details
    paddingBottom: "0px", // Set desired padding-bottom for the details
  },
};

export const ACCORDION_SUMMARY_SX = {
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, .03)",
  },
  display: "flex", // Ensure the summary is a flex container
  alignItems: "center", // Center items vertically
  height: "100%", // Take up full height of parent
  width: "100%", // Take up full width of parent
};
