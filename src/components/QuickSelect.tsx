import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback } from "react";
import { useSelectedStandardsIdsAtom } from "../atoms/standardsAtoms";

export const QuickSelect = () => {
  const [selectedStandardsIds, setSelectedStandardIds] =
    useSelectedStandardsIdsAtom();

  

  return (
    <>
      <Grid container rowSpacing={0.6}>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              sx={{ backgroundColor: "#EBF1DE" }}
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="NEPM A"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              sx={{ backgroundColor: "#FFFFCC" }}
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="NEPM B"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              sx={{ backgroundColor: "#F2DCDB" }}
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="NEPM C"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              sx={{ backgroundColor: "#DCE6F1" }}
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="NEPM D"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              sx={{ backgroundColor: "#FABF8F" }}
              control={
                <Checkbox
                  sx={{
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              }
              label="Defence"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};
