import React from 'react';

const EndButton = () => {
  const clickHandler = () => {
    window.close();
  };

  return (
    <button
      onClick={clickHandler}
      className="text-center w-36 start-button font-bold cursor-pointer border-none px-6 py-2 rounded-md text-white"
    >
      Koniec
    </button>
  );
}

export default EndButton;