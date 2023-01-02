import React, { useEffect } from 'react';
import EndButton from '../components/EndButton';
import NewGameButton from '../components/NewGameButton';
import happyEmojiImage from '../images/happy_emoji.png';
import { useStoreContext } from '../common/store.context';

const GameWin = () => {
  const { currentLevel, levels } = useStoreContext();

  useEffect(() => {
    window.localStorage.clear();
  }, []);

  return (
    <div className='flex flex-col gap-3 items-center justify-center h-full p-3'>
      <h1 className='text-red-300 font-bold text-4xl'>Vyhral si!</h1>
      <p className='text-white font-bold text-lg'>Skóre: {currentLevel}/{levels.length}</p>
      <img className='w-2/4 text-center' height="100" width="100" src={happyEmojiImage} alt="Usmiaty emotikon"/>
      <NewGameButton />
      <EndButton />
    </div>
  )
}

export default GameWin;