import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPageByType } from "../helpers/api/FetchPageByType";
import { Table2 } from "./Table2";

/**
 * a component to handle the page switching of the table
 * @param {string} dataType - Data parameter corresponding to "contacts", "invoices", "companies"
 * @param {number} pageNumber - Page number to fetch
 * @param {string} pageType - Page types parameters corresponding to "admin_panel", "application", "show"
 * @returns {TablePages}
 */

export const TablePages = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [lastData, setLastData] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [previousPage, setPreviousPage] = useState(0);
  const [firstPage, setFirstPage] = useState(1);

  return (
    <div className="">
      <Table2 />

      {/* buttons to handle the page switiching "first page", "last page", "next page", "previous page",
       "numbers" (this one being an array  slice of the max amount of pages )  */}

      <button></button>
    </div>
  );
};
