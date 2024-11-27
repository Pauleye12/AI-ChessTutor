"use client";
import React, { useState } from "react";
import Chessground from "@react-chess/chessground";
import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";
import { Chess, Square } from "chess.js";

const ChessUI = () => {
  const [game] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [turnColor, setTurnColor] = useState<"white" | "black">("white");

  const handleMove = (from: string, to: string) => {
    const move = game.move({ from, to });
    if (move) {
      setFen(game.fen());
      setTurnColor(game.turn() === "w" ? "white" : "black");

      if (game.isCheckmate()) {
        alert("Checkmate! Game over.");
      } else if (game.isDraw()) {
        alert("Draw! Game over.");
      }
    } else {
      console.log("Invalid move");
    }
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
  );
};

export default ChessUI;
