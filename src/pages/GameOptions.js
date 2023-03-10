import React from 'react';
import coffeeImage from '../images/coffee.png';
import EndButton from '../components/EndButton';
import NewGameButton from '../components/NewGameButton';
import ContinueButton from '../components/ContinueButton';

const GameOptions = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-full p-3'>
       <img
          className='w-4/5 max-w-sm text-center'
          width="100"
          height="100"
          src={coffeeImage}
          alt='Obrázok kávy'
        />       
       <div className='grid gap-6 justify-center'>
          <ContinueButton />
          <NewGameButton />
          <EndButton />
        </div>
      
    </div>
  )
}

export default GameOptions;