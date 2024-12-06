"use client";

import { Swords, Users, Dumbbell, Zap, Trophy } from "lucide-react";
import React from "react";
import Link from "next/link";
import DashboardCard from "../dashboard/FeatureCards";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/practice/play-ai">
          <DashboardCard
            title="Play vs AI"
            description="Challenge adaptive AI opponents at your level"
            icon={Swords}
            color="bg-emerald-500"
            progress={false}
          />
        </Link>

        <Link href="/practice/play-human">
          <DashboardCard
            title="Play vs Human"
            description="Play against your friend"
            icon={Users}
            color="bg-blue-500"
            progress={false}
          />
        </Link>

        <Link href="/learn">
          <DashboardCard
            title="Practice Drills"
            description="Focused exercises to sharpen specific skills"
            icon={Dumbbell}
            color="bg-indigo-500"
            progress={false}
          />
        </Link>

        <Link href="/practice/speed">
          <DashboardCard
            title="Speed Chess"
            description="Improve your quick thinking and intuition"
            icon={Zap}
            color="bg-amber-500"
            progress={false}
          />
        </Link>

        <Link href="/practice/tournaments">
          <DashboardCard
            title="Tournaments"
            description="Compete in daily and weekly events"
            icon={Trophy}
            color="bg-purple-500"
            progress={false}
          />
        </Link>

        {/* <Link href="/practice/custom">
          <DashboardCard
            title="Custom Practice"
            description="Create specific positions to practice"
            icon={Target}
            color="bg-rose-500"
            progress={false}
          />
        </Link> */}
      </div>
      {/* <div className=" aspect-square p-4 w-full max-w-[600px] gap-6">
        <ChessUI />
      </div> */}
    </main>
  );
}
