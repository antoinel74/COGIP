import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero";
import { Divider } from "../../components/Divider";
import { Table2 } from "../../components/Table2";
import { Loader } from "../../components/Loader";
import { useTableStore } from "../../helpers/store/useTableStore";
const Home = () => {
  const { lastInvoices, lastCompanies, lastContacts, fetchLastData } = useTableStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchLastData("invoices");
      setLoading(false);
    };

    fetchData();
  }, [fetchLastData]);
  console.log(lastInvoices);

  return (
    <div className="w-full">
      <Hero
        text="MANAGE YOUR CUSTOMERS AND INVOICES EASILY"
        img="/img/manager-1.png"
        yellowBg={true}
      />
      <Divider />
      <div className="mx-6">
        {loading ? <Loader /> : <Table2 data={lastInvoices}
        pageType="application" dataType="invoices" />}
      </div>
      <Hero
        text="WORK BETTER IN YOUR COMPANY"
        img="/img/manager-2.png"
        yellowBg={false}
      />
    </div>
  );
};

export default Home;
