import { FaGear } from "react-icons/fa6";
import Backdrop from "./Backdrop";
import { useState } from "react";

export default function Settings() {
  const [showSetting, setShowSetting] = useState(false);

  const handleToggle = () => {
    setShowSetting(!showSetting);
  }

  return(
    <>
      <FaGear 
      className="text-slate-500 hover:text-slate-200 cursor-pointer duration-300 text-4xl"
      onClick={handleToggle}
      />

      {showSetting && <Backdrop onClose={handleToggle}/>}
    </>
  )
}