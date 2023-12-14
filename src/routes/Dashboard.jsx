import React from "react";
import { DashboardNav } from "../components/DashboardNav";
import { DashboardHero } from "../components/DashboardHero";
import { Outlet, useRoutes, useLocation } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="bg-slate-100 min-h-screen py-6">
      <DashboardNav />
      <div className="px-6">
        {" "}
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
