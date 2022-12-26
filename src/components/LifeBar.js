import React from 'react';
import HartImage from './../images/hart.png';
import { useStoreContext } from "./../common/store.context";

const LifeBar = ( {} ) => {
  const { hp } = useStoreContext();

  return (
    <ul className='flex flex-row'>
      {Array.from(Array(hp)).map((item, index) => (
        <img key={index} className='w-10' src={HartImage} alt="srdce"/>  
      ))}
    </ul>
  );
}

export default LifeBar;