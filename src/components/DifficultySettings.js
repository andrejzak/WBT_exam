import React, { useContext } from 'react';
import {StartMenuContext} from './StartMenu';

function DifficultySettings() {
  const { difficulty, setDifficulty, path, setPath } = useContext(StartMenuContext);

  const mouseUpHandler = (diff) => {
    if (diff === "easy") {
      setDifficulty("easy");
      setPath("/easy");
    } else {
      setDifficulty("hard");
      setPath("/hard");
    }
  }

  return (
    <div className='grid gap-4'>
      <h2 className='text-white font-bold'>Vyber si obtiažnosť:</h2>
      <button onMouseUp={(e) => mouseUpHandler("easy")} className={ (difficulty === "easy") ? 'box-border border-2 border-red-600 w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white' : 'w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white'}>
        Ľahká
      </button>
      <button onMouseUp={(e) => mouseUpHandler("hard")} className={ (difficulty === "hard") ? ' box-border border-2 border-red-600 w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white' : 'w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white'}>
        Ťažká
      </button>
    </div>
  );
}

export default DifficultySettings;