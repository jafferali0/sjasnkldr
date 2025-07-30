import React, { useRef } from "react";
import "./snakes.css";

export default function Snake4({ props }) {
  const { top, left } = props;

  // console.log(top, left);
  return (
    <>
      <div>
        <img
          style={{ top: top, left: left }}
          className="snake"
          width={"15%"}
          src="/snake4.png"
        />
      </div>
    </>
  );
}
