import { Stack, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { InfoButton } from "./InfoButton";
import { ApplyStandards } from "./ApplyStandards";
import { ResultsDownload } from "./ResultsDownload";

export function TopAppBar() {
  return (
    <AppBar position={"sticky"}>
      <Toolbar>
        <Stack justifyContent={'space-between'} direction={"row"} width={'100%'}>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Typography>ENRS Exceedance Tables</Typography>
            <InfoButton />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems={"center"}
            justifyContent={"right"}
            justifySelf={"right"}
          >
            <ApplyStandards />
            <ResultsDownload />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
