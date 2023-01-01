import React, { useEffect } from "react";
import MySymbol from "../components/symbols/MySymbol";
import BotSymbol from "../components/symbols/BotSymbol";
import StartButton from "../components/buttons/StartButton";

const Main = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);
  return (
    <div className="game">
      <div className="container">
        <div className="game__content">
          <h1 className="game__title">
            Hello, please push the start button <br /> and let's do it
          </h1>
          <div className="game__symbols">
            <MySymbol />
            <BotSymbol />
          </div>
          <StartButton />
        </div>
      </div>
    </div>
  );
};

export default Main;
