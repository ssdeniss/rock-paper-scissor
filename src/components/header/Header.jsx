import React from "react";
import Menu from "../menu/Menu";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import sprite from "../../assets/icons/sprite.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Menu />
          <div className="header__logo">
            <svg className="header__icon">
              <use href={sprite + "#logo"}></use>
            </svg>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
