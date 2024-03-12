import { Box } from "@mui/material";
import { FileImports } from "./components/FileImports";
import { TopAppBar } from "./components/TopAppBar";

function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Box margin={1}>
        <FileImports />
      </Box>
    </div>
  );
}

export default App;
