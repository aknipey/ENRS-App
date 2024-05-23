import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";

export const QuickSelect = () => {
  return (
    <>
      Quick Select
      <Grid container>
        <Grid xs={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="NEPM A" />
          </FormGroup>
        </Grid>
        <Grid xs={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="NEPM B" />
          </FormGroup>
        </Grid>
        <Grid xs={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="NEPM C" />
          </FormGroup>
        </Grid>
        <Grid xs={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="NEPM D" />
          </FormGroup>
        </Grid>
        <Grid xs={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Waste No leached" />
          </FormGroup>
        </Grid>
        <Grid xs={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Waste Leached" />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};
