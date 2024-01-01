import Mode from "./components/Mode";
import Clock from "./components/Clock";
import Settings from "./components/Settings";

export default function App() {
  return(
    <div className="w-full h-screen bg-dark-blue flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-slate-300">pomodoro</h1>

      <Mode />
      <Clock />
      <Settings />
    </div>
  )
}