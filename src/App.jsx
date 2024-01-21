import Mode from "./components/Mode";
import Clock from "./components/Clock";
import Settings from "./components/Settings";
import { useState } from "react";

export default function App() {

  
  const [activeMode, setActiveMode] = useState(0);
  const modes = ["pomodoro", "short break", "long break"];
  const [color, setColor] = useState("#EEEBD0")

  const [modeDurations, setModeDurations] = useState({
    "pomodoro": 25,
    "short break": 5,
    "long break": 15,
  });

  const handleModeChange = (index) => {
    setActiveMode(index);
  }

  const handleApplySettings = (newDurations) => {
    setModeDurations(newDurations);

    setColor(newDurations.color);
    console.log(color);
  }


  return(
    <div className="w-full h-screen bg-dark-blue flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-slate-300">pomodoro</h1>

      <Mode 
       activeMode={activeMode}
       modes={modes}
       onModeChange={handleModeChange}
       color={color}
      />
      <Clock 
       duration={modeDurations[modes[activeMode]]}
       color={color}
      />
      <Settings onApplySettings={handleApplySettings}/>
    </div>
  )
}