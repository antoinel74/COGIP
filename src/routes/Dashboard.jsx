import React from "react";
import { DashboardNav } from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="bg-slate-100 min-h-screen py-6 w-full">
      <DashboardNav />
      <div className="px-6 w-5/6 ml-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
