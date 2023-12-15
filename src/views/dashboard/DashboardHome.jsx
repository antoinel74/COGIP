import React from "react";
import { Card } from "../../components/Card";
import { DashboardHero } from "../../components/DashboardHero";

export const DashboardHome = () => {
  return (
    <>
      <DashboardHero name="Henry" url="Dashboard/" />
      <div className="flex flex-wrap gap-4 py-4 relative w-5/6 ml-auto right-0">
        <Card cardType="pile" />
        <Card cardType="table" dataType="company" />
        <Card cardType="table" dataType="contact" />
        <Card cardType="table" dataType="invoices" />
      </div>
    </>
  );
};
