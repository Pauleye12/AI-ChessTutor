"use client";

import React, { useEffect, useState } from "react";

// interface TimerProps {
//   timeInMinutes: number;
//   onTimeout: () => void;
// }

const Timer = ({
  timeInMinutes,
  onTimeout,
}: {
  timeInMinutes: number;
  onTimeout: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(timeInMinutes * 60); // Convert minutes to seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // Clear the timer when time reaches 0
          onTimeout(); // Call the timeout handler
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Decrement every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [onTimeout]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="timer pl-2">
      <p className=" text-yellow-600 font-semibold text-lg ">
        {formatTime(timeLeft)}
      </p>
    </div>
  );
};

export default Timer;
