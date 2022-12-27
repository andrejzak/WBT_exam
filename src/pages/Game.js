import React, { useEffect, useState } from "react";
import { useStoreContext } from "./../common/store.context";
import Card from "../components/Card";
import colorfulMapImage from "../images/colorful_map.png";
import GameBar from "../components/GameBar";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const { currentLevel, setCurrentLevel, levels, hp, setHp, answer, setAnswer } = useStoreContext();
  const navigate = useNavigate();

  useEffect(() => {
    checkAnswer(answer);
  }, [answer]);

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  const checkAnswer = (answer) => {
    if (answer !== "" && answer === levels[currentLevel].correctAnswer) {
      if (currentLevel === (levels.length - 1)) {
        navigate("/game/win");
      }
      nextLevel();
    } else if (answer !== "" && answer !== levels[currentLevel].correctAnswer) {
      if (hp === 1) {
        console.log("redirect");
        navigate("/game/lose");
      } 
      setHp(hp - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <header className="py-4 items-start top-0 left-0 w-full pb-3">
        <GameBar />
      </header>
      <img
        className="w-11/12 max-w-xl pb-4"
        src={colorfulMapImage}
        alt="Mapa sveta"
      />
      {levels && <Card question={levels[currentLevel].question} options={levels[currentLevel].options} />}
  </div>
  );
};

export default Game;
