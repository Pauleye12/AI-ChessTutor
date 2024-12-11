import React from "react";
import { AlertTriangle, Zap, Shield, CheckCircle, XCircle } from "lucide-react";

import ChessUI from "@/components/ChessUI";
import Back from "@/components/Back";

const mistakes = [
  {
    name: "Unprotected Pieces",
    icon: Shield,
    color: "text-red-500",
  },
  {
    name: "Weak King Safety",
    icon: AlertTriangle,
    color: "text-amber-500",
  },
  { name: "Missed Tactics", icon: Zap, color: "text-indigo-500" },
];

export default function BlunderPrevention() {
  return (
    <div className="h-full flex flex-col pb-16 ">
      <div className="p-6 border-b border-gray-200/50 flex gap-7 items-center ">
        <div className="px-4 ">
          <Back />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Blunder Prevention
          </h1>
          <p className="text-gray-600">
            Real-time analysis and move validation
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:p-6">
        <div className="col-span-2 space-y-6">
          <div className="glass-card p-4 lg:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Live Game Analysis
                </h2>
                <p className="text-gray-600">AI is monitoring your moves</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600">
                  Active
                </span>
              </div>
            </div>
            <div className="w-full  glass-card">
              <ChessUI />
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Move Analysis</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Strong Move
                  </p>
                  <p className="text-sm text-gray-600">
                    Nf3 controls central squares and develops a piece
                  </p>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Warning: Potential Blunder
                  </p>
                  <p className="text-sm text-gray-600">
                    Be careful! This move leaves your king exposed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-9  flex  flex-col justify-start">
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Prevention Stats</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Blunder Rate
                  </span>
                  <span className="font-mono text-sm font-bold text-blue-600">
                    3.2%
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full w-[3.2%] bg-gradient-to-r from-blue-500 to-indigo-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-sm text-gray-600">
                    Blunders Prevented
                  </div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">98%</div>
                  <div className="text-sm text-gray-600">Detection Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Common Mistakes</h3>
            <div className="space-y-2">
              {mistakes.map((mistake, i) => (
                <button
                  key={i}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <mistake.icon className={`w-5 h-5 ${mistake.color}`} />
                  <span className="font-medium text-gray-800">
                    {mistake.name}
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
