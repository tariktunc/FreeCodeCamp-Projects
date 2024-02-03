import React, { useState } from "react";

export default function Input() {
  const [sliderValue, setSliderValue] = useState(30);
  return (
    <>
      <div className="mt-4 mb-4 relative w-56">
        <input
          id="large-range"
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          className="slider w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-ew-resize range-lg dark:bg-gray-700 "></input>
      </div>
    </>
  );
}
