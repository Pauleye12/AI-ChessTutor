import React from "react";
import {
  // Play,
  // Rewind,
  // FastForward,
  Flag,
  MessageSquare,
  // Share2,
  // Download,
  ChevronRight,
} from "lucide-react";
// import Chessboard from "@/components/ChessUI";

// import Image from "next/image";
// import Chessboard from "@/components/ChessUI";

import ChessUI from "@/components/ChessUI";

export default function GameAnalysis() {
  return (
    <div className="h-full flex flex-col pb-16">
      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-gray-800 text-center ">
          Game Analysis
        </h1>
        <p className="text-gray-600 text-center">
          Detailed AI-powered game review and improvement suggestions
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-6  lg:p-6">
        <div className="col-span-2 flex flex-col justify-center items-center space-y-6">
          {/* Interactive Chess Board */}
          <div className=" w-full glass-card ">
            <ChessUI />
          </div>

          {/* Playback Controls */}
          {/* <div className="glass-card w-full p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Rewind className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Play className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <FastForward className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
            </div>
          </div> */}
        </div>

        <div className="gap-9  flex  flex-col justify-start ">
          {/* AI Analysis */}
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">AI Analysis</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Position Evaluation
                  </span>
                  <span className="font-mono text-sm font-bold text-green-600">
                    +1.4
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-green-500 to-blue-500" />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  White has a slight advantage due to better piece coordination
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Key Moments
                </h4>
                {[
                  { move: 15, type: "Mistake", color: "text-yellow-500" },
                  { move: 23, type: "Blunder", color: "text-red-500" },
                  { move: 31, type: "Brilliant", color: "text-blue-500" },
                ].map((moment, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Flag className={`w-4 h-4 ${moment.color}`} />
                      <span className="text-sm font-medium text-gray-800">
                        Move {moment.move}
                      </span>
                    </div>
                    <span className={`text-sm ${moment.color}`}>
                      {moment.type}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              Improvement Suggestions
            </h3>
            <div className="space-y-3">
              {[
                "Consider developing minor pieces before moving the queen",
                "Control the center with pawns in the opening",
                "Look for tactical opportunities on move 15",
              ].map((suggestion, i) => (
                <div key={i} className="flex items-start space-x-3 p-2">
                  <MessageSquare className="w-4 h-4 text-primary-500 mt-1" />
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
