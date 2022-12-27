import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../common/store.context';

const ContinueButton = () => {
  const { setAnswer } = useStoreContext();

  return (
    <Link
      to="/game"
      onMouseUp={() => {setAnswer("")}}
      className="blue-button"
    >
      Pokračovať
    </Link>
  );
}

export default ContinueButton;