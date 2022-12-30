import React, { useEffect } from 'react';
import EndButton from '../components/EndButton';
import NewGameButton from '../components/NewGameButton';
import sadEmojiImage from '../images/sad_emoji.png';
import { useStoreContext } from '../common/store.context';

const GameLose = () => {
  const { currentLevel, levels } = useStoreContext();

  useEffect(() => {
    window.localStorage.clear();     
  }, []);

  return (
    <div className='flex flex-col gap-3 items-center justify-center h-full p-3'>
      <h1 className='text-red-300 font-bold text-4xl'>Prehral si!</h1>
      <p className='text-white font-bold text-lg'>Skóre: { currentLevel }/{ levels.length }</p>
      <img className='w-2/4' src={sadEmojiImage} alt="Smuntý emotikon"/>
      <NewGameButton />
      <EndButton />
    </div>
  )
}

export default GameLose;