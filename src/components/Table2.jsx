import React, { useState } from 'react';
import { Searchbar } from './Searchbar';

const Table = ({ title, data, viewType }) => {
  const getTableHeaders = () => {
    switch (viewType) {
      case 'dashboard':
        switch (data) {
            case 'contacts':
                return ['Name', 'Phone', 'Email']; 
            case 'invoices':
                return ['Invoice Number', 'Dates', 'Company'];
            case 'companies':
                return ['Name', 'TVA', 'Country'];
        }

      case 'app':
        switch (data) {
            case 'contacts':
                return ['Name', 'Phone', 'Mail', 'Company', 'Created at'];
            case 'invoices':
                return ['Invoice Number', 'Due Dates', 'Company', 'Created at'];
            case 'companies':
                return ['Name', 'TVA', 'Country', 'Type', 'Created at'];
        }
      default:
        return [];
    }
  };



  const getDisplayDataQuantity = () => {
    const itemsPerPage = 10;

    switch (viewType) {
      case 'dashboard':
        return data.slice(0, 4);
      case 'app':
        switch (dataQuantity) {
          case 'last':
            return data.slice(0, 5);
          case 'all':
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return data.slice(startIndex, endIndex);
          default:
            return [];
        }
      default:
        return [];
    }
  };

  const columns = getColumns();
  const displayData = getDisplayData();

  return (
    <div className="overflow-x-auto max-w-6xl flex mx-auto flex-col">
      <div>
        <h2 className="text-4xl w-full font-extrabold py-6">{title}</h2>
      </div>
      <Searchbar />
      <table className="min-w-full table-fixed">
        <thead className="bg-[#f9de4e]">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((item, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-200' : ''}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;