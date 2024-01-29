import { Button } from "@mui/material";
import { useResultFileAtom } from "../atoms/resultAtoms";
import { useChemFileNameAtom } from '../atoms/fileInputAtoms';
import Papa from "papaparse";

export const ResultsDownload = () => {
  const [resultFile] = useResultFileAtom();
  const [currentChemFileName] = useChemFileNameAtom();
  const handleDownloadResults = () => {
    if (resultFile) {
      // Create a new CSV content with a different file name
      const newCsvContent = Papa.unparse(resultFile.data);
      const newChemFileName = currentChemFileName.replace(/\.csv$/, "Results.csv");

      console.log('result ', newCsvContent, '\nold: ', resultFile);

      // Create a Blob with the new CSV content
      const blob = new Blob([newCsvContent], { type: "text/csv" });

      // Create a link element and trigger a download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = newChemFileName;
      link.click();
    }
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