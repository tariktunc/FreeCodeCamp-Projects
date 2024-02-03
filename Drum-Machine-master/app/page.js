"use client";
import React from "react";
import Controls from "./components/Controls";
import Logo from "./components/Logo";
import PadBank from "./components/PadBank";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen backGroundColor ">
      <div className="outline outline-offset-3 outline-4 outline-orange-400 relative w-[660px] text-center bg-[#b3b3b3]">
        <PadBank />
        <Logo />
        <Controls />
      </div>
    </div>
  );
}
