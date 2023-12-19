import React from "react";
import { DashboardNav } from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="bg-slate-100 min-h-screen py-6">
      <DashboardNav />
      <div className="px-6 w-[85%] ml-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
