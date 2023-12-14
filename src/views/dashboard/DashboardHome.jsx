import React from "react";
import { Card } from "../../components/Card";

export const DashboardHome = () => {
  return (
    <>
      <Card cardType="pile" />
      <Card cardType="table" dataType="companies" />
      <Card cardType="table" dataType="contacts" />
      <Card cardType="table" dataType="invoices" />
    </>
  );
};
