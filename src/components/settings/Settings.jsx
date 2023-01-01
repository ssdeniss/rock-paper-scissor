import React from "react";
import sprite from "../../assets/icons/sprite.svg";

const Settings = () => {
  return (
    <div className="settings">
      <svg className="settings__icon">
        <use href={sprite + "#settings"}></use>
      </svg>
    </div>
  );
};

export default Settings;
