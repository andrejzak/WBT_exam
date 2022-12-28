import React from 'react';
import { BsPauseCircle } from 'react-icons/bs'

import { Link } from "react-router-dom";

const GameOptionsButton = () => {
  return (
    <Link
      to="/game/options"
      className="icon-button"
    >
      <BsPauseCircle />
    </Link>
  )
}

export default GameOptionsButton;