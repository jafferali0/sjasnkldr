import React, { useRef } from "react";
import "./CrossLadder.css";

export default function Crossladder({ props }) {
  const { top, left } = props;
  const inputElement = useRef();
  return (
    <>
      <div>
        <img
          style={{ top: top, left: left }}
          ref={inputElement}
          className="cross-ladder"
          width={"26%"}
          height={"260"}
          src="/crossladder.png"
        />
      </div>
    </>
  );
}
