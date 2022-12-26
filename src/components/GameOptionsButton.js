import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";

const GameOptionsButton = () => {
  return (
    <Link
      to="/game/options"
      className='flex items-center hover:text-purple-300 justify-center text-white text-4xl w-10 h-10'
    >
      <GiHamburgerMenu />
    </Link>
  )
}

export default GameOptionsButton;