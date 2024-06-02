import { Button } from "@mui/material";
import {
  useChemFileAtom,
  useChemFileNameAtom,
  useSampleFileAtom,
} from "../atoms/fileInputAtoms";
// import Papa from "papaparse";
// import * as XLSXStyle from "xlsx-js-style";
// import { applyHeaderFormatting, s2ab } from "../utils/xlsxProduction";
import {
  useQuickSelectedTablesAtom,
  useScreeningCriteriaQSAtom,
  useSelectedStandardsIdsAtom,
} from "../atoms/standardsAtoms";
import ExcelJS from "exceljs";
import { findAllExceedances } from "../utils/standardProcessing";
import { createTable } from "../utils/tableCreation";

export const ResultsDownload = () => {
  const [currentChemFileName] = useChemFileNameAtom();
  const [selectedStandardsIdsAtom] = useSelectedStandardsIdsAtom();
  const [quickSelectedTables] = useQuickSelectedTablesAtom();
  const [screeningCriteriaQS] = useScreeningCriteriaQSAtom();
  const [chemFileAtom] = useChemFileAtom();
  const [sampleFileAtom] = useSampleFileAtom();

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

    try {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = "ENRS App";
      workbook.created = new Date();
      workbook.modified = new Date();

      tableExceedances.forEach((table, i) => {
        const name = i
          ? quickSelectedTables[i - 1].name.replace(/[*/?:\\[\]]/g, "_")
          : "Custom";
        const colour = i
          ? quickSelectedTables[i - 1].colour.replace("#", "FF")
          : "FF00FFFF";
        const worksheet = workbook.addWorksheet(name, {
          properties: { tabColor: { argb: colour } },
        });

        createTable(worksheet, table);
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
  };

  return (
    <Button
      variant="contained"
      component="span"
      style={{
        marginTop: "10px",
        backgroundColor:
          !chemFileAtom || !sampleFileAtom ? undefined : "#4caf50",
      }}
      onClick={handleDownloadResults2}
      disabled={!chemFileAtom || !sampleFileAtom}
    >
      Download Results
    </Button>
  );
};
