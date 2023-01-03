import React, { useEffect, useState } from "react";
import MySymbol from "../components/symbols/MySymbol";
import BotSymbol from "../components/symbols/BotSymbol";
import StartButton from "../components/buttons/StartButton";
import MainPopup from "./MainPopup";

const Main = () => {
  const [choice, setChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [popup, setPopup] = useState(false);
  const [randomSymbol, setRandomSymbol] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  // switch (randomSymbol, choice) {
  //   case randomSymbol === 0:
  //     // setBotChoice("rock");
  //     console.log('rock')
  //     break;
  //   case randomSymbol === 1:
  //     // setBotChoice("paper");
  //     break;
  //   case randomSymbol === 2:
  //     // setBotChoice("scissor");
  //     break;
  //   default:
  //     setBotChoice("");
  //     break;
  // }
  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);

  // useEffect(() => {
  //   if (randomSymbol === 0) {
  //     setBotChoice("rock");
  //   } else if (randomSymbol === 1) {
  //     setBotChoice("paper");
  //   } else {
  //     setBotChoice("scissor");
  //   }
  // }, [randomSymbol]);
  useEffect(() => {
    if (choice === "paper" && randomSymbol === 0) {
      setUserScore((prev) => prev + 1);
    } else if (choice === "paper" && randomSymbol === 2) {
      setBotScore((prev) => prev + 1);
    } else if (choice === "rock" && randomSymbol === 1) {
      setBotScore((prev) => prev + 1);
    } else if (choice === "rock" && randomSymbol === 2) {
      setUserScore((prev) => prev + 1);
    } else if (choice === "scissor" && randomSymbol === 0) {
      setBotScore((prev) => prev + 1);
    } else if (choice === "scissor" && randomSymbol === 1) {
      setUserScore((prev) => prev + 1);
    }
  }, [randomSymbol, choice]);
  useEffect(() => {
    console.log("user: ", userScore);
    console.log("bot: ", botScore);
  }, [userScore, botScore]);
  const handlePopup = () => {
    setPopup(!popup);
  };
  const handleRandomSymbol = () => {
    setRandomSymbol(Math.floor(Math.random() * 3));
  };

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
              <MySymbol choice={choice} userScore={userScore} />
              <BotSymbol
                choice={choice}
                randomSymbol={randomSymbol}
                botScore={botScore}
              />
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
