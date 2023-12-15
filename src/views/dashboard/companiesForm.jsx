import React from "react";
import { DashboardHero } from "../../components/DashboardHero";
import { Card } from "../../components/Card";

export const CompaniesForm = () => {
  return (
    <div>
      <DashboardHero name="Henry" url="Dashboard/new-company" />
      <Card cardType="form" formType={"company"}/>
    </div>
  );
};
