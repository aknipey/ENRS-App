import { Button } from "@mui/material";
import { useAllInputsAtom, useResultFileAtom } from "../atoms/resultAtoms";
import {
  useChemFileNameAtom,
  useSampleFileNameAtom,
} from "../atoms/fileInputAtoms";
// import Papa from "papaparse";
// import * as XLSXStyle from "xlsx-js-style";
// import { applyHeaderFormatting, s2ab } from "../utils/xlsxProduction";
import {
  useQuickSelectedTablesAtom,
  useScreeningCriteriaQSAtom,
  useSelectedStandardsIdsAtom,
} from "../atoms/standardsAtoms";
import { useMemo } from "react";
import ExcelJS from "exceljs";
import { editTemplateXLSX } from "../utils/xlsxProduction";
import { findAllExceedances } from "../utils/standardProcessing";

export const ResultsDownload = () => {
  const [resultFile] = useResultFileAtom();
  const [currentChemFileName] = useChemFileNameAtom();
  const [allInputs] = useAllInputsAtom();
  const [currentSampleFileName] = useSampleFileNameAtom();
  const [selectedStandardsIdsAtom] = useSelectedStandardsIdsAtom();
  const [quickSelectedTables] = useQuickSelectedTablesAtom();
  const [screeningCriteriaQS] = useScreeningCriteriaQSAtom();

  const unchangedInputs = useMemo(() => {
    return (
      allInputs.chemFileName === currentChemFileName &&
      allInputs.sampleFileName === currentSampleFileName &&
      allInputs.selectedStandardsIds === selectedStandardsIdsAtom
    );
  }, [
    allInputs,
    currentChemFileName,
    currentSampleFileName,
    selectedStandardsIdsAtom,
  ]);

  // const handleDownloadResults = () => {
  //   if (!resultFile || !unchangedInputs) {
  //     return;
  //   }
  //   const newCsvContent = Papa.unparse(resultFile.data);
  //   const newFileName = currentChemFileName.replace(/\.CSV$/, "-RESULTS.xlsx");

  //   // Convert CSV data to XLSX format
  //   const parsedCsv = Papa.parse(newCsvContent, { header: true });
  //   const ws: XLSXStyle.WorkSheet = XLSXStyle.utils.json_to_sheet(
  //     parsedCsv.data
  //   );
  //   const wb: XLSXStyle.WorkBook = XLSXStyle.utils.book_new();

  //   // Apply Formatting
  //   applyHeaderFormatting(ws);

  //   XLSXStyle.utils.book_append_sheet(wb, ws, "Sheet1");

  //   // Create XLSX file with formatting
  //   const wopts: XLSXStyle.WritingOptions = {
  //     bookType: "xlsx",
  //     bookSST: false,
  //     type: "binary",
  //   };
  //   const wbout: string = XLSXStyle.write(wb, wopts);

  //   // Convert binary string to Blob
  //   const blob: Blob = new Blob([s2ab(wbout)], {
  //     type: "application/octet-stream",
  //   });

  //   // Create a link element and trigger a download
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = newFileName;
  //   link.click();
  // };

  const handleDownloadResults2 = async () => {
    if (!resultFile || !unchangedInputs) {
      return;
    }

    const tableExceedances = findAllExceedances(
      resultFile.data,
      resultFile.sampleData,
      selectedStandardsIdsAtom,
      quickSelectedTables,
      screeningCriteriaQS
    );

    try {
      const response = await fetch("/ENRSxxxx_Soil-Tables.xlsx"); // Path to your file in the public folder
      const data = await response.arrayBuffer();

      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(data);

      const worksheet = workbook.getWorksheet("General");
      const cell = worksheet!.getCell("B5");
      cell.value = "AAAAAAAAAA";
      editTemplateXLSX(worksheet as ExcelJS.Worksheet);

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const fileName = "modified_file.xlsx";

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
  };

  return (
    <Button
      variant="contained"
      component="span"
      style={{
        marginTop: "10px",
        backgroundColor:
          !resultFile || !unchangedInputs ? undefined : "#4caf50",
      }}
      onClick={handleDownloadResults2}
      disabled={!resultFile || !unchangedInputs}
    >
      Download Results
    </Button>
  );
};
