import React from 'react';
import { Link } from 'react-router-dom';
import { DifficultyType, useStoreContext } from '../common/store.context';
import shuffleList from "shuffle-list";
import easyGameSetup from "./../data/easy.json";
import hardGameSetup from "./../data/hard.json";

const shuffleLevels = (levels) => {
  let tmp = [...levels];
  tmp.forEach(element => {
    element.options = shuffleList(element.options)
  }); 
  return shuffleList(tmp);
};

const StartGameButton = () => {
  const { setLevels, difficulty } = useStoreContext();

  const startGameHandler = () => {
    if (difficulty === DifficultyType.Easy) {
      setLevels(shuffleLevels(easyGameSetup));
    } else if (difficulty === DifficultyType.Hard) {
      setLevels(shuffleLevels(hardGameSetup));
    }
  }

  return (
    <Link
      to="/game"
      onMouseUp={startGameHandler}
      className="green-button"
    >
      Začať hru
    </Link>
  );
}

export default StartGameButton;