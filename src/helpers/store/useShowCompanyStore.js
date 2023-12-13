import { create } from "zustand";
import { fetchAllDatas } from "../api/fetchAllDatas";

const useShowCompanyStore = create((set) => ({
  companyDetails: null,

  fetchCompanyById: async (companyId) => {
    const companyDetails = await fetchAllDatas({
      dataType: "companies",
      options: `/${companyId}/show`,
    });
    set({ companyDetails });
  },
}));

export { useShowCompanyStore };
