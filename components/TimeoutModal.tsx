"use client";
import React from "react";
import { X } from "lucide-react";

const TimeoutModal = ({
  setShowTimeOut,
  handleEndGame,
}: {
  setShowTimeOut: (value: boolean) => void;
  handleEndGame: () => void;
}) => {
  return (
    <div className="absolute h-full top-0 left-0 w-full z-50 flex justify-center bg-[#ffffff9b] items-center ">
      <div className="py-8 px-7 max-w-[300px] w-full bg-gray-50 rounded-md flex flex-col items-center relative ">
        <h1>Time Out!!!</h1>
        <button
          onClick={() => {
            setShowTimeOut(false);
            handleEndGame();
          }}
          className="absolute right-3 top-2 "
        >
          <X className="text-red-600 font-semibold w-14 " />
        </button>
      </div>
    </div>
  );
};

export default TimeoutModal;
