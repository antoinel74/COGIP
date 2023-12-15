import React from "react";
import Hero from "../../components/Hero";
import { Divider } from "../../components/Divider";
import { Table2 } from "../../components/Table2";

const Home = () => {
  return (
    <div className="w-full">
      <Hero text="MANAGE YOUR CUSTOMERS AND INVOICES EASILY" img="/img/manager-1.png" yellowBg={true} />
      <Divider />
      <div className="mx-6">
        <Table2 pageType="application" dataType="invoices" />
        <figure className="w-full">
          <img src="/img/small-manager-1.png" className="h-[80px] md:h-[100px] w-auto ml-auto -mr-6" />
        </figure>
      </div>
      <div className="mx-6">
        <Table2 pageType="application" dataType="contacts" />
        <figure className="w-full">
          <img src="/img/small-manager-2.png" className="h-[80px] md:h-[100px] w-auto mr-auto -ml-6" />
        </figure>
      </div>
      <div className="mx-6">
        <Table2 pageType="application" dataType="companies" />
      </div>
      <Hero text="WORK BETTER IN YOUR COMPANY" img="/img/manager-2.png" yellowBg={false} />
    </div>
  );
};

export default Home;
