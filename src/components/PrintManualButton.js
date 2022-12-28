import React from 'react';
import { BiPrinter } from 'react-icons/bi';
import html2canvas from 'html2canvas';

const PrintManualButton = () => {
  const printHandler = () => {
    html2canvas(document.getElementById("printableContent")).then((canvas) => {
      saveAs(canvas.toDataURL(), "game_manual.png");
    })
  };

  const saveAs = (uri, filename) => {
    const link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  return (
    <button
      onClick={printHandler}
      className="icon-button"
    >
      <BiPrinter/ >
    </button>
  );
}

export default PrintManualButton;