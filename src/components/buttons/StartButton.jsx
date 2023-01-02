import React from "react";

const StartButton = ({
  choice,
  handlePopup,
  handleRandomSymbol,
  randomSymbol,
  setRandomSymbol,
  setChoice,
}) => {
  const handleReset = () => {
    setRandomSymbol(null);
    setChoice(null);
  };

  return (
    <>
      {typeof randomSymbol !== "number" ? (
        <>
          {choice && (
            <button
              className="btn"
              type="button"
              onClick={handleRandomSymbol}
              style={{ marginBottom: "20px" }}
            >
              <div>Let's do it</div>
            </button>
          )}

          <button className="btn" type="button" onClick={handlePopup}>
            <div>{choice ? "Change your Symbol" : "Choose your Symbol"}</div>
          </button>
        </>
      ) : (
        <button className="btn" type="button" onClick={handleReset}>
          <div>Try another one</div>
        </button>
      )}
    </>
  );
};

export default StartButton;
