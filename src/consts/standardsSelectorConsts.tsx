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
