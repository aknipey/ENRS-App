import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { QUICK_SELECTS } from "../consts/quickSelectConsts";
import { useQuickSelectedTablesAtom } from "../atoms/standardsAtoms";
import { useCallback } from "react";
import { QuickSelectTable } from "../types/selectedStandardTypes";

export const QuickSelect = () => {
  const [, setQuickSelectedTables] = useQuickSelectedTablesAtom();

  const handleQuickSelect = useCallback(
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuickSelectedTables((prevSelected: QuickSelectTable[]) => {
        if (event.target.checked) {
          return [...prevSelected, QUICK_SELECTS[index]];
        } else {
          return prevSelected.filter((qS) => qS !== QUICK_SELECTS[index]);
        }
      });
    },
    [setQuickSelectedTables]
  );

  return (
    <>
      <Grid container rowSpacing={0.6}>
        {QUICK_SELECTS.map((quickSelect, i) => {
          return (
            <Grid size={3} key={i}>
              <FormGroup>
                <FormControlLabel
                  sx={{ backgroundColor: quickSelect.colour }}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                      onChange={handleQuickSelect(i)}
                    />
                  }
                  label={quickSelect.name}
                />
              </FormGroup>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
