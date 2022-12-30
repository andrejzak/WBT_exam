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
      document.getElementById("hintWindow").className = "absolute text-yellow-200 text-center text-sm top-12 w-36 bg-purple-600 bg-opacity-60 font-bold rounded-md py-2";
    }
 };

  useEffect(() => {
    document.getElementById("hintWindow").className = "hidden";    
 }, [currentLevel]);

  return (
    <button onClick={hintWindowHandler} className='icon-button relative hover:animate-pulse'>
      <FaRegLightbulb />
    </button>
  )
}

export default HintButton;