import React from "react";
import { Eye, Brain, Target, Award } from "lucide-react";
import Back from "@/components/Back";
// import Image from "next/image";
const exerciseTypes = [
  {
    name: "Piece Movement",
    icon: Target,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Square Control",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Full Games",
    icon: Award,
    color: "from-emerald-500 to-green-500",
  },
];
export default function BoardVisualization() {
  return (
    <div className="h-full flex flex-col pb-16 ">
      <div className="p-6 border-b border-gray-200/50 flex gap-7 items-center">
        <div className="px-7 ">
          <Back />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Board Visualization
          </h1>
          <p className="text-gray-600">
            Train your mind&apos;s eye and calculation abilities
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:p-6">
        <div className="col-span-2 space-y-6">
          <div className="glass-card p-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Visualization Challenge
                </h2>
                <p className="text-gray-600">
                  Calculate the position after: 1.e4 e5 2.Nf3 Nc6
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg">
                Reveal Position
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <Eye className="w-16 h-16 text-gray-400" />
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Exercise Types</h3>
            <div className="grid  lg:grid-cols-3 gap-4">
              {exerciseTypes.map((exercise, i) => (
                <button
                  key={i}
                  className="p-4 bg-gradient-to-r from-blue-400 to-indigo-400 hover:opacity-90 transition-opacity  rounded-lg"
                >
                  <exercise.icon className="w-6 h-6 mb-2" />
                  <span className="font-medium">{exercise.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="gap-9  flex  flex-col justify-start">
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Training Stats</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Accuracy
                  </span>
                  <span className="font-mono text-sm font-bold text-indigo-600">
                    92%
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-indigo-500 to-purple-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">45</div>
                  <div className="text-sm text-gray-600">Exercises Done</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    Level 4
                  </div>
                  <div className="text-sm text-gray-600">Current Rank</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Training Schedule</h3>
            <div className="space-y-3">
              {[
                "Basic Piece Movement",
                "Knight Path Calculation",
                "Pawn Structure Visualization",
                "Complete Game Replay",
              ].map((task, i) => (
                <div key={i} className="flex items-center space-x-3 p-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <span className="text-sm text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
