import React from 'react';
import { useState } from 'react';
import { FileFilled, FolderFilled } from '@ant-design/icons';
import { handleClickOpen, PopUp } from './PopUp';
import '../styles/folder.css';

export default function Folder({ explorer }) {
  //console.log(explorer);
  /*to open the folder on click*/
  const [expand, setExpand] = useState(false);

  /*this renders the top level*/
  if (explorer.isFolder) {
    return (
      <div>
        {/* I am a folder tree */}
        {/*this prints the root*/}
        <div className="folder" onClick={() => setExpand(!expand)}>
          {' '}
          {/*!expand so it can be opened and closed*/}{' '}
          <FolderFilled
            className="icon"
            style={{ fontSize: '2rem', color: 'var(--primary' }}
          />{' '}
          {explorer.name}
        </div>

        <div style={{ display: expand ? 'block' : 'none', marginLeft: '4rem' }}>
          {' '}
          {/*this if expand is true then show it, else hide it*/}
          {explorer.items.map((expl) => {
            return <Folder explorer={expl} key={expl.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file" id="files">
        {' '}
        <button onClick={(handleClickOpen)} >
        <FileFilled
          className="icon"
          style={{ fontSize: '2rem', color: 'var(--primary' }}
          
        />{' '}
        {explorer.name}{' '}
        </button>
      </span>
    );
  }
}
