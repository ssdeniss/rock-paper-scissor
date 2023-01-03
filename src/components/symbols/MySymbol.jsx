import React from "react";
import sprite from "../../assets/icons/sprite.svg";

const MySymbol = ({ choice, userScore }) => {
  return (
    <div className="symbol">
      <h3 className="symbol__title">
        Your choice
        {choice ? (
          <>
            : <span className="symbol__title-choice"> {choice}</span>
          </>
        ) : (
          ""
        )}
      </h3>
      <h3 className="symbol__score">{userScore}</h3>

      <div className="symbol__content">
        <svg className="symbol__content-icon">
          <use href={sprite + `#${choice}`}></use>
        </svg>
      </div>
    </div>
  );
};

export default MySymbol;
