import { useState, useEffect } from "react";
import { fetchAllDatas } from "./fetchAllDatas";

const allCompanies = () => {
  const [allCompaniesDetails, setAllCompaniesDetails] = useState(null);

  const fetchAllCompanies = async () => {
    let currentPage = 1;
    let totalPages = 1;
    let fetchedCompanies = [];

    while (currentPage <= totalPages) {
      const details = await fetchAllDatas({
        dataType: "companies",
        options: `/?page=${currentPage}`,
      });

      fetchedCompanies = [...fetchedCompanies, ...details.data.companies];
      totalPages = details.data.pagination.totalPages;
      currentPage++;
    }

    setAllCompaniesDetails({ companies: fetchedCompanies });
  };

  useEffect(() => {
    fetchAllCompanies();
  }, []);

  return { allCompaniesDetails, fetchAllCompanies };
};

export { allCompanies };
