import React from "react";
import { DashboardNav } from "../../components/DashboardNav";
import { DashboardHero } from "../../components/DashboardHero";
import { Card } from "../../components/Card";

export const DashboardHome = () => {
  return (
    <>
      <div>
        <DashboardNav />
        <div className="p-8">
          <DashboardHero name="Henry" url="Dashboard/" />
          <Card cardType="pile" />
          <Card cardType="table" dataType="companies" />
          <Card cardType="table" dataType="contacts" />
          <Card cardType="table" dataType="invoices" />
        </div>
      </div>
    </>
  );
};
