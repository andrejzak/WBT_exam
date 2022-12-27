import React from 'react';

const EndButton = () => {
  const clickHandler = () => {
    window.close();
  };

  return (
    <button
      onClick={clickHandler}
      className="blue-button"
    >
      Koniec
    </button>
  );
}

export default EndButton;