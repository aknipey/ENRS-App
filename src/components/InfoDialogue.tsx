import { DialogContent, DialogTitle, Typography } from "@mui/material";

export function InfoDialogue() {
  return (
    <>
      <DialogTitle>Tool Information</DialogTitle>
      <DialogContent>
        <strong>Instructions:</strong>
        <ol>
          <Typography variant="body1">
            <li>
              Input the chemistry and sample files by dragging or dropping them
              over their respective boxes, or by using the file selection tool.
            </li>
          </Typography>
          <Typography variant="body1">
            <li>
              Select the relevant standards to screen against. You can select
              more than one standard.
            </li>
          </Typography>
          <Typography variant="body1">
            <li>
              Click "Apply Standards" to apply the selected standards to the
              data.
            </li>
          </Typography>
          <Typography variant="body1">
            <li>Click "Download Results" to download the results.</li>
          </Typography>
        </ol>

        <Typography variant="body1">
          <strong>Security:</strong> This tool is an entirely front-end
          application. No data is sent to a server or stored. All data is
          processed in your browser, and will not be remembered on refresh.
        </Typography>
      </DialogContent>
    </>
  );
}
