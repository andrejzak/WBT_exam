import React, { useEffect, useState } from "react";
import shuffleList from "shuffle-list";
import easyGameSetup from "./../data/easy.json";
import hardGameSetup from "./../data/hard.json";
import { DifficultyType, useStoreContext } from "./../common/store.context";
import Card from "../components/Card";
import colorfulMapImage from "../images/colorful_map.png";
import GameBar from "../components/GameBar";

const shuffleLevels = (levels) => {
  return shuffleList(levels);
};

const Game = () => {
  const { difficulty, currentLevel, setCurrentLevel, levels, setLevels, hp, setHp, answer, setAnswer, isNewGame, setIsNewGame } = useStoreContext();
  const [metadata, setMetadata] = useState({ data: easyGameSetup });

  useEffect(() => {
    if (difficulty === DifficultyType.Easy) {
      setMetadata({ data: easyGameSetup });
    } else if (difficulty === DifficultyType.Hard) {
      setMetadata({ data: hardGameSetup });
    }
  }, [difficulty]);

  useEffect(() => {
    setLevels(shuffleLevels(metadata.data));
  }, [metadata.data]);

  useEffect(() => {
    checkAnswer(answer)
  }, [answer]);

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  const checkAnswer = (answer) => {
    if (answer !== "" && answer === levels[currentLevel].correctAnswer) {
      nextLevel();
    } else if (answer !== "" && answer !== levels[currentLevel].correctAnswer) {
      if (hp === 0) {
        return;
      }
      setHp(hp - 1);
    }
  };

  return (
    <div>
      <header className="py-4">
        <GameBar />
        <div className="flex justify-center">
          <img
            className="w-11/12 max-w-xl pt-4"
            src={colorfulMapImage}
            alt="Mapa sveta"
          />
        </div>
      </header>
      {levels && <Card question={levels[currentLevel].question} options={levels[currentLevel].options} />}
    </div>
  );
};

export default Game;
