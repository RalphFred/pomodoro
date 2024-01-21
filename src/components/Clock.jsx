import { useEffect, useState } from "react";

export default function Clock({ duration, color }) {
  const [time, setTime] = useState(duration * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(true);

  useEffect(() => {
    setTime(duration * 60);
    setIsTimerPaused(true);
  }, [duration]);

  useEffect(() => {
    let intervalId;

    if (!isTimerPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [duration, isTimerPaused]);

  const handleStartClick = () => {
    setIsTimerPaused((prevTime) => !prevTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div
      className={`w-[400px] h-[400px] rounded-full my-8 border-8 flex flex-col justify-center items-center`}
      style={{borderColor: color}}
    >
      <h1 className="font-bold text-8xl text-slate-200 mb-6">
        {formatTime(time)}
      </h1>

      <button
        className={`font-bold text-xl tracking-[.75rem]`}
        onClick={handleStartClick}
        style={{color: color}}
      >
        {isTimerPaused ? "START" : "PAUSE"}
      </button>
    </div>
  );
}
