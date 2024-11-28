import React from "react";
import { Book, ChevronRight, Trophy, Star, RotateCcw } from "lucide-react";

import ChessUI from "@/components/ChessUI";

export default function OpeningTrainer() {
  return (
    <div className="h-full flex flex-col pb-16 ">
      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-gray-800">Opening Trainer</h1>
        <p className="text-gray-600">
          Master your opening repertoire with AI guidance
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-6  lg:p-6">
        <div className="col-span-2 flex flex-col justify-center items-center space-y-6">
          {/* Interactive Training Board */}
          <div className="glass-card p-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Sicilian Defense: Dragon Variation
                </h2>
                <p className="text-gray-600">Training Mode: White to move</p>
              </div>
              <button className="flex  w-fit items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                <RotateCcw className="w-4 h-4" />
                <span>Reset Position</span>
              </button>
            </div>
            <div className="aspect-square w-full lg:h-[600px] pt-4 lg:pt-0 glass-card">
              <ChessUI />
            </div>
          </div>

          {/* Move History */}
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Move History</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { move: "1. e4", comment: "Controls central squares" },
                { move: "1...c5", comment: "The Sicilian Defense" },
                { move: "2. Nf3", comment: "Develops knight, controls e5" },
                { move: "2...d6", comment: "Prepares for Dragon setup" },
              ].map((entry, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg"
                >
                  <span className="font-mono text-sm text-gray-500">
                    {entry.move}
                  </span>
                  <span className="text-sm text-gray-700">{entry.comment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gap-9  flex  flex-col justify-star">
          {/* Opening Explorer */}
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Opening Explorer</h3>
            <div className="space-y-3">
              {[
                { name: "Main Line", winRate: "54%", popularity: "Very High" },
                { name: "Yugoslav Attack", winRate: "58%", popularity: "High" },
                {
                  name: "Classical Line",
                  winRate: "51%",
                  popularity: "Medium",
                },
              ].map((line, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <Book className="w-4 h-4 text-primary-500" />
                      <span className="font-medium text-gray-800">
                        {line.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Win Rate: {line.winRate} • {line.popularity}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Training Progress */}
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Training Progress</h3>
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Mastery Level</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= 3 ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill={star <= 3 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-primary-500 to-secondary-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">127</div>
                  <div className="text-sm text-gray-600">Positions Learned</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">
                    85%
                  </div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
