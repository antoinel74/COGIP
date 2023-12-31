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
    // console.log("fetchAllDatas", dataType, data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchLastDatas = async (dataType) => {
  const data = await fetchAllDatas({ dataType, options: "/last" });
  return data;
};

export const fetchDataPages = async (dataType, page) => {
  const data = await fetchAllDatas({ dataType, options: `?page=${page}` });
  return data;
};

export const fetchCompanyById = async (dataType, companyId) => {
  const data = await fetchAllDatas({ dataType, options: `/${companyId}/show` });
  return data;
};

export const fetchContactById = async (dataType, contactId) => {
  const data = await fetchAllDatas({ dataType, options: `/${contactId}` });
  return data;
};

export const fetchEveryCompanies = async () => {
  const data = await fetchAllDatas({ dataType: "fetchcompanies" });
  return data;
};
