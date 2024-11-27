"use client";
import React from "react";
import { Clock, Timer, Activity, BarChart3 } from "lucide-react";

import ChessUI from "@/components/ChessUI";

export default function TimeManagement() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-gray-800">Time Management</h1>
        <p className="text-gray-600">Improve your clock handling skills</p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6 p-6">
        <div className="col-span-2 space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Time Pressure Simulation
                </h2>
                <p className="text-gray-600">
                  Practice managing your time in critical positions
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-amber-500" />
                <span className="text-2xl font-mono font-bold text-amber-500">
                  0:45
                </span>
              </div>
            </div>
            <div className="aspect-square h-[600px] glass-card p-4">
              <ChessUI />
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              Time Usage Analysis
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Average Move Time
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-600">
                    12.5s
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-amber-500 to-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">Time Control Stats</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Time Efficiency</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">32</div>
                  <div className="text-sm text-gray-600">Games Analyzed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              Time Management Tips
            </h3>
            <div className="space-y-3">
              {[
                { tip: "Use opponent's time wisely", icon: Timer },
                { tip: "Plan ahead in complex positions", icon: Activity },
                { tip: "Reserve time for endgame", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-2">
                  <item.icon className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm text-gray-700">{item.tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="font-bold text-gray-800 mb-3">
              Time Control Presets
            </h3>
            <div className="space-y-2">
              {[
                { name: "Bullet (1+0)", time: "1 min" },
                { name: "Blitz (3+2)", time: "3 min" },
                { name: "Rapid (10+5)", time: "10 min" },
              ].map((preset, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="font-medium text-gray-800">
                    {preset.name}
                  </span>
                  <span className="text-sm text-gray-600">{preset.time}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
