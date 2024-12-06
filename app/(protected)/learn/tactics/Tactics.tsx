import React from "react";
import { Target, Clock, Trophy, Brain } from "lucide-react";

import ChessUI from "@/components/ChessUI";
const suggestedThemes = [
  { name: "Double Attack", icon: Target, color: "text-rose-500" },
  {
    name: "Back Rank Mate",
    icon: Trophy,
    color: "text-amber-500",
  },
  {
    name: "Discovered Attack",
    icon: Brain,
    color: "text-indigo-500",
  },
];
export default function TacticsTrainer() {
  return (
    <div className="h-full flex flex-col pb-16 ">
      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-gray-800">Tactics Training</h1>
        <p className="text-gray-600">
          Improve your tactical vision and calculation skills
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:p-6">
        <div className="col-span-2 space-y-6">
          <div className="glass-card p-4 lg:p-6 ">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Puzzle #247</h2>
                <p className="text-gray-600">Find the winning combination</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="text-lg font-mono">2:45</span>
              </div>
            </div>
            <div className=" w-full  glass-card">
              <ChessUI />
            </div>
          </div>
        </div>

        <div className="gap-9  flex  flex-col justify-start">
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Puzzle Information</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Difficulty
                </span>
                <span className="px-2 py-1 bg-amber-500 text-white text-sm font-medium rounded">
                  1850
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Theme</span>
                <span className="text-sm font-medium text-indigo-600">
                  Pin & Fork
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Daily Progress</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-sm text-gray-600">Puzzles Solved</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">87%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Suggested Themes</h3>
            <div className="space-y-2">
              {suggestedThemes.map((theme, i) => (
                <button
                  key={i}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <theme.icon className={`w-5 h-5 ${theme.color}`} />
                  <span className="font-medium text-gray-800">
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
