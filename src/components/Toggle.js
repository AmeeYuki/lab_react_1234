import React, { Component, useState } from "react";
import "../assets/css/toggleStyle.css";
import { WbSunny } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Toggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => setOn((on) => !on);

  return (
    <div>
      <div>
        <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
          <div className={`spinner ${on ? "active" : ""}`}></div>
          <div className={`icon ${on ? "active" : ""}`}>
            {on ? <WbSunny></WbSunny> : <DarkModeIcon></DarkModeIcon>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Toggle;
