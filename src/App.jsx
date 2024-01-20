import Mode from "./components/Mode";
import Clock from "./components/Clock";
import Settings from "./components/Settings";
import { useState } from "react";

export default function App() {

  
  const [activeMode, setActiveMode] = useState(0);
  const modes = ["pomodoro", "short break", "long break"];
  const modeDuration = [25, 5, 15];

  const handleModeChange = (index) => {
    setActiveMode(index);
  }


  return(
    <div className="w-full h-screen bg-dark-blue flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-slate-300">pomodoro</h1>

      <Mode 
       activeMode={activeMode}
       modes={modes}
       onModeChange={handleModeChange}
      />
      <Clock 
       duration={modeDuration[activeMode]}
      />
      <Settings />
    </div>
  )
}