import jsonData from "../../assets/data.json";

/**
 * Fetches a specific page of data for the given data type.
 *
 * @param {string} data - Data parameter corresponding to "contacts", "invoices", "companies"
 * @param {number} pageNumber - Page number to fetch
 * @returns {Array} - Data for the specified page and data parameter
 */
export const fetchPageByType = async (data, pageNumber) => {
  const pages = jsonData[data];
  
  if (!pages || !Array.isArray(pages)) {
    throw new Error(`Invalid data : ${data}`);
  }

  const selectedPage = pages[pageNumber - 1];

  if (!selectedPage) {
    throw new Error(`Page ${pageNumber} not found for ${data}`);
  }

  return selectedPage.data;
};