import React, { createContext, useContext, useState } from "react";

export const DifficultyType = {
  Easy: "easy",
  Hard: "hard",
};

const StoreContext = createContext({
  difficulty: DifficultyType.Easy,
  setDifficulty: () => {},
  currentLevel: 0,
  setCurrentLevel: () => {},
  score: 0,
  setScore: () => {},
  metadata: {
    data: 0
  },
  setMetadata: () => {},
  hp: 0,
  setHp: () => { },
  answer: '',
  setAnswer: () => {}
});

export const StoreProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(DifficultyType.Easy);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [metadata, setMetadata] = useState({ data: 0 });
  const [hp, setHp] = useState(3);
  const [answer, setAnswer] = useState('');

  return (
    <StoreContext.Provider
      value={{
        difficulty,
        setDifficulty,
        currentLevel,
        setCurrentLevel,
        score,
        setScore,
        metadata,
        setMetadata,
        hp,
        setHp,
        answer,
        setAnswer
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
