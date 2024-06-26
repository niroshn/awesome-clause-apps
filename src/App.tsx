import React, { useState } from 'react';
import './App.css';

interface File {
  name: string;
  type: 'react' | 'svg' | 'html';
}

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileTypes: File[] = [
    { name: 'example.tsx', type: 'react' },
    { name: 'icon.svg', type: 'svg' },
    { name: 'page.html', type: 'html' },
  ];

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <div className="App">
      <h1>GitHub Pages React TypeScript App</h1>
      <div>
        <h2>Files:</h2>
        <ul>
          {fileTypes.map((file, index) => (
            <li key={index} onClick={() => handleFileSelect(file)}>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Preview:</h2>
        {selectedFile ? (
          <p>You selected: {selectedFile.name} ({selectedFile.type})</p>
        ) : (
          <p>Select a file to preview</p>
        )}
      </div>
    </div>
  );
};

export default App;