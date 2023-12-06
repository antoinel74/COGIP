import React from "react";
import { DashboardNav } from "../components/dashboardNav";
import { DashboardHero } from "../components/DashboardHero";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main>
      <DashboardNav />
      <Outlet />
    </main>
  );
};

export default Dashboard;
