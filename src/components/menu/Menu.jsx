import React from "react";
import sprite from "../../assets/icons/sprite.svg";

const Menu = () => {
  const handleMenu = () => {};
  return (
    <div className="menu" onClick={handleMenu}>
      <svg className="menu__icon">
        <use href={sprite + "#menu"}></use>
      </svg>
    </div>
  );
};

export default Menu;
