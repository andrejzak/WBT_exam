import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EasyGame from './EasyGame';
import HardGame from './HardGame';
import StartMenu from './StartMenu';

function App() {
  return (
    <div className=" grid justify-items-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-400">
      <div className="max-w-4xl w-screen bg-blue-900">
        <Routes>
          <Route path="/" element={<StartMenu />} /> 
          <Route path="/easy" element={<EasyGame/>}/> 
          <Route path="/hard" element={<HardGame/>}/> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
