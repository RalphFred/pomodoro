import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function SetTimeInput({
  name,
  value,
  onInputChange,
  onArrowUpClick,
  onArrowDownClick,
}) {
  return (
    <div className="w-[160px] inline-block">
      <h4 className="text-sm font-semibold text-gray-400 mb-2">{name}</h4>
      <div className="relative w-full">
        <input
          type="number"
          className="bg-slate-200 w-full py-4 px-3 rounded-lg focus:outline-none no-spin-buttons font-semibold"
          onChange={onInputChange}
          value={value}
        />

        <div className="absolute top-2 right-2">
          <IoIosArrowUp
            className="text-slate-400 text-xl hover:text-slate-700 cursor-pointer"
            onClick={onArrowUpClick}
          />
          <IoIosArrowDown
            className="text-slate-400 text-xl hover:text-slate-700 cursor-pointer"
            onClick={onArrowDownClick}
          />
        </div>
      </div>
    </div>
  );
}
