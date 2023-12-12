import { create } from 'zustand';
import { fetchAllDatas } from '../api/fetchAllDatas';

const useTableStore = create((set) => ({
  lastInvoices: [],
  lastCompanies: [],
  lastContacts: [],
  invoices: [],
  companies: [],
  contacts: [],
  currentPage: 1,

  fetchLastInvoices: async () => {
    const lastInvoices = await fetchAllDatas({ dataType: "invoices", options: "/last" });
    set({ lastInvoices });
  },

  fetchLastCompanies: async () => {
    const lastCompanies = await fetchAllDatas({ dataType: "companies", options: "/last" });
    set({ lastCompanies });
  },

  fetchLastContacts: async () => {
    const lastContacts = await fetchAllDatas({ dataType: "contacts", options: "/last" });
    set({ lastContacts });
  },
}));

export { useTableStore };
