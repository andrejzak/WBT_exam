import React from 'react'
import LifeBar from './LifeBar';
import GameOptionsButton from './GameOptionsButton';
import { useStoreContext } from '../common/store.context';

function GameBar() {
  const { levels, currentLevel } = useStoreContext();

  return (
    <div className='grid grid-flow-col px-5'>
      <div>
        <LifeBar />
      </div>
      {/* <div className='flex justify-end items-center'>
        <p className='text-white leading-none'>Skóre<br/>10/20</p>
      </div> */}
      <div className='flex justify-end'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-yellow-400 font-bold leading-none px-4'>Level</p>
          <p className='text-yellow-400 font-bold leading-none px-4'>{ currentLevel + 1 }/{ levels.length }</p>
        </div>
        <GameOptionsButton />
      </div>
    </div>
  )
}

export default GameBar