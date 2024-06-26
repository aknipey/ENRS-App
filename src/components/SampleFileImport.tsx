import { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Button, Paper, Typography } from "@mui/material";
import { DROP_ZONE_SX } from "../consts/fileImportConsts";
import {
  useSampleFileAtom,
  useSampleFileNameAtom,
} from "../atoms/fileInputAtoms";
import Papa from "papaparse";
import { JSONObject } from "../types/fileStorage";

export function SampleFileImport() {
  const [, setSampleFile] = useSampleFileAtom();
  const [sampleFileName, setSampleFileName] = useSampleFileNameAtom();

  const handleFileUpload = useCallback(
    (file: File) => {
      const reader = new FileReader();

      reader.onload = function (e: ProgressEvent<FileReader>) {
        const csvContent = e.target?.result as string;

        if (csvContent) {
          Papa.parse(csvContent, {
            header: true,
            dynamicTyping: true,
            complete: function (result: Papa.ParseResult<JSONObject>) {
              setSampleFile(result);
            },
          });
          setSampleFileName(file.name);
        }
      };

      reader.readAsText(file);
    },
    [setSampleFile, setSampleFileName]
  );

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const [file] = acceptedFiles;

      if (file) {
        handleFileUpload(file);
      }
    },
    [handleFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [],
    },
  });

  return (
    <Paper elevation={3} sx={DROP_ZONE_SX} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Drop the SAMPLE CSV file here...</Typography>
      ) : (
        <Typography>
          Drag 'n' drop the SAMPLE CSV file here, or click to select one
        </Typography>
      )}
      <Button
        variant="contained"
        component="span"
        style={{ marginTop: "10px" }}
        color={sampleFileName && !sampleFileName.includes("Sample") ? "error" : "primary"}
      >
        Select File
      </Button>
      {sampleFileName && (
        <Typography>Selected file: {sampleFileName}</Typography>
      )}
      {sampleFileName && !sampleFileName.includes("Sample") && (
        <Typography color="error">
          WARNING: SELECTED FILE MAY NOT BE A SAMPLE FILE
        </Typography>
      )}
    </Paper>
  );
}
