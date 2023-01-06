import React, { useState } from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import '../styles/popup.css';

export default function PopUp() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };
  return (
    <div>
      <button className="click" onClick={handleClickOpen}>Click me</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1 class="close" onClick={closePopup}><CloseSquareFilled /></h1>
              </div>
              <div className="popup-text">
                <p>File is open</p>
                <p>I didn't figure it out how to attach the onClick to "file" </p>
                <p>but I'm good with custom CSS</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
