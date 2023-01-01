import React from 'react';
import { Link } from 'react-router-dom';
import { DifficultyType, useStoreContext } from '../common/store.context';
import shuffleList from "shuffle-list";
import easyGameSetup from "./../data/easy.json";
import hardGameSetup from "./../data/hard.json";

const shuffleLevels = (levels) => {
  let tmp = [...levels];
  tmp.forEach(element => {
    element.options = shuffleList(element.options);
    element.hint = shuffleList(element.hint);
  }); 
  return shuffleList(tmp);
};

const StartGameButton = () => {
  const { setLevels, difficulty } = useStoreContext();

  const startGameHandler = () => {
    let tmp;
    if (difficulty === DifficultyType.Easy) {
      tmp = shuffleLevels(easyGameSetup); 
      setLevels(tmp);
    } else if (difficulty === DifficultyType.Hard) {
      tmp = shuffleLevels(hardGameSetup); 
      setLevels(shuffleLevels(tmp));
    }
    window.localStorage.setItem("gameState",
    JSON.stringify({ currentLevel: 0, hp: 3, levels: tmp }));  
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