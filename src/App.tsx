import { ChemFileImport } from "./components/ChemFileImport";
import { ResultsDownload } from "./components/ResultsDownload";
import { SampleFileImport } from "./components/SampleFileImport";

function App() {
  return (
    <div className="App">
      <ChemFileImport />
      <SampleFileImport />
      <ResultsDownload />
    </div>
  );
}

export default App;
