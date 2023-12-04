import React from "react";
import Hero from "../../components/Hero";
import { Divider } from "../../components/Divider";

const Home = () => {
  return (
    <div>
      <Hero
        text="MANAGE YOUR
CUSTOMERS AND 
INVOICES EASLY"
        img="/img/manager-1.png"
        yellowBg={true}
      />
      <Divider />
      <Hero
        text="WORK BETTER 
IN YOUR
COMPANY"
        img="/img/manager-2.png"
        yellowBg={false}
      />
    </div>
  );
};

export default Home;
