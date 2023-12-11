import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchPageByType } from "../helpers/api/FetchPageByType";
import { fetchLast } from "../helpers/api/fetchLast";
import Searchbar  from "./Searchbar";
import { getDataMap } from "../helpers/api/getDataMap";

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
  const headersMap = getHeadersMap(pageType);
  const dataMap = getDataMap(pageType);
  const headers = headersMap[dataType] || [];
  const dataKeys = dataMap[dataType] || [];
  // const { dataType } = useParams();
  // const [data, setData] = useState([]);
  // const [title, setTitle] = useState("");
  // const [pageType, setPageType] = useState("");
  // const [pageNumber, setPageNumber] = useState(1);
  // const [lastData, setLastData] = useState([]);

  // useEffect(() => {
  //   const fetchPage = async () => {
  //     const page = await fetchPageByType(dataType, pageNumber);
  //     setData(page);
  //   };

  //   fetchPage();
  // }, [dataType, pageNumber]);

  // useEffect(() => {
  //   const fetchLastData = async () => {
  //     const lastData = await fetchLast(dataType);
  //     setLastData(lastData);
  //   };

  //   fetchLastData();
  // }, [dataType]);
 
    return (
      <div className={`overflow-x-auto mx-auto flex flex-col ${pageType === 'admin_panel' ? 'max-w-xl' : 'max-w-6xl'}`}>
        {pageType === "application" || pageType === "show" && 
            <div>
              <h2 className="text-4xl w-full font-extrabold py-6 capitalize">{pageType === "show" ? "all" : "last"} {dataType}</h2>
            </div>
          }
          {pageType ==="show" && <Searchbar />}
        <table className="min-w-full table-fixed">
          
          <thead className={pageType === "application" || pageType === "show" ? "bg-[#f9de4e]" : ""}>
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
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={(pageType === "application" || pageType === "show") ? (index % 2 === 1 ? "bg-gray-200" : "") : "" }>
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
        </table>
      </div>
    );
};
