import { useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { Button, Paper, Typography } from "@mui/material";
import { DROP_ZONE_SX } from "../consts/FileImportConsts";

type Props = {
  onFileUpload: (file: File) => void;
}

export function FileImport({ onFileUpload }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      // Using array destructuring to get the first element
      const [file] = acceptedFiles;

      if (file) {
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv" : []
    },
  });

  return (
    <Paper elevation={3} sx={DROP_ZONE_SX} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Drop the CSV file here...</Typography>
      ) : (
        <Typography>
          Drag 'n' drop a CSV file here, or click to select one
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        component="span"
        style={{ marginTop: "10px" }}
      >
        Select File
      </Button>
    </Paper>
  );
}

