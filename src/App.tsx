import { Box } from "@mui/material";
import { FileImports } from "./components/FileImports";
import { ResultsDownload } from "./components/ResultsDownload";
import { TopAppBar } from "./components/TopAppBar";
import { ApplyStandards } from "./components/ApplyStandards";

function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Box margin={1}>
        <FileImports />
        <ApplyStandards />
        <ResultsDownload />
      </Box>
    </div>
  );
}

export default App;
