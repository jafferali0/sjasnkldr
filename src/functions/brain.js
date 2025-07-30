import { useContext } from "react";
import { playerContext } from "../App";

function getPositionXY(element) {
  let rect = element.getBoundingClientRect();
  return { X: rect.x, Y: rect.y };
}
let player1 = document.createElement("img");

export function createPawn(pos, setPos) {
  // console.log(pos);
  // console.log("create pawn")
  document.getElementById("board").addEventListener("click", (event) => {
    // console.log(event.clientX, event.clientY);
  });
  player1.src = `/blue.png`;
  player1.id = "player1";
  player1.style.width = "35px";
  player1.style.height = "50px";
  player1.style.position = "absolute";
  let Pos = getPositionXY(document.getElementById(pos));
  player1.style.left = `${Pos.X - 300}px`;
  player1.style.top = `${Pos.Y - 20}px`;
  player1.style.transition = "1s ease";
  //   console.log(Pos);
  document.getElementById("pawnsArea").append(player1);
}

export function movePawn(pos, setPos) {
  // console.log(pos);
  let Pos = getPositionXY(document.getElementById(pos));
  //   document.getElementById('player1').style.transform = `translate(${
  //     Pos.X - 300
  //   }px, ${Pos.Y - 20}px)`;
  document.getElementById("player1").style.left = `${Pos.X - 300}px`;
  document.getElementById("player1").style.top = `${Pos.Y - 20}px`;
  checkLaddednSnake(pos, setPos);
}


