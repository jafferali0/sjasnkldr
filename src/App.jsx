import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";
import Landing from "./pages/Landing";
import { createContext, useState } from "react";

export const playerContext = createContext();

function App() {
  const [players, setPlayers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [playerPos, setPlayerPos] = useState(100);
  const [randomChoice, setRandomChoice] = useState();

  return (
    <>
      <playerContext.Provider
        value={{
          players,
          setPlayers,
          roomId,
          setRoomId,
          playerPos,
          setPlayerPos,
          randomChoice,
          setRandomChoice,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </playerContext.Provider>
    </>
  );
}

export default App;
