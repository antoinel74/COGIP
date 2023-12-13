import { create } from 'zustand';
import { fetchAllDatas } from '../api/fetchAllDatas';

/**
 * a store to manage the data of the table and the state of the pagination
 * @param {array} lastInvoices - the last invoices data state
 * @param {array} lastCompanies - the last companies data state
 * @param {array} lastContacts - the last contacts data state
 * @param {array} invoices - the invoices data state depending on the current page
 * @param {array} companies - the companies data state depending on the current page
 * @param {array} contacts - the contacts data state depending on the current page
 * @param {number} page - the current page state
 * @param {function} fetchLastData - fetch the last data
 * @param {function} fetchPageData - fetch the data of the current page
 */
const useTableStore = create((set) => ({
  lastInvoices: {},
  lastCompanies: {},
  lastContacts: {},
  invoices: {},
  companies: {},
  contacts: {},
  page: 1,
  

  fetchLastData: async (dataType) => {
    const lastData = await fetchAllDatas({ dataType: dataType, options: "/last" });
    if (dataType === 'invoices') {
      set({ lastInvoices : lastData });
    } else if (dataType === 'companies') {
      set({ lastCompanies : lastData });
    } else if (dataType === 'contacts') {
      set({ lastContacts : lastData });
    }
  },

  fetchPageData: async (dataType, page) => {
    const pageData = await fetchAllDatas({ dataType: dataType, options: `?page=${page}` });
    if (dataType === 'invoices') {
      set({ invoices : pageData });
    } else if (dataType === 'companies') {
      set({ companies : pageData });
    } else if (dataType === 'contacts') {
      set({ contacts : pageData });
    }
  }
}));

export { useTableStore };