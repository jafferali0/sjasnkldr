import React, { useRef } from "react";
import "./ladders.css";

export default function Ladders({ props }) {
  const { top, left } = props;

  // console.log(top, left);
  return (
    <>
      <div>
        <img
          style={{ top: top, left: left }}
          className="ladder1"
          width={"15%"}
          src="/ladder1.png"
        />
      </div>
    </>
  );
}
