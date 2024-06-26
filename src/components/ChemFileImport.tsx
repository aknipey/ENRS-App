import { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Button, Paper, Typography } from "@mui/material";
import { DROP_ZONE_SX } from "../consts/fileImportConsts";
import { useChemFileAtom, useChemFileNameAtom } from "../atoms/fileInputAtoms";
import Papa from "papaparse";
import { JSONObject } from "../types/fileStorage";

export function ChemFileImport() {
  const [, setChemFile] = useChemFileAtom();
  const [chemFileName, setChemFileName] = useChemFileNameAtom();

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
              setChemFile(result);
            },
          });
          setChemFileName(file.name);
        }
      };

      reader.readAsText(file);
    },
    [setChemFile, setChemFileName]
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
        <Typography>Drop the CHEMISTRY CSV file here...</Typography>
      ) : (
        <Typography>
          Drag 'n' drop a CHEMISTRY CSV file here, or click to select one
        </Typography>
      )}
      <Button
        variant="contained"
        component="span"
        style={{ marginTop: "10px" }}
        color={
          chemFileName && !chemFileName.includes("Chemistry")
            ? "error"
            : "primary"
        }
      >
        Select File
      </Button>
      {chemFileName && <Typography>Selected file: {chemFileName}</Typography>}
      {chemFileName && !chemFileName.includes("Chemistry") && (
        <Typography color="error">
          WARNING: SELECTED FILE MAY NOT BE A CHEMISTRY FILE
        </Typography>
      )}
    </Paper>
  );
}
