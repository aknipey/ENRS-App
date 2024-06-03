import { memo } from "react";
import { QuickSelectTable } from "../types/selectedStandardTypes";
import { Box, Checkbox } from "@mui/material";

type Props = {
  table: QuickSelectTable;
};

export const BlackBackedCheckbox = memo(function BlackBackedCheckboxComp({
  table,
}: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        padding: "4px",
      }}
      key={table.name}
    >
      <Box
        sx={{
          position: "absolute",
          top: "27%",
          left: "25%",
          width: "45%",
          height: "45%",
          backgroundColor: "black",
          zIndex: 0,
        }}
      />
      <Checkbox
        sx={{
          "&.Mui-checked": {
            color: table.colour,
          },
          padding: 0,
          position: "relative",
          zIndex: 1,
        }}
        checked
        disabled
      />
    </Box>
  );
});
