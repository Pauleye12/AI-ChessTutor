import React from "react";
import {
  Brain,
  BookOpen,
  Target,
  Eye,
  AlertTriangle,
  Clock,
  Shield,
  Trophy,
  Timer,
  Zap,
} from "lucide-react";
import DashboardCard from "./FeatureCards";
import Link from "next/link";

const featureDetails = [
  {
    title: "Game Analysis",
    description: "Review your recent games with AI insights",
    icon: Brain,
    color: "bg-primary-500",
    progress: 75,
    link: "/analysis",
  },
  {
    title: "Opening Trainer",
    description: "Master your opening repertoire",
    icon: BookOpen,
    color: "bg-secondary-500",
    progress: 45,
    link: "/openings",
  },
  {
    title: "Tactics Training",
    description: "Solve puzzles and improve pattern recognition",
    icon: Target,
    color: "bg-green-500",
    progress: 60,
    link: "/tactics",
  },
  {
    title: "Board Visualization",
    description: "Enhance your calculation abilities",
    icon: Eye,
    color: "bg-indigo-500",
    progress: 30,
    link: "/visualization",
  },
  {
    title: "Blunder Prevention",
    description: "Real-time move analysis and warnings",
    icon: AlertTriangle,
    color: "bg-rose-500",
    progress: 85,
    link: "/blunders",
  },
  {
    title: "Time Management",
    description: "Improve your clock handling skills",
    icon: Clock,
    color: "bg-amber-500",
    progress: 40,
    link: "/time-management",
  },
];

export default function Dashboard() {
  return (
    <main className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl gradient-text mb-2">Welcome back, Player</h2>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
            Rating: 1850
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">Last Session: 2 hours ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureDetails.map((feature, index) => (
          <Link key={index} href={`/learn${feature.link}`}>
            <DashboardCard {...feature} />
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Active Learning Paths
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Defense Mastery",
              icon: Shield,
              progress: 45,
              color: "bg-teal-500",
            },
            {
              title: "Endgame Excellence",
              icon: Trophy,
              progress: 30,
              color: "bg-pink-500",
            },
            {
              title: "Speed Chess",
              icon: Timer,
              progress: 65,
              color: "bg-amber-500",
            },
            {
              title: "Pattern Recognition",
              icon: Zap,
              progress: 80,
              color: "bg-cyan-500",
            },
          ].map((path, index) => (
            <button
              key={index}
              className="glass-card rounded-xl p-4 hover-scale"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${path.color} bg-opacity-10`}>
                  <path.icon
                    className={`w-5 h-5 ${path.color.replace("bg-", "text-")}`}
                  />
                </div>
              </div>
              <h4 className="font-medium text-gray-800">{path.title}</h4>
              <div className="mt-2 bg-gray-100 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${path.color}`}
                  style={{ width: `${path.progress}%` }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
