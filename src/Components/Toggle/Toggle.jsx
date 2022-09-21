import React, { useContext } from "react";
import "./Toggle.css";
import { BsSun } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { themeContext } from "../../Context";
function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <HiMoon />
      <BsSun />
      <div
        className="t-button"
        style={
          darkMode ? { left: "5px" } : { right: "5px", transition: "none" }
        }
      ></div>
    </div>
  );
}

export default Toggle;
