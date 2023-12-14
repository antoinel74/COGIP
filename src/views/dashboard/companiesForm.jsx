import React from "react";
import { DashboardHero } from "../../components/DashboardHero";
import { Form } from "../../components/Form";

export const CompaniesForm = () => {
  return (
    <div>
      <DashboardHero name="Henry" url="Dashboard/new-company" />
      <Form formType={"company"} />
    </div>
  );
};
