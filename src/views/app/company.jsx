import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";
import { useShowCompanyStore } from "../../helpers/store/useShowCompanyStore";
import { Loader } from "../../components/Loader";
import { Card } from "../../components/Card";

export const Company = () => {
  const { companyId } = useParams();
  const { companyDetails, fetchCompanyById } = useShowCompanyStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      await fetchCompanyById(companyId);
      setLoading(false);
    };
    fetchCompany();
  }, [companyId, fetchCompanyById]);

  console.log(companyDetails);

  return (
    <section>
      <Divider />
      {loading ? (
        <Loader />
      ) : companyDetails ? (
        <div className="mt-4 py-10 p-6 md:p-12">
          <Title title={companyDetails.Companies.name} uppercase={true} />
          <List
            label1="Name"
            label2="TVA"
            label3="Country"
            label4="Type"
            data1={companyDetails.Companies.name}
            data2={companyDetails.Companies.tva}
            data3={companyDetails.Companies.country}
            data4={companyDetails.Companies.type_name}
          />
          <div className="border-t border-gray-100 my-6">
            <h2 className="text-3xl md:text-4xl font-extrabold my-6">
              Contact People
            </h2>
            <Card />
          </div>
        </div>
      ) : (
        <div>Company not found !</div>
      )}
    </section>
  );
};
