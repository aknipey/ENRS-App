import { Button } from "@mui/material";
import { useAllInputsAtom, useResultFileAtom } from "../atoms/resultAtoms";
import {
  useChemFileAtom,
  useChemFileNameAtom,
  useSampleFileAtom,
  useSampleFileNameAtom,
} from "../atoms/fileInputAtoms";
import { useSelectedStandardsIdsAtom } from "../atoms/standardsAtoms";
import { findExceedances } from "../utils/standardProcessing";
import { JSONObject } from "../types/fileStorage";

export const ApplyStandards = () => {
  const [chemFileAtom] = useChemFileAtom();
  const [sampleFileAtom] = useSampleFileAtom();
  const [, setResultFile] = useResultFileAtom();
  const [currentChemFileName] = useChemFileNameAtom();
  const [currentSampleFileName] = useSampleFileNameAtom();
  const [selectedStandardsIdsAtom] = useSelectedStandardsIdsAtom();
  const [, setAllInputsAtom] = useAllInputsAtom();

  const handleApplyStandards = () => {
    setAllInputsAtom({
      chemFileName: currentChemFileName,
      sampleFileName: currentSampleFileName,
      selectedStandardsIds: selectedStandardsIdsAtom,
    });

    setResultFile(
      findExceedances(
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
