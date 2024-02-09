import { Stack,  Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { InfoButton } from "./InfoButton";

export function TopAppBar() {
  return (
    <AppBar position={"sticky"}>
      <Toolbar>
        <Stack direction="row" spacing={2} alignItems={'center'}>
        <Typography>ENRS Exceedance Tables</Typography>
        <InfoButton />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
