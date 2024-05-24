import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback } from "react";
import { useSelectedStandardsIdsAtom } from "../atoms/standardsAtoms";
import {
  DEFENCE_IDS,
  NEPM_A_IDS,
  NEPM_B_IDS,
  NEPM_C_IDS,
  NEPM_D_IDS,
} from "../consts/StandardSelectorConsts";

export const QuickSelect = () => {
  const [selectedStandardsIds, setSelectedStandardIds] =
    useSelectedStandardsIdsAtom();

  const changeDefence = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      if (checked) {
        DEFENCE_IDS.forEach((id: number[]) => {
          if (!selectedStandardsIds.includes(id)) {
            setSelectedStandardIds((prev) => [...prev, id]);
          }
        });
      } else {
        const newStandards = selectedStandardsIds.filter(
          (id: number[]) => !DEFENCE_IDS.includes(id)
        );
        setSelectedStandardIds(newStandards);
      }
    },
    [selectedStandardsIds, setSelectedStandardIds]
  );

  const changeNEPMA = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      if (checked) {
        NEPM_A_IDS.forEach((id: number[]) => {
          if (!selectedStandardsIds.includes(id)) {
            setSelectedStandardIds((prev) => [...prev, id]);
          }
        });
      } else {
        const newStandards = selectedStandardsIds.filter(
          (id: number[]) => !NEPM_A_IDS.includes(id)
        );
        setSelectedStandardIds(newStandards);
      }
    },
    [selectedStandardsIds, setSelectedStandardIds]
  );

  const changeNEPMB = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      if (checked) {
        NEPM_B_IDS.forEach((id: number[]) => {
          if (!selectedStandardsIds.includes(id)) {
            setSelectedStandardIds((prev) => [...prev, id]);
          }
        });
      } else {
        const newStandards = selectedStandardsIds.filter(
          (id: number[]) => !NEPM_B_IDS.includes(id)
        );
        setSelectedStandardIds(newStandards);
      }
    },
    [selectedStandardsIds, setSelectedStandardIds]
  );

  const changeNEPMC = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      if (checked) {
        NEPM_C_IDS.forEach((id: number[]) => {
          if (!selectedStandardsIds.includes(id)) {
            setSelectedStandardIds((prev) => [...prev, id]);
          }
        });
      } else {
        const newStandards = selectedStandardsIds.filter(
          (id: number[]) => !NEPM_C_IDS.includes(id)
        );
        setSelectedStandardIds(newStandards);
      }
    },
    [selectedStandardsIds, setSelectedStandardIds]
  );

  const changeNEPMD = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      if (checked) {
        NEPM_D_IDS.forEach((id: number[]) => {
          if (!selectedStandardsIds.includes(id)) {
            setSelectedStandardIds((prev) => [...prev, id]);
          }
        });
      } else {
        const newStandards = selectedStandardsIds.filter(
          (id: number[]) => !NEPM_D_IDS.includes(id)
        );
        setSelectedStandardIds(newStandards);
      }
    },
    [selectedStandardsIds, setSelectedStandardIds]
  );

  return (
    <>
      <Grid container>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={changeNEPMA} />}
              label="NEPM A"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={changeNEPMB} />}
              label="NEPM B"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={changeNEPMC} />}
              label="NEPM C"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={changeNEPMD} />}
              label="NEPM D"
            />
          </FormGroup>
        </Grid>
        <Grid xs={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={changeDefence} />}
              label="Defence"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};
