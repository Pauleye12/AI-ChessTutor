import React from "react";
import {
  Brain,
  BookOpen,
  Target,
  Eye,
  AlertTriangle,
  Clock,
} from "lucide-react";
import DashboardCard from "../dashboard/FeatureCards";
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

export default function Learn() {
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
    </main>
  );
}
