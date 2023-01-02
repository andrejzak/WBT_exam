import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { StoreProvider } from "./common/store.context";
import Game from "./pages/Game";
import StartMenu from "./pages/StartMenu";
import GameOptions from "./pages/GameOptions";
import GameLose from "./pages/GameLose";
import GameWin from "./pages/GameWin";
import GameManual from "./pages/GameManual";

function App() {
  return (
    <div className=" grid justify-items-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-400">
      <div className="max-w-4xl w-screen bg-cyan">
        <StoreProvider>
          <Routes>
            <Route index path="/" element={<StartMenu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game/options" element={<GameOptions />} />
            <Route path="/game/lose" element={<GameLose />} />
            <Route path="/game/win" element={<GameWin />} />
            <Route path="/manual" element={<GameManual />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
