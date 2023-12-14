import React, { useEffect, useState } from "react";
import { getDataMap } from "../helpers/api/getDataMap";
import { fetchLastDatas, fetchDataPages } from "../helpers/api/fetchAllDatas";
import { Searchbar } from "./Searchbar";
import { Loader } from "./Loader";

const getHeadersMap = (pageType) => {
  if (pageType === "admin_panel") {
    return {
      companies: ["Name", "Tva", "Country"],
      invoices: ["Invoice Number", "Dates", "Company"],
      contacts: ["Name", "Phone", "Email"],
    };
  } else {
    return {
      companies: ["Name", "Tva", "Country", "Type", "Created At"],
      invoices: ["Invoice number", "Due Dates", "Company", "Created At"],
      contacts: ["Name", "Phone", "Mail", "Company", "Created At"],
    };
  }
};

/**
 * Table component taking a data type, a page number and a title as parameters
 * @param {string} dataType - Data parameter corresponding to "contacts", "invoices", "companies"
 * @param {number} pageNumber - Page number to fetch
 * @param {string} pageType - Page types parameters corresponding to "admin_panel", "application", "show"
 * @returns
 */
export const Table2 = ({ pageType, dataType }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchFunctions = {
    application: fetchLastDatas,
    admin_panel: fetchLastDatas,
    show: fetchDataPages,
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      const fetchFunction = fetchFunctions[pageType];
      const response = page
        ? await fetchFunction(dataType, page)
        : await fetchFunction(dataType);
        console.log(response);
      if (pageType === 'show') {
        setData(response.data[dataType]);
        setPagination(response.data.pagination);
      } else {
        setData(response.data);
      }
      setLoading(false);
    })();
  }, [dataType, pageType, page]);
  

  console.log(data);
  const headersMap = getHeadersMap(pageType);
  const headers = headersMap[dataType] || [];

  const dataMap = getDataMap(pageType);
  const dataKeys = dataMap[dataType] || [];

  return (
    <div
      className={`overflow-x-auto mx-auto flex flex-col ${
        pageType === "admin_panel" ? "max-w-xl" : "max-w-6xl"
      }`}
    >
      <div>
        <h2 className="text-2xl w-full font-extrabold py-6 capitalize">
          {pageType === "show" ? "all" : "last"} {dataType}
        </h2>
      </div>
      {pageType === "admin_panel" && (
        <span className="border-t block border-solid border-black w-11/12 mb-4 mt-2"></span>
      )}
      {pageType === "show" && <Searchbar />}
      <table className="min-w-full table-fixed">
        <thead
          className={
            pageType === "application" || pageType === "show"
              ? "bg-[#f9de4e]"
              : ""
          }
        >
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {loading ? (
  <Loader /> 
) : (
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={
                pageType === "application" || pageType === "show"
                  ? index % 2 === 1
                    ? "bg-gray-200"
                    : ""
                  : ""
              }
            >
              {dataKeys.map((key) => (
                <td
                  key={key}
                  className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        )}
      </table>
    {pageType === "show" && (
      <div className="flex justify-center items-center">
      <button
        onClick={() => setPage(1)}
        disabled={pagination.currentPage === 1}
      >
        First Page
      </button>
      {pagination.currentPage > 1 && (
        <>
        <span>...</span>
        <button
          onClick={() => setPage(page => page - 1)}
        >
          {pagination.currentPage - 1}
        </button>
        </>
      )}
      <span>{pagination.currentPage}</span>
      {pagination.currentPage < pagination.totalPages && (
        <>
        <button
          onClick={() => setPage(page => page + 1)}
        >
          {pagination.currentPage + 1}
        </button>
        <span>...</span>
        </>
      )}
      <button
        onClick={() => setPage(pagination.totalPages)}
        disabled={pagination.currentPage === pagination.totalPages}
      >
        Last Page
      </button>
    </div>
    )}
    </div>
  );
};
