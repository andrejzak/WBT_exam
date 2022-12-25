import React from "react";
import Button from "../components/Button";
import DifficultySettings from "../components/DifficultySettings";
import worldMap from "../images/world_map.png";

function StartMenu() {
  
  return (
    <div>
      <header className="grid justify-items-center py-4">
        <h1 className="font-bold text-white text-3xl">Capital quiz</h1>
        <img
          className="w-11/12 max-w-3xl pt-4"
          src={worldMap}
          alt="Mapa sveta"
        />
      </header>
      <main className="pb-4">
        <div className="grid gap-9 justify-center">
          <DifficultySettings/>
          <Button name="Začať hru" path={'/game'} />
        </div>
      </main>
    </div>
  );
}

export default StartMenu;