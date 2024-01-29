import './App.css';
import { FileImport } from './components/FileImport';

function App() {
  return (
    <div className="App">
      <FileImport onFileUpload={(file) => console.log('You dropped a file!')}/>
    </div>
  );
}

export default App;
