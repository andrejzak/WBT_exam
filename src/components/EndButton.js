import React from 'react';

const EndButton = () => {
  return (
    <button
      onMouseUp={() => {window.close()}}
      className="blue-button"
    >
      Koniec
    </button>
  );
}

export default EndButton;