import React from "react";
import { useState } from "react";
export default function Button() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="m-auto w-[50px] h-[25px] p-[1px] bg-black border-1 border-solid border-black">
      <div
        style={{ float: isClicked ? "left" : "right" }}
        onClick={() => setIsClicked(!isClicked)}
        className="w-[23px] h-[23px] bg-blue-800 border-2 border-solid border-black box-border cursor-pointer"></div>
    </div>
  );
}
