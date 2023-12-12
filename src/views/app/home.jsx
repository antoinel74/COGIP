import React from "react";
import Hero from "../../components/Hero";
import { Divider } from "../../components/Divider";
import { Table } from "../../components/Table";
import { List } from "../../components/List";
import { Table2 } from "../../components/Table2";


const Home = () => {

  return (
    <div className="w-full">
      <Hero
        text="MANAGE YOUR CUSTOMERS AND INVOICES EASILY"
        img="/img/manager-1.png"
        yellowBg={true}
      />
      <Divider />
      <div className="mx-6">
        <Table title="Last invoices" />
      </div>
      <Table2 pageType="application" dataType="invoices" />
      <Hero
        text="WORK BETTER IN YOUR COMPANY"
        img="/img/manager-2.png"
        yellowBg={false}
      />
      <List
        name="Jean-Kriss"
        tva="0918392"
        country="Belgistan"
        type="Supplier"
      />
    </div>
  );
};

export default Home;
