import React from "react";
import { DifficultyType, useStoreContext } from "./../common/store.context";

const DifficultySettings = () => {
  const { difficulty, setDifficulty } = useStoreContext();

  return (
    <div className="grid gap-4">
      <h2 className="text-white font-bold">Vyber si obtiažnosť:</h2>
      <button
        onMouseUp={(e) => setDifficulty(DifficultyType.Easy)}
        className={
          difficulty === DifficultyType.Easy
            ? "box-border border-2 border-red-600 w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white"
            : "w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white"
        }
      >
        Ľahká
      </button>
      <button
        onMouseUp={() => setDifficulty(DifficultyType.Hard)}
        className={
          difficulty === DifficultyType.Hard
            ? " box-border border-2 border-red-600 w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white"
            : "w-36 difficulty-button font-bold cursor-pointer px-6 py-2 rounded-md text-white"
        }
      >
        Ťažká
      </button>
    </div>
  );
};

export default DifficultySettings;
