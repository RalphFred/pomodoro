import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function SetTimeInput(prop) {
  
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleArrowUpClick = () => {
    setValue(value + 1);
  }

  const handleArrowDownClick = () => {
    setValue(value - 1);
  }
  
  return (
    <div className="w-[160px] inline-block">
      <h4 className="text-sm font-semibold text-gray-400 mb-2">{prop.name}</h4>
      <div className="relative w-full">
        <input
          type="number"
          className="bg-slate-200 w-full py-4 px-3 rounded-lg focus:outline-none no-spin-buttons font-semibold"
          onChange={handleInputChange}
          value={value}
        />

        <div className="absolute top-2 right-2">
          <IoIosArrowUp className="text-slate-400 text-xl hover:text-slate-700 cursor-pointer" onClick={handleArrowUpClick}/>
          <IoIosArrowDown className="text-slate-400 text-xl hover:text-slate-700 cursor-pointer" onClick={handleArrowDownClick}/>
        </div>
      </div>
    </div>
  );
}
