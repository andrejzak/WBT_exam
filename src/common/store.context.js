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
});

export const StoreProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(DifficultyType.Easy);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        difficulty,
        setDifficulty,
        currentLevel,
        setCurrentLevel,
        score,
        setScore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
