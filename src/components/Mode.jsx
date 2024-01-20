import { useState } from "react";

export default function Mode({activeMode, modes, onModeChange}) {

  return (
    <div className="bg-[#1c2230] p-2 rounded-full my-8">
      <div className="relative">
      {modes.map((mode, index) => (
        <button
         key={index}
         onClick={() => onModeChange(index)}
         className={`mode ${index === activeMode ? 'active' : '' }`}
        >
          {mode}
        </button>
      ))}
      <span 
       className="mode-indicator"
       style={{
        left: activeMode >= 0 ? `calc(${activeMode * 100 / modes.length}%)` : 0,
        background: '#EEEBD0'
      }}
      >
        <span className="w-full h-full flex justify-center items-center">
          {modes[`${activeMode}`]}
        </span>
      </span>
      </div>
    </div>
  );
}
