import { IoClose } from "react-icons/io5";
import SetTimeInput from "./SetTimeInput";

export default function Backdrop({ onClose }) {
  return (
    <div className="w-full h-screen bg-[#00000080] fixed z-50">
      <div className="w-[600px] bg-white rounded-[2rem] pb-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center p-8 border-b">
          <h2 className="font-semibold text-3xl">Settings</h2>
          <IoClose
            className="text-3xl text-gray-500 hover:text-red-500 hover:cursor-pointer duration-200"
            onClick={onClose}
          />
        </div>

        <div className="px-8">
          <div className="py-4 border-b">
            <h3 className="font-bold tracking-[.5rem] text-sm">
              TIME (MINUTES)
            </h3>
            <div className="mt-4 flex justify-between ">
              <SetTimeInput name="pomodoro" />
              <SetTimeInput name="short break" />
              <SetTimeInput name="long break" />
            </div>
          </div>
          
          <div className="py-4 flex justify-between items-center">
            <h3 className="font-bold tracking-[.5rem] text-sm">COLOR</h3>
            <input type="color" className="w-[60px] h-[30px]" />
          </div>
        </div>
        <button className="font-semibold px-10 py-3 bg-coral text-white rounded-full absolute -bottom-5 left-1/2 transform -translate-x-1/2 ">
          Apply
        </button>
      </div>
    </div>
  );
}
