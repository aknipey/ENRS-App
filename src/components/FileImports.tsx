import Grid from "@mui/material/Unstable_Grid2";
import { ChemFileImport } from "./ChemFileImport";
import { SampleFileImport } from "./SampleFileImport";

export function FileImports() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <SampleFileImport />
      </Grid>
      <Grid xs={6}>
        <ChemFileImport />
      </Grid>
    </Grid>
  );
}
