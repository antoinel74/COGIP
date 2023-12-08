import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../assets/data.json";
import { List } from "../../components/List";

export const Company = () => {
  const { companiesId } = useParams();
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    console.log(jsonData);
    const companies = jsonData.companies[0].data;
    const company = companies.find(
      (company) => company.id === parseInt(companiesId)
    );
    setCompanyData(company);
  }, [companiesId]);

  console.log(companyData);

  return (
    <div>
      {companyData ? (
        <List
          name={companyData.name}
          tva={companyData.tva}
          country={companyData.country}
          type={companyData.type}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
