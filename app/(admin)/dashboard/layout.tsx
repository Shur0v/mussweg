import React from "react";
import Sidebar from "./components/common/sidebar";
import Topbar from "./components/common/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Left: Sidebar stays fixed */}
      <div className="sticky top-0 h-screen shrink-0">
        <Sidebar />
      </div>

      {/* Right: Topbar + scrollable content */}
      <div className="flex flex-col flex-1 min-w-0 h-screen">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
