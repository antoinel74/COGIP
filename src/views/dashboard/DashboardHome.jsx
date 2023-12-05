import React from "react";
import { DashboardNav } from "../../components/dashboardNav";
import { DashboardHero } from "../../components/DashboardHero";

export const DashboardHome = () => {
  return (
    <div>
      <DashboardNav />
      <DashboardHero name="Henry" url="Dashboard/" />;
    </div>
  );
};
