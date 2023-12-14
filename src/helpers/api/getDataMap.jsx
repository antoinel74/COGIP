/**
 * Return the data map for the page
 * @param {string} pageType     - Page types parameters corresponding to "admin_panel", "application", "show"
 * @returns {object}            - Data map to use to display the different datas from the api 
 */
export const getDataMap = (pageType) => {
    if (pageType === "admin_panel") {
      return {
        companies: ["name", "tva", "country"],
        invoices: ["ref", "due_date", "company_name"],
        contacts: ["name", "phone", "email"],
      };
    } else {
      return {
        companies: ["name", "tva", "country", "type_id", "created_at"],
        invoices: ["ref", "due_date", "company_name", "created_at"],
        contacts: ["name", "phone", "email", "company_id", "created_at"],
      };
    }
  };

   
