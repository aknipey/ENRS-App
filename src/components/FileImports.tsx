import Grid from "@mui/material/Unstable_Grid2";
import { ChemFileImport } from "./ChemFileImport";
import { SampleFileImport } from "./SampleFileImport";
import { StandardsSelector } from "./StandardsSelector";

export function FileImports() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <StandardsSelector />
      </Grid>
      <Grid xs={6}>
        <div>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <SampleFileImport />
            </Grid>
            <Grid xs={12}>
              <ChemFileImport />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
