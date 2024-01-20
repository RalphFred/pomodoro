import Mode from "./components/Mode";
import Clock from "./components/Clock";
import Settings from "./components/Settings";
import { useState } from "react";

export default function App() {

  
  const [activeMode, setActiveMode] = useState(0);
  const modes = ["pomodoro", "short break", "long break"];

  const [modeDurations, setModeDurations] = useState({
    "pomodoro": 25,
    "short break": 5,
    "long break": 15,
  });

  const handleModeChange = (index) => {
    setActiveMode(index);
  }

  const handleApplySettings = (newDurations) => {
    setModeDurations(newDurations)
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
       duration={modeDurations[modes[activeMode]]}
      />
      <Settings onApplySettings={handleApplySettings}/>
    </div>
  )
}