"use client";
import React, { useState } from "react";
import { Clock } from "lucide-react";
import ChessUI from "@/components/ChessUI";
import Back from "@/components/Back";
import TimeoutModal from "@/components/TimeoutModal";
import Timer from "@/components/Timer";

const gameTime = [5, 10];
const Speed = () => {
  const [aiLevel, setAILevel] = useState<
    "Easy" | "Medium" | "Difficult" | null
  >(null);

  const [playTime, setPlayTime] = useState<number | null>(null);
  const [showTimeOut, setShowTimeOut] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const endGame = () => {
    setPlayTime(null);
    setAILevel(null);
    setStartGame(false);
  };
  const handleGameState = () => {
    if (playTime && aiLevel && !startGame) {
      setStartGame(true);
    } else if (startGame) {
      setShowConfirmation(true);
    }
  };
  return (
    <div className="h-full flex flex-col pb-16 ">
      <div className="p-6 border-b border-gray-200/50 flex flex-col lg:flex-row gap-2 lg:items-center">
        <div className="lg:px-4">
          <Back />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Compete Against The Clock
          </h1>
          <p className="text-gray-600">
            Improve your Quick thinking and Intuition
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:p-6">
        <div className="col-span-2 space-y-6">
          <div className="glass-card relative p-4 ">
            <div className=" w-full lg:flex lg:flex-col items-center justify-center glass-card">
              <ChessUI handleResetGame={startGame} />
              {!startGame && (
                <div className="absolute z-50 w-full h-full left-0 top-0 bg-[#ffffff9b] "></div>
              )}

              {showTimeOut && (
                <TimeoutModal
                  setShowTimeOut={setShowTimeOut}
                  handleEndGame={endGame}
                />
              )}
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              Time Usage Analysis
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Average Move Time
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-600">
                    12.5s
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-amber-500 to-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-9  flex  flex-col justify-start">
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              {aiLevel ? "Selected Level" : "Select Level"}
            </h3>
            <div className="space-y-4">
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
                <button
                  onClick={() => setAILevel("Easy")}
                  className={
                    aiLevel !== "Easy" && aiLevel !== null
                      ? "hidden"
                      : "text-center px-1 py-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"
                  }
                >
                  <div className="text-lg font-medium text-blue-600">Easy</div>
                </button>
                <button
                  onClick={() => setAILevel("Medium")}
                  className={
                    aiLevel !== "Medium" && aiLevel !== null
                      ? "hidden"
                      : "text-center px-1 py-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg"
                  }
                >
                  <div className="text-lg font-medium text-purple-600">
                    Medium
                  </div>
                </button>
                <button
                  onClick={() => setAILevel("Difficult")}
                  className={
                    aiLevel !== "Difficult" && aiLevel !== null
                      ? "hidden"
                      : "text-center px-1 py-2 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg"
                  }
                >
                  <div className="text-lg font-medium text-red-600">
                    Difficult
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3 flex gap-2 ">
              {" "}
              <Clock className="w-6 h-6 text-amber-500" />
              Play Time
            </h3>
            {startGame && playTime ? (
              <Timer
                timeInMinutes={playTime}
                onTimeout={() => setShowTimeOut(true)}
              />
            ) : (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 items-center ">
                  {gameTime.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => setPlayTime(time)}
                      className={
                        playTime !== time && playTime !== null
                          ? "hidden"
                          : "text-center px-3 py-2 bg-gradient-to-br from-pink-50 to-blue-50 rounded-lg"
                      }
                    >
                      <div className="text-lg font-medium text-yellow-600">
                        {time} min
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="">
            <button
              disabled={!playTime}
              onClick={handleGameState}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {startGame ? "End Game" : "Start Game"}
            </button>
            {showConfirmation && (
              <div>
                <p className="text-red-600 font-semibold text-sm mt-4 ">
                  Are you sure you want to end the game?
                </p>
                <div className="flex gap-5 items-center  w-full mt-3 justify-center ">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="w-16 py-2 bg-primary-500 text-white font-medium text-center rounded-md "
                  >
                    No
                  </button>
                  <button
                    onClick={() => {
                      setShowTimeOut(false);
                      setShowConfirmation(false);
                      endGame();
                    }}
                    className="w-16 text-center py-2 bg-red-600 text-white font-medium rounded-md "
                  >
                    Yes
                  </button>
                </div>
              </div>
            )}
            {!startGame && (
              <p className="text-red-600 font-semibold text-sm mt-2 ">
                Please select a level and play time to start.
              </p>
            )}
          </div>

          {/* <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              Time Control Presets
            </h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="font-medium text-gray-800">preset.name</span>
                <span className="text-sm text-gray-600">preset.time</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Speed;
