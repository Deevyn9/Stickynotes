import React from 'react'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ( {darkMode, switchAsap} ) => {

  return (
    <div className="header">
      <div className="header__name">Sticky</div>
      <div
        className={!darkMode ? "header__switcher black" : "header__switcher"}
        onClick={switchAsap}
      >
        {darkMode ? "Again!!!!" : "Touch Me!"}{" "}
        {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    </div>
  );
}

export default Header