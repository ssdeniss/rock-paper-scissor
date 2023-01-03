import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("body").classList.remove("light");
      document.querySelector("body").classList.add("dark");
    } else {
      setTheme("light");
      document.querySelector("body").classList.remove("dark");
      document.querySelector("body").classList.add("light");
    }
  };
  return (
    <div className="theme">
      <label className="switch">
        <input type="checkbox" onChange={handleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
