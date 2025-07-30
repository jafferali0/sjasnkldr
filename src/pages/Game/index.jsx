import "./Game.css";

import { useContext, useEffect, useMemo, useState } from "react";
import Dice from "../../componets/Dice";
import Board from "../../componets/Board";
import Crossladder from "../../componets/CrossLadder";
import LadderLarge from "../../componets/LadderLarge";
import Ladders from "../../componets/Ladders";
import { createPawn, movePawn } from "../../functions/brain";
import { playerContext } from "../../App";
import Snake1 from "../../componets/snakes/Snake1";
import Snake2 from "../../componets/snakes/Snake2";
import Snake3 from "../../componets/snakes/Snake3";
import Snake4 from "../../componets/snakes/Snake4";
import Snake5 from "../../componets/snakes/Snake5";
import Snake6 from "../../componets/snakes/Snake6";

function Game() {
  // const [playerPos, setPlayerPos] = useState(100);
  const [showDice, setShowDice] = useState(true);
  const [currentTurn, setCurrentTurn] = useState(0);
  // const [randomChoice, setRandomChoice] = useState();
  const [xPos, setXPos] = useState();
  const [yPos, setYPos] = useState();

  const {
    players,
    setPlayers,
    roomId,
    playerPos,
    setPlayerPos,
    randomChoice,
    setRandomChoice,
  } = useContext(playerContext);

  console.log(players, "players", roomId, "roomId");

  let random = null;

  function getRandom() {
    setShowDice(false);
    random = Math.round(Math.random() * 5) + 1;
    setRandomChoice((prev) => random);
    setTimeout(() => {
      move();
    }, 1000);
  }

  function move(...optMove) {
    let newVal;
    let temp = [...players];
    if (optMove && optMove.length > 0) {
      newVal = optMove[0];
    } else {
      newVal = temp[currentTurn].currentPosition - random;
    }
    const pos = getPositionXY(document.getElementById(newVal));
    temp[currentTurn] = {
      ...temp[currentTurn],
      currentPosition: newVal >= 0 && newVal,
      posX: pos.X,
      posY: pos.Y,
    };
    setPlayers(temp);
    setTimeout(() => {
      if (optMove.length == 0 && !optMove[0]) {
        checkLaddednSnake(newVal);
      }
      setCurrentTurn(currentTurn + 1 !== players.length ? currentTurn + 1 : 0);
      setShowDice(true);
      if(newVal == 0) {
        alert("Game Over")
      }
    }, 1000);

    // setPlayerPos((prev) => prev - random > 0 && prev - random);
    // setTimeout(() => {
    //   checkLaddednSnake(playerPos - random);
    //   setShowDice(true);
    //   setCurrentTurn(currentTurn + 1 !== players.length ? currentTurn + 1 : 0);
    // }, 1000);
  }

  function getPositionXY(element) {
    let rect = element?.getBoundingClientRect();
    return { X: rect?.x, Y: rect?.y };
  }

  useEffect(() => {
    const pos = getPositionXY(document.getElementById(playerPos));
    setXPos(pos.X);
    setYPos(pos.Y);
  }, [playerPos]);

  function checkLaddednSnake(position) {
    switch (position) {
      case 89: {
        move(52);
        // setPlayerPos(() => 52);
        break;
      }
      case 53: {
        move(8);
        // setPlayerPos(() => 8);
        break;
      }
      case 95: {
        move(73);
        // setPlayerPos(() => 73);
        break;
      }
      case 45: {
        move(16);
        // setPlayerPos(() => 16);
        break;
      }
      case 64: {
        move(24);
        // setPlayerPos(() => 24);
        break;
      }
      case 40: {
        move(18);
        // setPlayerPos(() => 18);
        break;
      }
      case 2: {
        move(3);
        // setPlayerPos(() => 3);
        break;
      }
      case 39: {
        move(78);
        // setPlayerPos(() => 78);
        break;
      }
      case 68: {
        move(94);
        // setPlayerPos(() => 94);
        break;
      }
      case 49: {
        move(69);
        // setPlayerPos(() => 69);
        break;
      }
      case 29: {
        move(30);
        // setPlayerPos(() => 30);
        break;
      }
      case 65: {
        move(97);
        // setPlayerPos(() => 97);
        break;
      }
      case 34: {
        move(55);
        // setPlayerPos(() => 55);
        break;
      }
      case 4: {
        move(24);
        // setPlayerPos(() => 24);
        break;
      }
      case 58: {
        move(83);
        // setPlayerPos(() => 83);
        break;
      }
      case 21: {
        move(41);
        // setPlayerPos(() => 41);
        break;
      }
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="controls">
        <h2>Snake 🐍 And Ladder 🪜</h2>
        <div className="log-area">
          <h3 className="player-term">{players[currentTurn].name} Turn</h3>
          <div className="log-records">
            <div className="dice-area" onClick={() => showDice && getRandom()}>
              <Dice />
              {!showDice && <div className="black-screen"></div>}
            </div>
          </div>
        </div>
        <div className="score"></div>
        <div className="pawns">
          <div className="pawn-place">
            <span>Player-1</span>
            <img width={"50%"} height={"60%"} src="/p1.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-2</span>
            <img width={"50%"} height={"60%"} src="/p2.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-3</span>
            <img width={"50%"} height={"60%"} src="/p3.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-4</span>
            <img width={"50%"} height={"60%"} src="/p4.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-5</span>
            <img width={"50%"} height={"60%"} src="/p5.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-6</span>
            <img width={"50%"} height={"60%"} src="/p6.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-7</span>
            <img width={"50%"} height={"60%"} src="/p7.png" />
          </div>
          <div className="pawn-place">
            {" "}
            <span>Player-8</span>
            <img width={"50%"} height={"60%"} src="/p8.png" />
          </div>
        </div>
      </div>

      <div style={{ width: "80%", position: "relative" }}>
        <div id="board" className="board-area">
          <Board />
        </div>
        <div className="ladders-area">
          <Ladders props={{ top: "20%", left: "39%" }} />
          <Ladders props={{ top: "56%", left: "76%" }} />
          <LadderLarge props={{ top: "20vh", left: "18%" }} />
          <LadderLarge props={{ top: "4vh", left: "55%" }} />
          <Crossladder props={{ top: "60vh", left: "50%" }} />
          <Crossladder props={{ top: "6vh", left: "5%" }} />
          <Snake1 props={{ top: "6vh", left: "15%" }} />
          <Snake1 props={{ top: "20vh", left: "80%" }} />
          <Snake2 props={{ top: "34vh", left: "17%" }} />
          <Snake3 props={{ top: "25vh", left: "52%" }} />
          <Snake4 props={{ top: "60vh", left: "60%" }} />
          <Snake4 props={{ top: "60vh", left: "34%" }} />
          <Snake5 props={{ top: "40vh", left: "80%" }} />
          <Snake5 props={{ top: "6vh", left: "30%" }} />
          <Snake6 props={{ top: "62vh", left: "20%" }} />
          <Snake6 props={{ top: "30vh", left: "2%" }} />
        </div>
        <div id="pawnsArea" className="pawns-area">
          {/* <img
            src="/p1.png"
            className="player-pawn"
            style={{ left: `${xPos - 300}px`, top: `${yPos - 20}px` }}
          /> */}
          {players.map((ele, idx) => {
            return (
              <img
                src={`/p${idx + 1}.png`}
                className="player-pawn"
                style={{
                  left: `${ele.posX - 300}px`,
                  top: `${ele.posY - 20}px`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
