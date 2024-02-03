"use client";
import React from "react";
import Button from "./control/Button";
import Input from "./control/Input";
import Display from "./control/Display";
import "../globals.css";

export default function Home() {
  return (
    <div className="w-[240px] h-[272px] inline-block mt-10 mr-5 mb-0 ml-2 align-top ">
      <div className="flex flex-col flex-wrap content-center w-[100px] m-auto  ">
        <p className="mb-0">Power</p>
        <Button />
        <Input />
        <p className="mb-0">Bank</p>
        <Button />
      </div>
    </div>
  );
}
