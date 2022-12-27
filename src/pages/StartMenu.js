import React from "react";
import Button from "../components/Button";
import DifficultySettings from "../components/DifficultySettings";
import goldMapImage from "../images/gold_map.png";
import StartGameButton from "../components/StartGameButton";

function StartMenu() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full p-3">
      <header className="grid justify-items-center py-4">
        <h1 className="font-bold text-white text-3xl">Capital quiz</h1>
        <img
          className="w-11/12 max-w-2xl mt-8"
          src={goldMapImage}
          alt="Mapa sveta"
        />
      </header>
      <main className="pb-4">
        <div className="grid gap-9 justify-center">
          <DifficultySettings/>
          <StartGameButton />
        </div>
      </main>
    </div>
  );
}

export default StartMenu;
