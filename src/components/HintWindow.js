import React from 'react';
import { useStoreContext } from '../common/store.context';


const HintWindow = () => {
  const { levels, currentLevel } = useStoreContext();

  const showAnswerHandler = () => {
    document.getElementById("showAnswerButton").className = "hidden";
    let tmp = document.getElementById("answerText");
    tmp.className = "rounded-md px-2 py-1 mt-1 border-2 border-blue-200 w-36"
    tmp.innerHTML = levels[currentLevel].correctAnswer;
  }

  return (
    <div id="hintWindow" className='hidden absolute'>
      <span className='text-green-500'>50 - 50:</span> 
      {levels && levels[currentLevel].hint[0]} / {levels && levels[currentLevel].hint[1]}
      <div id='answerText'></div>
      <button id="showAnswerButton" onClick={showAnswerHandler} className='bg-lime-600 text-white rounded-md px-2 py-1 mt-1 w-36'>
        Odkryť odpveď
      </button>
    </div>
  );
}

export default HintWindow;