import React, { createContext, useContext, useState } from "react";

export const DifficultyType = {
  Easy: "easy",
  Hard: "hard",
};

export const AnswerMessageType = {
  Correct: "correct",
  Incorrect: "incorrect",
};

const StoreContext = createContext({
  difficulty: DifficultyType.Easy,
  setDifficulty: () => {},
  currentLevel: 0,
  setCurrentLevel: () => {},
  score: 0,
  setScore: () => {},
  levels: 0,
  setLevels: () => {},
  hp: 0,
  setHp: () => { },
  answer: '',
  setAnswer: () => { },
  isTimerActive: false,
  setIsTimerActive: () => { },
});

export const StoreProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(DifficultyType.Easy);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [levels, setLevels] = useState(0);
  const [hp, setHp] = useState(3);
  const [answer, setAnswer] = useState('');
  const [isTimerActive, setIsTimerActive] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        difficulty,
        setDifficulty,
        currentLevel,
        setCurrentLevel,
        score,
        setScore,
        levels,
        setLevels,
        hp,
        setHp,
        answer,
        setAnswer,
        isTimerActive,
        setIsTimerActive,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
