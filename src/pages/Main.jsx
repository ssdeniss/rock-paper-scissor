import React, { useEffect, useState } from "react";
import MySymbol from "../components/symbols/MySymbol";
import BotSymbol from "../components/symbols/BotSymbol";
import StartButton from "../components/buttons/StartButton";
import MainPopup from "./MainPopup";

const Main = () => {
  const [choice, setChoice] = useState(null);
  const [popup, setPopup] = useState(false);
  const [randomSymbol, setRandomSymbol] = useState(null);
  const [score, setScore] = useState({
    userScore: null,
    botScore: null,
  });
  const handlePopup = () => {
    setPopup(!popup);
  };
  const handleRandomSymbol = () => {
    setRandomSymbol(Math.floor(Math.random() * 3));
  };

  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);
  return (
    <>
      <MainPopup
        popup={popup}
        setPopup={setPopup}
        setChoice={setChoice}
        choice={choice}
      />
      <div className="game">
        <div className="container">
          <div className="game__content">
            <h1 className="game__title">
              Hello, please push the start button <br /> and let's do it
            </h1>
            <div className="game__symbols">
              <MySymbol choice={choice} />
              <BotSymbol choice={choice} randomSymbol={randomSymbol} />
            </div>
            <StartButton
              choice={choice}
              handlePopup={handlePopup}
              handleRandomSymbol={handleRandomSymbol}
              randomSymbol={randomSymbol}
              setRandomSymbol={setRandomSymbol}
              setChoice={setChoice}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
