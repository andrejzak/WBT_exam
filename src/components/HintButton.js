import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const HintButton = () => {
  const onMouseEnterHandler = () => {
    document.getElementById("hintWindow").className = "absolute text-yellow-200 text-center text-sm top-12 w-36 bg-purple-600 bg-opacity-60 font-bold rounded-md py-2";
  }

  const onMouseLeaveHandler = () => {
    document.getElementById("hintWindow").className = "hidden";
  }

  return (
    <button onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='icon-button relative hover:animate-pulse'>
      <FaRegLightbulb />
    </button>
  )
}

export default HintButton;