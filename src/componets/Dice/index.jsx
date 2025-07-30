import { memo, useContext, useEffect, useState } from "react";
import "./Dice.css";
import { playerContext } from "../../App";

function Dice() {
  // console.log(random);
  const { randomChoice } = useContext(playerContext);

  useEffect(() => {
    getImage();
  }, [randomChoice]);

  const [display, setDisplay] = useState();
  const diceGif = "https://media.tenor.com/sUiwSBs8S6QAAAAi/dice-game.gif";
  const one =
    "https://wallpapers.com/images/hd/dice-one-side-black-dot-vra5s60g4zhm3jp4.jpg";
  const four =
    "https://cdn.pixabay.com/photo/2014/04/03/10/24/dice-310335_960_720.png";
  const five =
    "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3151945/dice-clipart-md.png";
  const six =
    "https://cdn.pixabay.com/photo/2014/04/03/10/24/dice-310333__480.png";
  const two =
    "https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337__480.png";
  const three =
    "https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336__340.png";

  function getImage() {
    // props((prev) => random);
    setDisplay(<img className="gifdice" src={diceGif} />);
    setTimeout(() => {
      setDisplay(
        <img
          className="gifdice"
          src={
            randomChoice == 1
              ? one
              : randomChoice == 2
              ? two
              : randomChoice == 3
              ? three
              : randomChoice == 4
              ? four
              : randomChoice == 5
              ? five
              : randomChoice == 6
              ? six
              : three
          }
        />
      );
    }, 1000);
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div
      className="dice-play dash"
      onClick={() => {
        randomChoice && getImage();
      }}
    >
      {randomChoice ? (
        <div>{display}</div>
      ) : (
        <div>
          Click heare to Roll Dice <span className="pointer">👆</span>
        </div>
      )}
    </div>
  );
}

export default Dice;
