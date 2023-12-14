import { useState, useEffect } from "react";
import { fetchAllDatas } from "../api/fetchAllDatas";

const useShowCompanyStore = () => {
  const [companyDetails, setCompanyDetails] = useState(null);

  const fetchCompanyById = async (companyId) => {
    try {
      const details = await fetchAllDatas({
        dataType: "companies",
        options: `/${companyId}/show`,
      });
      setCompanyDetails(details);
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  return { companyDetails, fetchCompanyById };
};

export { useShowCompanyStore };
