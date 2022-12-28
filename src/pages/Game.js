import React, { useEffect } from "react";
import { useStoreContext, AnswerMessageType } from "./../common/store.context";
import Card from "../components/Card";
import colorfulMapImage from "../images/colorful_map.png";
import GameBar from "../components/GameBar";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const { currentLevel, setCurrentLevel, levels, hp, setHp, answer, setAnswer, setIsTimerActive } = useStoreContext();
  const navigate = useNavigate();

  useEffect(() => {
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
      messageElement.className = "bg-green-600 bg-opacity-60 answer-message";
    } else {
      messageElement.className = "bg-red-500 bg-opacity-70 answer-message";
    }
    setIsTimerActive(true);
    setTimeout(function () { 
      if (messageType === AnswerMessageType.Correct) {
        if (currentLevel === (levels.length - 1)) {
          navigate("/game/win");
        }
        nextLevel();
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
      if (hp > 1) {
        setHp(hp - 1);
      }
      setAnswer("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <header className="py-4 items-start top-0 left-0 w-full pb-3">
        <GameBar />
      </header>
      <img
        className="w-11/12 max-w-xl pb-4"
        src={colorfulMapImage}
        alt="Mapa sveta"
      />
      {levels && <Card question={levels[currentLevel].question} options={levels[currentLevel].options} />}
  </div>
  );
};

export default Game;
