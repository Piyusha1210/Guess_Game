import { useState } from "react";

const Game = () => {
  const [chances, setChances] = useState(5);
  const [gameState, setGameState] = useState(0);
  const [guess, setGuess] = useState("");
  var [random, setRandom] = useState(Math.floor(Math.random() * 10) + 1);

  const handleStartGame = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setGameState(1);
  };

  const handleGuess = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 10) {
      alert("Please enter a number between 1 and 10");
      return;
    }

    if (guessNumber === random) {
      setGameState(3);
    } else {
      setChances(chances - 1);
      if (chances === 1) {
        setGameState(2);
      }
    }
  };

  const handleRetry = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setChances(5);
    setGameState(1);
    setGuess("");
    setRandom(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <div className="w-5/12 bg-[#000000] flex items-center justify-center">
      <div className="center bg-[#FDE74C] p-16 text-center rounded-lg w-4/6">
        <form>
          {gameState === 0 && (
            <div>
              <div className="font-bold text-2xl pb-12">
                Guess a number between 1-10
              </div>

              <button
                className="bg-[#ffffff] py-3 px-8 border border-black rounded-md"
                onClick={handleStartGame}
              >
                Start the game
              </button>
            </div>
          )}
          {gameState === 1 && (
            <div>
              <div className="text-2xl pb-10">
                {chances} <span className="text-base"> chances left</span>
              </div>
              <input
                className="mb-12 px-8 py-4 rounded-lg"
                placeholder="Please enter you guess"
                value={guess}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setGuess(e.target.value)
                }
              ></input>
              <br />
              <button
                className="bg-[#ffffff] py-3 px-12 border border-black rounded-md"
                onClick={handleGuess}
              >
                Guess
              </button>
            </div>
          )}
          {gameState === 2 && (
            <div>
              <div className="text-6xl pb-6">🤕 </div>
              <div className="text-2xl pb-8">You lost !!</div>
              <button
                className="bg-[#ffffff] py-3 px-12 border border-black rounded-md"
                onClick={handleRetry}
              >
                Re-try
              </button>
            </div>
          )}
          {gameState === 3 && (
            <div>
              <div className="text-6xl pb-6">🎉</div>
              <div className="text-2xl pb-8">You Won !!</div>
              <button
                className="bg-[#ffffff] py-3 px-8 border border-black rounded-md"
                onClick={handleRetry}
              >
                Play again
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Game;
