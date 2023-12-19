import React from "react";
import { DashboardHero } from "../../components/DashboardHero";
import { Card } from "../../components/Card";

export const InvoicesForm = () => {
  return (
    <div>
      <DashboardHero name="Henry" url="Dashboard/new-invoice" />
      <Card cardType="form" formType={"invoice"} />
    </div>
  );
};
