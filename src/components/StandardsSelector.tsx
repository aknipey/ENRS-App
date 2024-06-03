import React, { useState, useCallback, ChangeEvent } from "react";
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
import {
  useQuickSelectedTablesAtom,
  useScreeningCriteriaQSAtom,
  useSelectedStandardsIdsAtom,
} from "../atoms/standardsAtoms";
import { SelectedStandardsId } from "../types/selectedStandardTypes";
import { QuickSelect } from "./QuickSelect";
import { ScreeningCriteriaQS } from "./ScreeningCriteriaQS";
import { screenedOut } from "../utils/selections";
import { BlackBackedCheckbox } from "./BlackBackedCheckbox";
import {
  ACCORDION_SUMMARY_SX,
  ACCORDION_SX,
} from "../consts/standardSelectorConsts";

export const StandardsSelector: React.FC = () => {
  const [selectedStandardsIds, setSelectedStandardsIds] =
    useSelectedStandardsIdsAtom();
  const [quickSelectedTables] = useQuickSelectedTablesAtom();
  const [screeningCriteriaQS] = useScreeningCriteriaQSAtom();

  const [expandedAccordions, setExpandedAccordions] = useState<
    Map<string, boolean>
  >(new Map());

  const [expandAll, setExpandAll] = useState<boolean>(false);

  const handleStandardSelection = useCallback(
    (path: SelectedStandardsId) => {
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

  const handleExpandAll = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);

    const newExpandedAccordions = new Map<string, boolean>();
    const setAllExpanded = (standards: AllStandards[], path: number[] = []) => {
      standards.forEach((standard, index) => {
        const newPath = path.concat(index);
        if (!Array.isArray(standard.value) || standard.value.length === 0)
          return;
        newExpandedAccordions.set(newPath.join("-"), newExpandAll);
        setAllExpanded(standard.value, newPath);
      });
    };
    setAllExpanded(standardsStructure);
    setExpandedAccordions(newExpandedAccordions);
  };

  const handleAccordionChange =
    (path: number[]) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedAccordions((prevExpandedAccordions) => {
        const newExpandedAccordions = new Map(prevExpandedAccordions);
        newExpandedAccordions.set(path.join("-"), isExpanded);
        return newExpandedAccordions;
      });
    };

  const renderStandards = useCallback(
    (standards: AllStandards[], level = 0, path: number[] = []) => {
      return standards.map((standard: AllStandards, index: number) => {
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
              onClick={() => handleStandardSelection(newPath)}
              sx={{
                width: "100%",
                backgroundColor: isSelected ? standard.colour : "transparent",
                color: isSelected ? "primary.contrastText" : "inherit",
                "&:hover": {
                  backgroundColor: standard.colour,
                  "& .hover-text": {
                    fontWeight: "bold",
                  },
                },
              }}
            >
              {quickSelectedTables.map((table) => {
                return table.standards.some(
                  (s) => s.value === standard.value
                ) && !screenedOut(standard, screeningCriteriaQS) ? (
                  <BlackBackedCheckbox table={table} />
                ) : null;
              })}
              <Typography
                className="hover-text"
                fontSize={"small"}
                width={"100%"}
                color={isSelected ? "black" : "primary"}
              >
                {standard.name}
              </Typography>
            </Button>
          );
        }

        const pathKey = newPath.join("-");
        const isExpanded = expandedAccordions.get(pathKey) ?? false;

        return (
          <Accordion
            key={pathKey}
            sx={{ marginLeft: `${level * 8}px`, ...ACCORDION_SX }}
            expanded={isExpanded}
            onChange={handleAccordionChange(newPath)}
            square
          >
            <AccordionSummary
              expandIcon={isLeafNode ? null : <ExpandMoreIcon />}
              aria-controls={`panel-content-${pathKey}`}
              id={`panel-header-${pathKey}`}
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
    [
      handleStandardSelection,
      selectedStandardsIds,
      expandedAccordions,
      quickSelectedTables,
      screeningCriteriaQS,
    ]
  );

  return (
    <Card sx={{ height: "100%" }} elevation={2}>
      <Grid container spacing={1} padding={2}>
        <Grid xs={3}>
          <Typography variant="h6" fontWeight={"bold"}>
            Quick-Select Tables
          </Typography>
        </Grid>
        <Grid xs={9}>
          <ScreeningCriteriaQS />
        </Grid>
        <Grid xs={12}>
          <QuickSelect />
        </Grid>
        <Grid xs={12}>
          <Divider sx={{ bgcolor: "black", height: 2 }} />
        </Grid>
        <Grid xs={10}>
          <Typography variant="h6" fontWeight={"bold"}>
            Select Standards Below for a Custom Table
          </Typography>
        </Grid>
        <Grid xs={2} container justifyContent={"flex-end"}>
          <Button variant="contained" onClick={handleExpandAll} size="small">
            {expandAll ? "Collapse" : "Expand All"}
          </Button>
        </Grid>
        <Grid xs={12}>
          <Divider sx={{ bgcolor: "black", height: 2 }} />
        </Grid>
        <Grid xs={12}>
          <FormGroup>{renderStandards(standardsStructure)}</FormGroup>
        </Grid>
      </Grid>
    </Card>
  );
};
