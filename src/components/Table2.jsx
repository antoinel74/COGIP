import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchPageByType } from '../helpers/api/FetchPageByType';
import { fetchLast } from '../helpers/api/fetchLast';

/**
 * Table component taking a data type, a page number and a title as parameters	
 * @param {string} dataType - Data parameter corresponding to "contacts", "invoices", "companies"
 * @param {number} pageNumber - Page number to fetch
 * @param {string} pageType - Page types parameters corresponding to "admin_panel", "application", "show"
 * @returns 
 */
export const Table2 = () => {
  const { dataType } = useParams();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [pageType, setPageType] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [lastData, setLastData] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [previousPage, setPreviousPage] = useState(0);
  const [firstPage, setFirstPage] = useState(1);

  useEffect(() => {
    const fetchPage = async () => {
      const page = await fetchPageByType(dataType, pageNumber);
      setData(page);
    };

    fetchPage();
  }, [dataType, pageNumber]);

  useEffect(() => {
    const fetchLastData = async () => {
      const lastData = await fetchLast(dataType);
      setLastData(lastData);
    };

    fetchLastData();
  }, [dataType]);

 
  return (
    <div>Table2</div>
  )
}
