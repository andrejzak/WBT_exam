import React from "react";
import { DifficultyType, useStoreContext } from "./../common/store.context";

const DifficultySettings = () => {
  const { difficulty, setDifficulty } = useStoreContext();

  return (
    <div className="grid gap-2">
      <h2 className="text-white font-bold">Vyber si obtiažnosť:</h2>
      <button
        onMouseUp={(e) => setDifficulty(DifficultyType.Easy)}
        className={
          difficulty === DifficultyType.Easy
            ? "box-border border-2 border-red-600 blue-button"
            : "blue-button"
        }
      >
        Ľahká
      </button>
      <button
        onMouseUp={() => setDifficulty(DifficultyType.Hard)}
        className={
          difficulty === DifficultyType.Hard
            ? " box-border border-2 border-red-600 blue-button"
            : "blue-button"
        }
      >
        Ťažká
      </button>
    </div>
  );
};

export default DifficultySettings;
