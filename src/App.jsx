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

  const { innerWidth: width, innerHeight: height } = window;
  console.log(typeof innerWidth);

  return (
    <>
      {innerWidth >= 1272 ? (
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
      ) : (
        <h1 style={{display: "flex", alignItems: "center", height: "100vh"}}>
          🥲Oops! Soory we are not available on the Mobile and Tabs Please try
          to play from Desktop. <br/> 🫣Stay tuned we will be avaialble on Mobile Soon!!
        </h1>
      )}
    </>
  );
}

export default App;
