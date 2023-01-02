import React, { useEffect } from "react";
import Button from "../components/Button";
import DifficultySettings from "../components/DifficultySettings";
import goldMapImage from "../images/gold_map.png";
import StartGameButton from "../components/StartGameButton";
import { useNavigate } from "react-router-dom";


function StartMenu() {
  const navigate = useNavigate();

  useEffect(() => {
    const gameState = window.localStorage.getItem('gameState');
    if (gameState !== null) {
      navigate("/game");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full p-3">
      <header className="flex justify-center relative py-4 min-h-[130px] min-w-[224px]">
        <h1 className="text-center font-bold text-white bg-red-400 bg-opacity-70 py-2 rounded-md absolute text-4xl my-0 left-0 w-56 right-0 mx-auto top-16">
          Capital quiz
        </h1>
        <img
            height="130"
            width="224"
            className="text-center w-11/12 max-w-2xl"
            src={goldMapImage}
            alt="Mapa sveta"
        />
      </header>
      <main className="pb-4">
        <div className="grid gap-9 justify-center">
          <DifficultySettings />
          <div className="flex flex-col gap-2">
            <Button content="Pravidlá hry" path="/manual" styles="green-button" />
            <StartGameButton />
          </div>
        </div>
      </main>
    </div>
  );
}

export default StartMenu;
