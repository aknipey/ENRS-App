import { Button } from "@mui/material";
import { useResultFileAtom } from "../atoms/resultAtoms";
import { useChemFileNameAtom } from "../atoms/fileInputAtoms";
import Papa from "papaparse";

export const ResultsDownload = () => {
  const [resultFile] = useResultFileAtom();
  const [currentChemFileName] = useChemFileNameAtom();
  const handleDownloadResults = () => {
    if (!resultFile) {
      return;
    }
    const newCsvContent = Papa.unparse(resultFile.data);
    const newFileName = currentChemFileName.replace(/\.CSV$/, "-RESULTS.csv");

    // Create a Blob with the new CSV content
    const blob = new Blob([newCsvContent], { type: "text/csv" });

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
