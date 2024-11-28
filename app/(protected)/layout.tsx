"use client";

import Header from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function SecondaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="secondary-layout overflow-x-hidden pt-[80px] lg:pl-[280px] min-h-screen h-full px-6">
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
