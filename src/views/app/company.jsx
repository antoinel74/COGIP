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
            name={companyData.name}
            tva={companyData.tva}
            country={companyData.country}
            type={companyData.type}
          />
          <span className="border-t block border-gray-200 w-full my-12"></span>
        </div>
      ) : (
        <div>Company not found !</div>
      )}
    </section>
  );
};
