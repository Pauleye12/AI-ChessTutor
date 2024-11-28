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
    <main className="p-6 flex flex-col w-full items-center ">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          Every Move is a Lesson, Every Game a Story
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your chess journey with AI-powered learning paths tailored
          just for you
        </p>
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
