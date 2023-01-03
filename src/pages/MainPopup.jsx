import React, { useEffect } from "react";
import sprite from "../assets/icons/sprite.svg";
import { useClickOutside } from "../hooks/useClickOutside";

const MainPopup = ({ popup, setPopup, setChoice, choice }) => {
  const choiceArray = ["rock", "paper", "scissor"];
  const outside = useClickOutside(() => {
    setPopup(false);
    document.body.style.overflow = "auto";
  });
  useEffect(() => {
    setPopup(false);
  }, [choice]);
  return (
    <div className={`popup ${popup ? "active" : ""}`}>
      <div className="popup__content" ref={outside}>
        <div className="popup__content-close" onClick={() => setPopup(false)}>
          <svg className="popup__close-icon">
            <use href={sprite + "#close"}></use>
          </svg>
        </div>
        <div className="popup__content-select">
          <h3 className="popup__select-title">Select your symbol</h3>
          <ul className="popup__select-items">
            {choiceArray.map((item, i) => (
              <li
                key={i}
                className={`popup__select-item ${
                  choice === item ? "active" : ""
                }`}
                onClick={() => setChoice(item)}
              >
                <svg className="popup__select-icon">
                  <use href={sprite + `#${item}`}></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPopup;
