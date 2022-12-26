import React from 'react';
import { Link } from 'react-router-dom';
import { DifficultyType ,useStoreContext } from "./../common/store.context";


const NewGameButton = () => {
  const { setAnswer, setCurrentLevel, setHp, setDifficulty } = useStoreContext();

  const resetGameHandler = () => {
    setDifficulty(DifficultyType.Easy);
    setAnswer('');
    setHp(3);
    setCurrentLevel(0);
  }

  return (
    <Link
      to="/"
      onClick={resetGameHandler}
      className="text-center w-36 start-button font-bold cursor-pointer border-none px-6 py-2 rounded-md text-white"
    >
      Nová hra
    </Link>
  )
}

export default NewGameButton;