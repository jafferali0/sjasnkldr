import React, { useRef } from "react";
import "./LadderLarge.css";

export default function LadderLarge({ props }) {
  const { top, left } = props;
  const inputElement = useRef();
  return (
    <>
      <div>
        <img
          style={{ top: top, left: left }}
          ref={inputElement}
          className="ladder"
          width={"35%"}
          src="/ladder2.png"
        />
      </div>
    </>
  );
}
