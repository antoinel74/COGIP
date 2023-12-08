import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import jsonData from "../../assets/data.json";
import { Divider } from "../../components/Divider";
import { Title } from "../../components/Title";

export const Company = () => {
  const { companiesId } = useParams();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchAllCompanies = async () => {
      let companies = [];
      for (let page of jsonData.companies) {
        const data = page.data;
        companies = companies.concat(data);
      }
      const company = companies.find(
        (company) => company.id === parseInt(companiesId)
      );
      setCompanyData(company);
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
        </div>
      ) : (
        <div>Company not found !</div>
      )}
    </section>
  );
};
