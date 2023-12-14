import React from "react";
import { DashboardNav } from "../../components/DashboardNav";
import { DashboardHero } from "../../components/DashboardHero";
import { Form } from "../../components/Form";

export const InvoicesForm = () => {
  return (
    <div>
      <Form formType={"invoice"} />
    </div>
  );
};
