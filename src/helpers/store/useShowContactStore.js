import { create } from "zustand";
import { fetchAllDatas } from "../api/fetchAllDatas";

const useShowContactStore = create((set) => ({
  contactDetails: null,

  fetchContactById: async (contactId) => {
    const contactDetails = await fetchAllDatas({
      dataType: "contacts",
      options: `/${contactId}`,
    });
    set({ contactDetails });
  },
}));

export { useShowContactStore };
