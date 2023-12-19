import React from "react";
import { DashboardHero } from "../../components/DashboardHero";
import { Card } from "../../components/Card";

export const ContactForm = () => {
  return (
    <div>
      <DashboardHero name="Henry" url="Dashboard/new-contact" />
      <Card cardType="form" formType={"contact"} />
    </div>
  );
};
