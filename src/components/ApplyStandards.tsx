import { Button } from "@mui/material";
import { useAllInputsAtom, useResultFileAtom } from "../atoms/resultAtoms";
import {
  useChemFileAtom,
  useChemFileNameAtom,
  useSampleFileAtom,
  useSampleFileNameAtom,
} from "../atoms/fileInputAtoms";
import {
  useQuickSelectedTablesAtom,
  useScreeningCriteriaQSAtom,
  useSelectedStandardsIdsAtom,
} from "../atoms/standardsAtoms";
import { findTableExceedances } from "../utils/standardProcessing";
import { JSONObject } from "../types/fileStorage";

export const ApplyStandards = () => {
  const [chemFileAtom] = useChemFileAtom();
  const [sampleFileAtom] = useSampleFileAtom();
  const [, setResultFile] = useResultFileAtom();
  const [currentChemFileName] = useChemFileNameAtom();
  const [currentSampleFileName] = useSampleFileNameAtom();
  const [selectedStandardsIdsAtom] = useSelectedStandardsIdsAtom();
  const [screeningCriteriaQS] = useScreeningCriteriaQSAtom();
  const [quickSelectedTables] = useQuickSelectedTablesAtom();
  const [, setAllInputsAtom] = useAllInputsAtom();

  const handleApplyStandards = () => {
    setAllInputsAtom({
      chemFileName: currentChemFileName,
      sampleFileName: currentSampleFileName,
      selectedStandardsIds: selectedStandardsIdsAtom,
      screeningCriteriaQS,
      quickSelectedTables,
    });

    setResultFile(
      findTableExceedances(
        chemFileAtom as JSONObject,
        sampleFileAtom as JSONObject,
        selectedStandardsIdsAtom
      )
    );
  };

  return (
    <Button
      variant="contained"
      component="span"
      style={{
        marginTop: "10px",
        backgroundColor:
          !chemFileAtom || !sampleFileAtom || !selectedStandardsIdsAtom.length
            ? undefined
            : "#4caf50",
      }}
      onClick={handleApplyStandards}
      disabled={
        !chemFileAtom || !sampleFileAtom || !selectedStandardsIdsAtom.length
      }
    >
      Apply Standards
    </Button>
  );
};
