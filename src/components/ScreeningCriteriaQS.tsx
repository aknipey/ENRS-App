import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useScreeningCriteriaQSAtom } from "../atoms/standardsAtoms";
import {
  SEDIMENT_SETS,
  TEXTURE_SETS,
  WATER_SETS,
} from "../consts/screeningCriteriaQSConsts";
import { useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export const ScreeningCriteriaQS = () => {
  const [screeningCriteriaQS, setScreeningCriteriaQS] =
    useScreeningCriteriaQSAtom();

  const handleChangeSediment = useCallback(
    (event: SelectChangeEvent) => {
      setScreeningCriteriaQS((prev) => {
        return {
          ...prev,
          sediment: SEDIMENT_SETS[parseInt(event.target.value)],
        };
      });
    },
    [setScreeningCriteriaQS]
  );

  const handleChangeTexture = useCallback(
    (event: SelectChangeEvent) => {
      setScreeningCriteriaQS((prev) => {
        return {
          ...prev,
          texture: TEXTURE_SETS[parseInt(event.target.value)],
        };
      });
    },
    [setScreeningCriteriaQS]
  );

  const handleChangeSalinity = useCallback(
    (event: SelectChangeEvent) => {
      setScreeningCriteriaQS((prev) => {
        return {
          ...prev,
          water: WATER_SETS[parseInt(event.target.value)],
        };
      });
    },
    [setScreeningCriteriaQS]
  );

  return (
    <>
      <Grid container justifyContent={"space-around"}>
        <Grid xs={3.8}>
          <FormControl fullWidth>
            <InputLabel id="sediment-type">Sediment</InputLabel>
            <Select
              labelId="soil-type"
              id="soil-type-select"
              label="Soil Type"
              onChange={handleChangeSediment}
              value={SEDIMENT_SETS.indexOf(
                screeningCriteriaQS.sediment
              ).toString()}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Sand</MenuItem>
              <MenuItem value={2}>Silt</MenuItem>
              <MenuItem value={3}>Clay</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={3.8}>
          <FormControl fullWidth>
            <InputLabel id="texture">Texture</InputLabel>
            <Select
              labelId="texture-type"
              id="texture-type-select"
              label="texture Type"
              onChange={handleChangeTexture}
              value={TEXTURE_SETS.indexOf(
                screeningCriteriaQS.texture
              ).toString()}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Coarse</MenuItem>
              <MenuItem value={2}>Fine</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={3.8}>
          <FormControl fullWidth>
            <InputLabel id="water-type">Salinity</InputLabel>
            <Select
              labelId="water-type"
              id="water-type-select"
              label="Water Type"
              onChange={handleChangeSalinity}
              value={WATER_SETS.indexOf(screeningCriteriaQS.water).toString()}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Marine</MenuItem>
              <MenuItem value={2}>Freshwater</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
