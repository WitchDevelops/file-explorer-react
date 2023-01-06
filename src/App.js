import React from 'react';
import { useState } from 'react';
//import BreadcrumbRoute from "./components/BreadcrumbRoute";
import explorer from './data/folderData';
import FilePath from './components/FilePath';
import Folder from './components/Folder';
import PopUp from './components/PopUp';

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  //console.log(explorerData);

  return (
    <div className="App">
      <FilePath/>
      {/*} <BreadcrumbRoute /> it doesn't work */}
      <PopUp />
      <Folder explorer={explorerData} />
    </div>
  );
}
