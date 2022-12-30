import React from 'react';
import { Link } from 'react-router-dom';
import { DifficultyType ,useStoreContext } from "./../common/store.context";


const NewGameButton = () => {
  const { setAnswer, setCurrentLevel, setHp, setDifficulty } = useStoreContext();

  const resetGameHandler = () => {
    window.localStorage.clear();
    setDifficulty(DifficultyType.Easy);
    setAnswer('');
    setHp(3);
    setCurrentLevel(0);
  }

  return (
    <Link
      to="/"
      onMouseUp={resetGameHandler}
      className="blue-button"
    >
      Nová hra
    </Link>
  )
}

export default NewGameButton;