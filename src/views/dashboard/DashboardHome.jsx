import React from "react";
import { DashboardNav } from "../../components/dashboardNav";
import { DashboardHero } from "../../components/DashboardHero";
import { Form } from "../../components/Form";

export const DashboardHome = () => {
  return (
    <div>
      <DashboardNav />
      <DashboardHero name="Henry" url="Dashboard/" />;
      <Form />
    </div>
  );
};
