import React from "react";
import { DashboardNav } from "../../components/DashboardNav";
import { DashboardHero } from "../../components/DashboardHero";
import { Form } from "../../components/Form";

export const InvoicesForm = () => {
  return (
    <div>
      <DashboardNav />
      <div className="p-8">
        <DashboardHero name="Henry" url="dashboard/new-invoice" />
        <Form />
      </div>
    </div>
  );
};
