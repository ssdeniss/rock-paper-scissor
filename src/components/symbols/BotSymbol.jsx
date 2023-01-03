import React from "react";
import sprite from "../../assets/icons/sprite.svg";

const BotSymbol = ({ randomSymbol, botScore }) => {
  const choiceArray = ["rock", "paper", "scissor"];
  return (
    <div className="symbol">
      <h3 className="symbol__title">
        Bot choice
        {randomSymbol ? (
          <>
            :{" "}
            <span className="symbol__title-choice">
              {choiceArray[randomSymbol]}
            </span>
          </>
        ) : (
          ""
        )}
      </h3>
      <h3 className="symbol__score"> {botScore}</h3>
      <div className="symbol__content">
        {choiceArray && (
          <svg className="popup__select-icon">
            <use href={sprite + `#${choiceArray[randomSymbol]}`}></use>
          </svg>
        )}
      </div>
    </div>
  );
};

export default BotSymbol;
