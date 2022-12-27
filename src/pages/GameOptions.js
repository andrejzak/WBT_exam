import React from 'react';
import Button from '../components/Button';
import coffeeImage from '../images/coffee.png';
import EndButton from '../components/EndButton';
import NewGameButton from '../components/NewGameButton';

const GameOptions = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-full p-3'>
       <img
          className='w-4/5 max-w-sm'
          src={coffeeImage}
          alt='Obrázok kávy'
        />       
       <div className='grid gap-6 justify-center'>
          <Button path="/game" name="Pokračovať" styles="blue-button" />
          <NewGameButton />
          <EndButton />
        </div>
      
    </div>
  )
}

export default GameOptions;