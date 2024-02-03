import React from "react";

export default function Home({ isSoundName }) {
  return (
    <>
      <p className="display w-[200px] bg-gray-500 my-1 mx-auto p-[15px] box-border">
        {isSoundName}
      </p>
    </>
  );
}
