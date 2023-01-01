import React from "react";
import Menu from "../menu/Menu";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
            <Menu />
            <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
