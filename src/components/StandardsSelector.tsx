import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { standardsStructure } from "../Standards/standardsStructure";
import { AllStandards } from "../Standards/standardsTypes";
import { useSelectedStandardsIdsAtom } from "../atoms/standardsAtoms";
import {
  ACCORDION_SUMMARY_SX,
  ACCORDION_SX,
} from "./../consts/StandardSelectorConsts";
import { SelectedStandardsId } from "../types/selectedStandardTypes";
import { useCallback } from "react";

export const StandardsSelector = () => {
  const [selectedStandardsIds, setSelectedStandardsIds] =
    useSelectedStandardsIdsAtom();

  const handleStandardSelection = useCallback(
    (path: SelectedStandardsId, selectedIds: SelectedStandardsId[]) => {
      console.log("Path: ", path.join("-"));
      console.log(
        "Selected: ",
        selectedIds.map((id) => id.join("-"))
      );
      setSelectedStandardsIds((prevSelectedStandardsIds) => {
        const isSelected = prevSelectedStandardsIds.some((id) => {
          return id.join("-") === path.join("-");
        });
        if (isSelected) {
          return prevSelectedStandardsIds.filter(
            (id) => id.join("-") !== path.join("-")
          );
        }
        return [...prevSelectedStandardsIds, path];
      });
    },
    [setSelectedStandardsIds]
  );

  const renderStandards = useCallback(
    (standards: AllStandards[], level = 0, path: number[] = []) => {
      return standards.map((standard: AllStandards, index) => {
        const isLeafNode =
          !Array.isArray(standard.value) || standard.value.length === 0;
        const newPath = path.concat(index);
        if (isLeafNode) {
          const isSelected = selectedStandardsIds.some((id) => {
            return id.join("-") === newPath.join("-");
          });
          return (
            <Button
              key={newPath.join("-")}
              onClick={(event) => {
                console.log("Clicked on: ", newPath.join("-"));
                handleStandardSelection(newPath, selectedStandardsIds);
              }}
              sx={{
                width: "100%",
                backgroundColor: isSelected ? "primary.main" : "transparent",
                color: isSelected ? "primary.contrastText" : "inherit",
                "&:hover": {
                  backgroundColor: isSelected
                    ? "primary.light"
                    : "rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Typography
                fontSize={"small"}
                width={"100 %"}
                color={isSelected ? "white" : "primary"}
              >
                {standard.name}
              </Typography>
            </Button>
          );
        }

        return (
          <Accordion
            key={newPath.join("-")}
            sx={{ marginLeft: `${level * 8}px`, ...ACCORDION_SX }}
            square // Add this to remove the default paper elevation border
          >
            <AccordionSummary
              expandIcon={isLeafNode ? null : <ExpandMoreIcon />}
              aria-controls={`panel-content-${newPath.join("-")}`}
              id={`panel-header-${newPath.join("-")}`}
              sx={ACCORDION_SUMMARY_SX}
              disableTouchRipple
              disableRipple
              aria-disabled
            >
              <Typography
                fontSize={20 - level * 3}
                fontWeight={!level ? "bold" : "normal"}
              >
                {standard.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {renderStandards(standard.value as AllStandards[], level + 1, [
                ...newPath,
              ])}
            </AccordionDetails>
          </Accordion>
        );
      });
    },
    [handleStandardSelection, selectedStandardsIds]
  );

  return (
    <Card sx={{ height: "100%" }} elevation={2}>
      <Grid container spacing={2} padding={2}>
        <Grid xs={12}>
          <Typography variant="h6">Select Standards to Apply</Typography>
          <Divider sx={{ bgcolor: "black", height: 2 }} />
        </Grid>
        <Grid xs={12}>
          <FormGroup>{renderStandards(standardsStructure)}</FormGroup>
        </Grid>
      </Grid>
    </Card>
  );
};
