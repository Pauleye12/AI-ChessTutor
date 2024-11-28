"use client";
import React from "react";
import {
  Crown,
  Layout,
  BookOpen,
  Target,
  Trophy,
  History,
  Settings,
  HelpCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSidebar({
  showSideBar,
  setShowSideBar,
}: {
  showSideBar: boolean;
  setShowSideBar: (value: boolean) => void;
}) {
  const menuItems = [
    { icon: Layout, label: "dashboard", active: true },
    { icon: BookOpen, label: "learn" },
    { icon: Target, label: "practice" },
    { icon: Trophy, label: "challenges" },
    { icon: History, label: "history" },
  ];

  const pathName = usePathname();
  const handleCloseSideBar = () => setShowSideBar(false);
  return (
    <div
      className={`w-72 lg:hidden bg-white  lg:glass-card fixed h-screen left-0 top-0 z-50 border-r border-gray-200/50 flex flex-col transition-all duration-300 ${
        showSideBar ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="p-6 relative ">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500">
            <Crown className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl gradient-text">ChessMentor AI</span>
        </div>
        <div
          onClick={handleCloseSideBar}
          className="absolute lg:hidden right-1 top-1/2 -translate-y-1/2 "
        >
          <X className="w-8 h-8 text-indigo-600" />
        </div>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item, index) => (
          <Link
            href={`/${item.label}`}
            onClick={handleCloseSideBar}
            key={index}
            className={`w-full capitalize flex items-center space-x-3 px-4 py-3 rounded-xl mb-1 
              ${
                pathName.includes(item.label)
                  ? "bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4">
        <div className="rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 p-[1px]">
          <div className="bg-white rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-2">Premium Features</h4>
            <p className="text-sm text-gray-600 mb-3">
              Unlock advanced analysis and personalized coaching
            </p>
            <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg py-2 text-sm font-medium hover:opacity-90 transition-opacity">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200/50">
        <div className="flex items-center justify-between text-gray-600">
          <button className="p-2 hover:bg-gray-100 rounded-xl">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-xl">
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
