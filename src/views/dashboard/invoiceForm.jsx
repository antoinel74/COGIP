import React from "react";
import { DashboardNav } from "../../components/DashboardNav";
import { DashboardHero } from "../../components/DashboardHero";
import { Form } from "../../components/Form";

export const InvoicesForm = () => {
  return (
    <div>
      <DashboardHero name="Henry" url="Dashboard/new-invoice" />
      <Form formType={"invoice"} />
    </div>
  );
};
