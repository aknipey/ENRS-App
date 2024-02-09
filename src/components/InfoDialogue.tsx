import { DialogContent, DialogTitle, Typography } from "@mui/material";

export function InfoDialogue() {
  return (
    <>
      <DialogTitle>Tool Information</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          <strong>Security:</strong> This tool is an entirely front-end
          application. No data is sent to a server or stored. All data is
          processed in your browser, and will not be remembered on refresh.
        </Typography>
      </DialogContent>
    </>
  );
}
