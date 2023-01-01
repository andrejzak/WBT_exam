import React, { useEffect } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { useStoreContext } from '../common/store.context';

const HintButton = () => {
  let isHintWindowDisplayed = false;
  const { currentLevel } = useStoreContext();

  const hintWindowHandler = () => {
    if (isHintWindowDisplayed) {
      isHintWindowDisplayed = false;
      document.getElementById("hintWindow").className = "hidden"; 
    } else {
      isHintWindowDisplayed = true;
      document.getElementById("hintWindow").className = "absolute grid justify-items-center text-yellow-200 text-center text-sm top-12 w-44 bg-purple-600 bg-opacity-90 font-bold rounded-md py-2";
    }
 };

  useEffect(() => {
    document.getElementById("hintWindow").className = "hidden";    
 }, [currentLevel]);

  return (
    <button id="bulbButton" onClick={hintWindowHandler} className='icon-button relative'>
      <FaRegLightbulb />
    </button>
  )
}

export default HintButton;