"use client";
import React, { useState } from "react";
import { Bell, Search, Logs } from "lucide-react";
// import Sidebar from "./Sidebar";
import MobileSidebar from "./MobleSideBar";

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="w-full flex justify-center items-center lg:pl-[300px]  left-0 fixed  top-0 z-10 backdrop-blur-md bg-white/80">
      <header className="bg-white/80 max-w-[1200px] w-full backdrop-blur-md border-b border-gray-200/50 px-6 py-4 ">
        <div className="flex h-full items-center justify-between">
          <div
            className=" lg:hidden h-full flex justify-center items-center  "
            onClick={() => setShowSideBar(true)}
          >
            <Logs className="w-8 h-8 text-blue-600" />
          </div>
          <div className=" hidden lg:inline-block flex-1 ">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Search lessons, tactics..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-xl relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-sm font-medium text-gray-700">Profile</span>
            </button>
          </div>
        </div>
      </header>
      <MobileSidebar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
    </div>
  );
}
