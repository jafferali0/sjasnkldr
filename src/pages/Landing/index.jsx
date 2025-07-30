import React, { useContext, useMemo, useState } from "react";
import "./Landing.css";
import { v4 } from "uuid";
import { playerContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [playerCount, setPlayerCount] = useState();
  let { players, setPlayers, roomId, setRoomId } = useContext(playerContext);
  const navigate = useNavigate();
  useMemo(() => {
    renderNames();
  }, [playerCount]);

  function generateroom() {
    let id = v4();
    setRoomId(id);
    navigate("/game");
  }

  function renderNames() {
    let temp = [];
    for (let i = 0; i < playerCount; i++) {
      temp.push({});
    }
    setPlayers(temp);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className="form">
        <h1>Game Start</h1>
        <div className="form-field">
          <label className="input-label">
            Please enter the number of players:{" "}
          </label>
          <input
            className="input-box"
            type="number"
            min={2}
            max={8}
            placeholder="Minimum is 2 players and Maximum is 8 Players"
            onChange={(e) => {
              setPlayerCount(e.target.value);
            }}
          />
          <span style={{ borderBottom: "2px solid lightgray" }} />
          {players?.map((ele, idx) => {
            return (
              <>
                <input
                  className="input-box"
                  type="text"
                  name={"player" + (idx + 1)}
                  min={2}
                  max={8}
                  placeholder={`Enter Player ${idx + 1} name: `}
                  onChange={(e) => {
                    let temp = [...players];
                    temp[idx] = {
                      ...temp[idx],
                      ["player" + (idx + 1)]: e.target.value,
                      id: idx + 1,
                      posX: 0,
                      posY: 0,
                      currentPosition: 100,
                    };
                    setPlayers(temp);
                    // console.log(players, "players");
                  }}
                />
              </>
            );
          })}
        </div>

        <button
          className="gen-btn"
          type="button"
          onClick={() => {
            generateroom();
          }}
        >
          Generate Room ID
        </button>
      </form>
    </div>
  );
}
