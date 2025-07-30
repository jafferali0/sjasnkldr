import { useState } from "react";
import "./board.css";

export default function Board() {
  let buffer = 0;
  let termination = 10;
  let cells = [];

  for (let i = 0; i < 10; i++) {
    // console.log(termination, "termination");
    if (
      termination == 10 ||
      termination == 30 ||
      termination == 50 ||
      termination == 70 ||
      termination == 90 ||
      termination == 110
    ) {
      for (let j = i + buffer; j < termination; j++) {
        cells.push(j);
      }
    } else {
      for (let j = i + buffer + 9; j > termination - 11; j--) {
        // console.log(j, "j");
        cells.push(j);
      }
    }
    buffer = buffer + 9;
    termination = termination + 10;
  }

  return (
    <>
      <div className="board">
        {cells.map((ele, idx) => {
          return (
            <div id={ele + 1} key={idx} className="cell">
              <span className="number">{ele + 1}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
