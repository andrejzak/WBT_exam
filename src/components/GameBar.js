import React from 'react'
import LifeBar from './LifeBar';
import GameOptionsButton from './GameOptionsButton';
import { useStoreContext } from '../common/store.context';
import HintButton from './HintButton';
import HintWindow from './HintWindow';

function GameBar() {
  const { levels, currentLevel } = useStoreContext();

  return (
    <div className='grid grid-flow-col px-5'>
      <div>
        <LifeBar />
      </div>
      <div className='flex justify-end gap-x-1 relative z-50'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-yellow-400 font-bold leading-none'>Level</p>
          <p className='text-yellow-400 font-bold leading-none'>{ currentLevel + 1 }/{ levels.length }</p>
        </div>
        <HintButton />
        <GameOptionsButton />
        <HintWindow />
      </div>
    </div>
  )
}

export default GameBar