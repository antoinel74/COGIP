import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";
import { fetchAllData } from "../../helpers/api/fetchAllData";

export const Company = () => {
  const { companiesId } = useParams();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const companies = await fetchAllData("companies");
        const company = companies.find(
          (company) => company.id === parseInt(companiesId)
        );
        setCompanyData(company);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAllCompanies();
  }, [companiesId]);

  return (
    <section>
      <Divider />
      {companyData ? (
        <div className="mt-4 py-10 p-6 md:p-12">
          <Title title={companyData.name} />
          <List
            label1="Name"
            label2="TVA"
            label3="Country"
            label4="Type"
            data1={companyData.name}
            data2={companyData.tva}
            data3={companyData.country}
            data4={companyData.type}
          />
          <div className="border-t border-gray-100 my-6">
            <h2 className="text-3xl md:text-4xl font-extrabold my-6">
              Contact People
            </h2>
          </div>
        </div>
      ) : (
        <div>Company not found !</div>
      )}
    </section>
  );
};
