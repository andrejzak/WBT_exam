import React from 'react';
import easyGameSetup from "./../data/easy.json";
import hardGameSetup from "./../data/hard.json";
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from '../components/Button';
import PrintManualButton from '../components/PrintManualButton';

const GameManual = () => {
  return (
    <div className='p-4 relative pt-14'>
      <div className='absolute right-5 top-3'>
        <div className='flex gap-2'>
          <PrintManualButton />
          <Button content={<GiHamburgerMenu />} path="/" styles="icon-button" />
        </div>
      </div>
      <div id="printableContent" className='bg-cyan flex flex-col items-center'>
        <header>
          <h1 className='text-red-300 font-bold text-3xl pb-3'>
            Herný manuál
          </h1>
        </header>
        <main>
          <h2 className='text-red-300 font-bold text-2xl'>
            1. Pravidlá hry: 
          </h2>
          <p className='text-white mb-5 pl-1 smallest:text-justify'>
            Na začiatku si hráč zvolí úroveň obtiažnosti pričom predvolená úroveň je ľahká. Po kliknutí na tlačidlo
            'Začať hru' sa spustí prví level zvolenej úrovne. Na zvolenú otázku 
            hráč odpovie presunutím odpovede do vyznačeného políčka. Keď hráč odpovie správne, tak sa posúva do ďalšieho
            levelu. Ak však hráč odpovie nesprávne, tak príde o jeden život. Kliknutím na ikonku 'pause' sa zobrazí menu 
            umožňujúce reštart, pokračovanie a ukončenie hry.
          </p>
          <h2 className='text-red-300 font-bold text-2xl'>
            2. Cieľ hry: 
          </h2>
          <p className='text-white mb-5 pl-1'>
            Cieľom hry je odpovedať na všetky otázky zvolenej úrovne pričom hráč má 3 životy.
          </p>
          <h2 className='text-red-300 font-bold text-2xl pb-2'>
            3. Správne odpovede:
          </h2>
          <div className='grid sm:grid-cols-2 sm:gap-x-6 gap-y-4 justify-items-center'>
            <div className='max-w-xs'>
              <h3 className='text-red-300 font-bold text-md pl-1 pb-1'>Ľahká obtiažnosť:</h3>
              {easyGameSetup.map((item, index) => 
                <p className='text-white border-2 border-red-500 py-1 px-2' key={index} index={index}>
                  <span className='font-bold text-green-300'>Otázka:</span> {item.question}<br /><span className='font-bold text-green-300'>Odpoveď: </span>{item.correctAnswer}
                </p>
              )}
            </div>
            <div className='max-w-xs'>
              <h3 className='text-red-300 font-bold text-md pl-1 pb-1'>Ťažká obtiažnosť:</h3>
              {hardGameSetup.map((item, index) => 
                <p className='text-white border-2 border-red-500 py-1 px-2' key={index} index={index}>
                  <span className='font-bold text-green-300'>Otázka:</span> {item.question}<br /><span className='font-bold text-green-300'>Odpoveď: </span>{item.correctAnswer}
                </p>
              )}
            </div>
          
          </div>
          <p className='text-white'>
          </p>
          {/* {console.log(easyGameSetup)} */}
        </main>
      </div>  
    </div>
  )
}

export default GameManual;