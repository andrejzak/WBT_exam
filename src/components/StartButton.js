import React from 'react';
import { Link } from 'react-router-dom';

function StartButton(props) {



  return (
    <Link to={props.path} className='text-center w-36 start-button font-bold cursor-pointer border-none px-6 py-2 rounded-md text-white'>
      {props.name}
    </Link>
  );
}

export default StartButton;
