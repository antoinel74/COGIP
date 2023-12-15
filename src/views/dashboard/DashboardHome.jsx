import React from "react";
import { Card } from "../../components/Card";
import { DashboardHero } from "../../components/DashboardHero";

export const DashboardHome = () => {
  return (
    <>
      <DashboardHero name="Henry" url="Dashboard/" />
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          <Card cardType="pile" />
          <Card cardType="table" dataType="companies" />
        </div>
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          <Card cardType="table" dataType="contacts" />
          <Card cardType="table" dataType="invoices" />
        </div>
      </div>
    </>
  );
};
