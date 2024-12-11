"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button
      className="text-gray-800 flex items-center gap-2 text-xl font-medium "
      onClick={handleBackClick}
    >
      <MoveLeft className="text-purple-600" />
    </button>
  );
};

export default Back;
