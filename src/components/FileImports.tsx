import Grid from "@mui/material/Unstable_Grid2";
import { ChemFileImport } from "./ChemFileImport";
import { SampleFileImport } from "./SampleFileImport";
import { StandardsSelector } from "./StandardsSelector";

export function FileImports() {
  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <StandardsSelector />
      </Grid>
      <Grid xs={4}>
        <SampleFileImport />
      </Grid>
      <Grid xs={4}>
        <ChemFileImport />
      </Grid>
    </Grid>
  );
}
