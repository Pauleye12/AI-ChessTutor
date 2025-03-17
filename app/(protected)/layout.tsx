"use client";

import Header from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function SecondaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="secondary-layout overflow-x-hidden pt-[80px] lg:pl-[250px] min-h-screen flex justify-center w-full h-full px-4">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}
