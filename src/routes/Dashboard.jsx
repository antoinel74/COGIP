import React from "react";
import { DashboardNav } from "../components/DashboardNav";
import { DashboardHero } from "../components/DashboardHero";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="bg-slate-100">
      <DashboardNav />
      <DashboardHero name="Henry" url="Dashboard/" />
      <div className="relative w-5/6 ml-auto right-0 mb-4">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
