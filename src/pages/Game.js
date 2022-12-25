import React, { useEffect, useState } from "react";
import shuffleList from "shuffle-list";
import easyGameSetup from "./../data/easy.json";
import hardGameSetup from "./../data/hard.json";
import Option from "../components/Option";
import { DifficultyType, useStoreContext } from "./../common/store.context";

const shuffleLevels = (levels) => {
  return shuffleList(levels);
};

const Game = () => {
  const { difficulty, currentLevel, setCurrentLevel } = useStoreContext();
  const [metadata, setMetadata] = useState({});
  const [levels, setLevels] = useState();

  useEffect(() => {
    if (difficulty === DifficultyType.Easy) {
      setMetadata({ data: easyGameSetup });
    } else if (difficulty === DifficultyType.Hard) {
      setMetadata({ data: hardGameSetup });
    }
  }, [difficulty]);

  useEffect(() => {
    console.log("metadata has changed");
    console.log(metadata.data);
    setLevels(shuffleLevels(metadata.data));
  }, [metadata.data]);

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  const checkAnswer = (answer) => {
    if (answer) {
      nextLevel();
    }
  };

  const onDropHandler = () => {
    console.log("correct");
  };

  return (
    <div>
      <h1>{levels && levels[currentLevel].question}</h1>
      {metadata.data &&
        metadata.data[currentLevel].options.map((option) => (
          <Option key={option} name={option} />
        ))}
    </div>
  );
};

export default Game;
