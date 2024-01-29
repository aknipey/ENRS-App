import { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Button, Paper, Typography } from "@mui/material";
import { DROP_ZONE_SX } from "../consts/FileImportConsts";
import { useChemFileAtom, useChemFileNameAtom } from "../atoms/fileInputAtoms";
import Papa from "papaparse";
import { JSONObject } from "../types/fileStorage";
import { useResultFileAtom } from "../atoms/resultAtoms";



export function ChemFileImport() {
  const [chemFile, setChemFile] = useChemFileAtom();
  const [chemFileName, setChemFileName] = useChemFileNameAtom();
  const [, setResultFile] = useResultFileAtom();

  const handleFileUpload = useCallback((file: File) => {
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      const csvContent = e.target?.result as string;

      if (csvContent) {
        Papa.parse(csvContent, {
          header: true,
          dynamicTyping: true,
          complete: function (result: Papa.ParseResult<JSONObject>) {
            console.log(result.data);
            console.log("You dropped a file!");
            setChemFile(result);
            setResultFile(result);
          },
        });
        setChemFileName(file.name);
      }
    };

    reader.readAsText(file);
  }, [setChemFile, setChemFileName, setResultFile]);

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
        "text/csv" : []
      },
    });
    
    console.log("file: ", chemFileName, ' is: ', chemFile);
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
      >
        Select File
      </Button>
    </Paper>
  );
}

