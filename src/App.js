import React from "react";
import { Route, Routes } from "react-router-dom";
import { StoreProvider } from "./common/store.context";
import Game from "./pages/Game";
import StartMenu from "./pages/StartMenu";
import GameOptions from "./pages/GameOptions";

function App() {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    document.location.assign("/");
  } 
  
  return (
    <div className=" grid justify-items-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-400">
      <div className="max-w-4xl w-screen bg-cyan">
        <StoreProvider>
          <Routes>
            <Route path="/" element={<StartMenu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game/options" element={ <GameOptions /> } />
          </Routes>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
