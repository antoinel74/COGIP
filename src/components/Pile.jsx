import React, { useEffect, useState } from "react";
import { fetchDataPages } from "../helpers/api/fetchAllDatas";

/**
 * pills passing the data parameter to display different colors depending on the data and display the according data as well
 * @param {string} data contacts invoices companies
 * @returns {Pile} pile component to display the total number of corresponding data
 */
export const Pile = ({ dataType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchDataPages(dataType, 1);
      setData(response.data.pagination);
    })();
  }, [dataType]);
  // console.log(data);
  const getClass = (dataType) => {
    switch (dataType) {
      case "contacts":
        return "bg-blue-200";
      case "invoices":
        return "bg-blue-600";
      case "companies":
        return "bg-red-300";
      default:
        return "";
    }
  };

  const pileClass = getClass(dataType);

  return (
    <div
      className={`rounded-full text-white text-sm md:text-base font-bold h-24 w-24 flex flex-col items-center justify-center ${pileClass}`}
    >
      <div>{data.totalItems}</div>
      <div>{dataType}</div>
    </div>
  );
};
