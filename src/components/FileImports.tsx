import Grid from "@mui/material/Grid2";
import { ChemFileImport } from "./ChemFileImport";
import { SampleFileImport } from "./SampleFileImport";
import { StandardsSelector } from "./StandardsSelector";

export function FileImports() {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <StandardsSelector />
      </Grid>
      <Grid size={6}>
        <div>
          <Grid container spacing={2}>
            <Grid size={12}>
              <SampleFileImport />
            </Grid>
            <Grid size={12}>
              <ChemFileImport />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
