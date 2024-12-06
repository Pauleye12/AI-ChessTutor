"use client";
import React, { useState } from "react";
import Chessground from "@react-chess/chessground";
import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";
import { Chess, Square } from "chess.js";
import { RedoDot, UndoDot, RotateCcw } from "lucide-react";

const ChessUI = () => {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [turnColor, setTurnColor] = useState<"white" | "black">("white");
  const [history, setHistory] = useState<string[]>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(-1);

  const handleMove = (from: string, to: string) => {
    const move = game.move({ from, to });
    if (move) {
      setFen(game.fen());
      setTurnColor(game.turn() === "w" ? "white" : "black");
      setHistory((prev) => [
        ...prev.slice(0, currentMoveIndex + 1),
        game.fen(),
      ]);
      setCurrentMoveIndex((prev) => prev + 1);

      if (game.isCheckmate()) {
        alert("Checkmate! Game over.");
      } else if (game.isDraw()) {
        alert("Draw! Game over.");
      }
    } else {
      console.log("Invalid move");
    }
  };

  const undoMove = () => {
    if (currentMoveIndex > 0) {
      setCurrentMoveIndex((prev) => prev - 1);
      const previousFen = history[currentMoveIndex - 1];
      game.load(previousFen);
      setFen(previousFen);
      setTurnColor(game.turn() === "w" ? "white" : "black");
    }
  };

  const redoMove = () => {
    if (currentMoveIndex < history.length - 1) {
      setCurrentMoveIndex((prev) => prev + 1);
      const nextFen = history[currentMoveIndex + 1];
      game.load(nextFen);
      setFen(nextFen);
      setTurnColor(game.turn() === "w" ? "white" : "black");
    }
  };

  const resetGame = () => {
    game.reset();
    setFen(game.fen());
    setTurnColor("white");
    setHistory([]);
    setCurrentMoveIndex(-1);
  };

  const getDests = () => {
    const dests = new Map<Square, Square[]>();
    const board = game.board();

    board.forEach((row, rowIndex) => {
      row.forEach((piece, colIndex) => {
        if (piece) {
          const square = `${String.fromCharCode(97 + colIndex)}${
            8 - rowIndex
          }` as Square;
          const moves = game.moves({ square, verbose: true });
          if (moves.length) {
            dests.set(
              square,
              moves.map((move) => move.to)
            );
          }
        }
      });
    });

    return dests;
  };

  return (
    <>
      <div className="aspect-square lg:h-[600px] pt-4 lg:pt-0 ">
        <Chessground
          contained={true}
          config={{
            fen: fen,
            turnColor: turnColor,
            coordinates: true,
            movable: {
              free: false,
              color: turnColor,
              dests: getDests(),
            },
            events: {
              move: handleMove,
            },
          }}
        />
      </div>
      <div className=" my-4 ml-3 flex gap-5 items-center flex-wrap ">
        <button
          className="py-2 flex gap-2 items-center px-3 text-blue-600 "
          onClick={undoMove}
        >
          <UndoDot />
          Undo
        </button>
        <button
          className="py-2 flex gap-2 items-center px-3 text-yellow-600 "
          onClick={redoMove}
        >
          <RedoDot />
          Redo
        </button>
        <button
          className="py-2 flex gap-2 items-center px-3 text-red-600 "
          onClick={resetGame}
        >
          <RotateCcw />
          Reset
        </button>
      </div>
    </>
  );
};

export default ChessUI;
