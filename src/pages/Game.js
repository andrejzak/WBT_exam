import React, { useEffect } from "react";
import { useStoreContext, AnswerMessageType } from "./../common/store.context";
import Card from "../components/Card";
import colorfulMapImage from "../images/colorful_map.png";
import GameBar from "../components/GameBar";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const { currentLevel, setCurrentLevel, levels, setLevels, hp, setHp, answer, setAnswer, setIsTimerActive } = useStoreContext();
  const navigate = useNavigate();

  window.onunload = function () {
    loadLocalStorageData();
  };

  const loadLocalStorageData = () => {
    const gameState = window.localStorage.getItem('gameState');
    if (gameState !== null) {
      const saveData = JSON.parse(gameState)
      setCurrentLevel(saveData.currentLevel);
      setHp(saveData.hp);
      setLevels(saveData.levels);
    } 
  }

  useEffect(() => {
    loadLocalStorageData();
  }, []);


  useEffect(() => {
    const gameState = window.localStorage.getItem('gameState'); 
    if (currentLevel === 0 && (currentLevel === gameState.currentLevel)) {
      window.localStorage.setItem("gameState",
      JSON.stringify({ currentLevel: currentLevel, hp: hp, levels: levels}));  
    }
    checkAnswer(answer);
  }, [answer]);

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  const messageHandler = (messageType) => {
    let messageElement = document.getElementById(messageType);
    let optionArea = document.getElementById("optionArea");
    let answerArea = document.getElementById("answerArea");
    answerArea.className = "bg-purple-300 text-white font-bold rounded-md flex items-center justify-center w-60 h-14"
    optionArea.className = "invisible";
    if (messageType === AnswerMessageType.Correct) {
      messageElement.className = "bg-green-600 bg-opacity-80 answer-message";
      navigator.vibrate(500);
      document.getElementById("hintWindow").className = "hidden";
      document.getElementById("showAnswerButton").className = "bg-lime-600 text-white rounded-md w-36 px-2 py-1 mt-1";
      document.getElementById("answerText").className = "hidden";
    } else {
      messageElement.className = "bg-red-500 bg-opacity-80 answer-message";
      navigator.vibrate(100);
    }
    setIsTimerActive(true);
    setTimeout(function () { 
      if (messageType === AnswerMessageType.Correct) {
        if (currentLevel === (levels.length - 1)) {
          navigate("/game/win");
        }
        nextLevel();
        window.localStorage.setItem("gameState",
        JSON.stringify({ currentLevel: currentLevel + 1, hp: hp, levels: levels}));    
      } else {
        if (hp === 1) {
          navigate("/game/lose");
        }
      }
      setIsTimerActive(false);
      answerArea.className = "hidden";
      messageElement.className = "hidden";
      optionArea.className = "grid grid-flow-row h-[228px]";
    }, 1000);
  }

  const checkAnswer = (answer) => {
    if (answer !== "" && answer === levels[currentLevel].correctAnswer) {
      messageHandler(AnswerMessageType.Correct);      
    } else if (answer !== "" && answer !== levels[currentLevel].correctAnswer) {
      messageHandler(AnswerMessageType.Incorrect);
      window.localStorage.setItem("gameState",
      JSON.stringify({ currentLevel: currentLevel, hp: hp - 1, levels: levels}));    
      if (hp > 1) {
        setHp(hp - 1);
        setAnswer("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <header className="py-4 items-start top-0 left-0 w-full pb-3">
        <GameBar />
      </header>
      <div className="flex justify-center relative">
        <h1 className="text-center font-bold text-white bg-teal-600 bg-opacity-70 py-2 rounded-md absolute text-4xl my-0 left-0 w-56 right-0 mx-auto top-16">
          Capital quiz
        </h1>
        <img
          width="w-11/12"
          className="w-11/12 max-w-xl pb-4"
          src={colorfulMapImage}
          alt="Mapa sveta"
        />
      </div>
      {levels && <Card question={levels[currentLevel].question} options={levels[currentLevel].options} />}
  </div>
  );
};

export default Game;
