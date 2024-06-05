import { Button } from "@mui/material";
import {
  useChemFileAtom,
  useChemFileNameAtom,
  useSampleFileAtom,
} from "../atoms/fileInputAtoms";
import {
  useQuickSelectedTablesAtom,
  useScreeningCriteriaQSAtom,
  useSelectedStandardsIdsAtom,
} from "../atoms/standardsAtoms";
import ExcelJS from "exceljs";
import {
  findAllExceedances,
  selectStandards,
} from "../utils/standardProcessing";
import { createTable } from "../utils/tableCreation";
import { memo, useCallback } from "react";
import { Standard } from "../Standards/standardsTypes";
import { screenedOut } from "../utils/selections";

export const ResultsDownload = memo(function ResultsDownloadComp() {
  const [currentChemFileName] = useChemFileNameAtom();
  const [selectedStandardsIdsAtom] = useSelectedStandardsIdsAtom();
  const [quickSelectedTables] = useQuickSelectedTablesAtom();
  const [screeningCriteriaQS] = useScreeningCriteriaQSAtom();
  const [chemFileAtom] = useChemFileAtom();
  const [sampleFileAtom] = useSampleFileAtom();

  const handleDownloadResults = useCallback(async () => {
    if (!chemFileAtom || !sampleFileAtom) {
      return;
    }

    const tableExceedances = findAllExceedances(
      chemFileAtom,
      sampleFileAtom,
      selectedStandardsIdsAtom,
      quickSelectedTables,
      screeningCriteriaQS
    );

    console.log("Table Exceedances: ", tableExceedances);

    try {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = "ENRS App";
      workbook.created = new Date();
      workbook.modified = new Date();

      tableExceedances.forEach((table, i) => {
        const name =
          i < tableExceedances.length - 1
            ? quickSelectedTables[i].name.replace(/[*/?:\\[\]]/g, "_")
            : "Custom";
        const colour =
          i < tableExceedances.length - 1
            ? quickSelectedTables[i].colour.replace("#", "FF")
            : "FF00FFFF";

        const worksheet = workbook.addWorksheet(name, {
          properties: { tabColor: { argb: colour }, defaultRowHeight: 16.5 },
          pageSetup: { paperSize: 9, orientation: "landscape" },
          views: [{ zoomScale: 85 }],
        });

        let standards: Standard[] = [];

        if (i === tableExceedances.length - 1) {
          standards = selectStandards(selectedStandardsIdsAtom);
        } else {
          quickSelectedTables[i].standards.forEach((standard) => {
            if (!screenedOut(standard, screeningCriteriaQS)) {
              standards.push(standard);
            }
          });
        }

        createTable(worksheet, table, standards);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = currentChemFileName.replace(/\.CSV$/, "-RESULTS.xlsx");

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error fetching or processing file:", error);
    }
  }, [
    chemFileAtom,
    currentChemFileName,
    quickSelectedTables,
    sampleFileAtom,
    screeningCriteriaQS,
    selectedStandardsIdsAtom,
  ]);

  return (
    <Button
      variant="contained"
      component="span"
      style={{
        marginTop: "10px",
        backgroundColor:
          !chemFileAtom || !sampleFileAtom ? undefined : "#4caf50",
      }}
      onClick={handleDownloadResults}
      disabled={!chemFileAtom || !sampleFileAtom}
    >
      Download Results
    </Button>
  );
});
