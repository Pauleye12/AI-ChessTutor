import ChessUI from "@/components/ChessUI";
import React from "react";
// import {
//   Brain,
//   BookOpen,
//   Target,
//   Eye,
//   AlertTriangle,
//   Clock,
// } from "lucide-react";

export default function Practice() {
  return (
    <main className="p-4 flex flex-col w-full items-center ">
      <div className="mb-12 text-center">
        <h1 className="lg:text-4xl text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          Where Theory Meets Mastery, Victory Awaits
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your chess journey with AI-powered learning paths tailored
          just for you
        </p>
      </div>
      <div className=" aspect-square p-4 w-full max-w-[600px] gap-6">
        <ChessUI />
      </div>
    </main>
  );
}
