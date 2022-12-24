import React, { useState, createContext } from 'react';
import StartButton from './StartButton';
import DifficultySettings from './DifficultySettings';
import worldMap from '../images/world_map.png';

export const StartMenuContext = createContext(null);

function StartMenu() {
  const [difficulty, setDifficulty] = useState("easy");
  const [path, setPath] = useState("/easy");

  return (
    <div>
      <header className="grid justify-items-center py-4"> 
        <h1 className='font-bold text-white text-3xl'>Capital quiz</h1>
        <img className='w-11/12 max-w-3xl pt-4' src={worldMap} alt='Mapa sveta'/>
      </header>
      <main className='pb-4'>
        <div className='grid gap-9 justify-center'>
          <StartMenuContext.Provider value={{ difficulty, setDifficulty, path, setPath }}>
            <DifficultySettings />
          </StartMenuContext.Provider>
          <StartButton name='Začať hru' path={path} />
        </div>
      </main>
    </div>
  );
}

export default StartMenu;