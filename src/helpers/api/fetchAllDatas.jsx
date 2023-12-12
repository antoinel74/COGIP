import { buildApiEndpoint } from "./apiConfig";

/**
 * Fetch any data from the api using the data type and the options described here:
 * @param {string} dataType - parameter corresponding to "contacts", "invoices", "companies"
 * @param {string} options - options to add to the endpoint (ex: "?page=2", "/last" or "/1"**for a single item call by id**)
 */
export const fetchAllDatas = async ({ dataType, options }) => {
    try {
      const path = buildApiEndpoint(dataType, options);
      const response = await fetch(path);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };