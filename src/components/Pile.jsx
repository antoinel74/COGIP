import React from "react";

/**
 * pills passing the data parameter to display different colors depending on the data and display the according data as well 
 * @param {string} data contacts invoices companies 
 * @returns {Pile} pile component to display the total number of corresponding data
 */
const Pile = ({ data }) => {
  const getClass = (data) => {
    switch (data) {
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

  const pileClass = getClass(data);

  return (
    <div className={`rounded-full text-white font-bold h-20 w-20 flex flex-col items-center justify-center ${pileClass}`}>
        {/* 245 to be displayed as something like data.total */}
        <div>245</div>
        {data && <div>{data}</div>}
    </div>
  );
};

export default Pile;
