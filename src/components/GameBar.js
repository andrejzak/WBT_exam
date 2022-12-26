import React from 'react'
import LifeBar from './LifeBar';
import GameOptionsButton from './GameOptionsButton';

function GameBar() {
  return (
    <div className='grid grid-flow-col px-5'>
      <div>
        <LifeBar />
      </div>
      <div className='flex justify-end'>
        <GameOptionsButton />
      </div>
    </div>
  )
}

export default GameBar