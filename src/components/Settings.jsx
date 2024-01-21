import { FaGear } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import SetTimeInput from "./SetTimeInput";
import { useState } from "react";

export default function Settings({ onApplySettings }) {
  const [showSetting, setShowSetting] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [color, setColor] = useState("#EEEBD0");

  const onClose = () => {
    setShowSetting(!showSetting);
  };

  const handleApplySettings = () => {
    onApplySettings({
      "pomodoro": pomodoroTime,
      "short break": shortBreakTime,
      "long break": longBreakTime,
      "color": color
    }) 

    onClose();
  }

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  return (
    <>
      <FaGear
        className="text-slate-500 hover:text-slate-200 cursor-pointer duration-300 text-4xl"
        onClick={onClose}
      />

      {showSetting && (
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
                  <SetTimeInput
                    name="pomodoro"
                    value={pomodoroTime}
                    onInputChange={(e) => setPomodoroTime(e.target.value)}
                    onArrowUpClick={() => setPomodoroTime(pomodoroTime + 1)}
                    onArrowDownClick={() => setPomodoroTime(pomodoroTime - 1)}
                  />
                  <SetTimeInput
                    name="short break"
                    value={shortBreakTime}
                    onInputChange={(e) => setShortBreakTime(e.target.value)}
                    onArrowUpClick={() => setShortBreakTime(shortBreakTime + 1)}
                    onArrowDownClick={() => setShortBreakTime(shortBreakTime - 1)}
                  />
                  <SetTimeInput
                    name="long break"
                    value={longBreakTime}
                    onInputChange={(e) => setLongBreakTime(e.target.value)}
                    onArrowUpClick={() => setLongBreakTime(longBreakTime + 1)}
                    onArrowDownClick={() => setLongBreakTime(longBreakTime - 1)}
                  />
                </div>
              </div>

              <div className="py-4 flex justify-between items-center">
                <h3 className="font-bold tracking-[.5rem] text-sm">COLOR</h3>
                <input type="color" className="w-[60px] h-[30px]" value={color} onChange={handleColorChange}/>
              </div>
            </div>
            <button className="font-semibold px-10 py-3 bg-coral text-white rounded-full absolute -bottom-5 left-1/2 transform -translate-x-1/2 " onClick={handleApplySettings}>
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
}
