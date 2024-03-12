import { Button } from "@mui/material";
import { useResultFileAtom } from "../atoms/resultAtoms";
import { useChemFileNameAtom } from "../atoms/fileInputAtoms";
import Papa from "papaparse";
import * as XLSXStyle from "xlsx-js-style";
import { applyHeaderFormatting, s2ab } from "../utils/xlsxProduction";

export const ResultsDownload = () => {
  const [resultFile] = useResultFileAtom();
  const [currentChemFileName] = useChemFileNameAtom();
  const handleDownloadResults = () => {
    if (!resultFile) {
      return;
    }
    const newCsvContent = Papa.unparse(resultFile.data);
    const newFileName = currentChemFileName.replace(/\.CSV$/, "-RESULTS.xlsx");

    // Convert CSV data to XLSX format
    const parsedCsv = Papa.parse(newCsvContent, { header: true });
    const ws: XLSXStyle.WorkSheet = XLSXStyle.utils.json_to_sheet(
      parsedCsv.data
    );
    const wb: XLSXStyle.WorkBook = XLSXStyle.utils.book_new();

    // Apply Formatting
    applyHeaderFormatting(ws);

    XLSXStyle.utils.book_append_sheet(wb, ws, "Sheet1");

    // Create XLSX file with formatting
    const wopts: XLSXStyle.WritingOptions = {
      bookType: "xlsx",
      bookSST: false,
      type: "binary",
    };
    const wbout: string = XLSXStyle.write(wb, wopts);

    // Convert binary string to Blob
    const blob: Blob = new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    });

    // Create a link element and trigger a download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = newFileName;
    link.click();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      component="span"
      style={{ marginTop: "10px" }}
      onClick={handleDownloadResults}
      disabled={!resultFile}
    >
      Download Results
    </Button>
  );
};
