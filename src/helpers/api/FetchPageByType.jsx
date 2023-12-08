import jsonData from "../../assets/data.json";

/**
 * Fetches a specific page of data for the given data type.
 *example:  const page1 = await fetchPageByType("contacts", 1);
 * @param {string} dataType - Data parameter corresponding to "contacts", "invoices", "companies"
 * @param {number} pageNumber - Page number to fetch
 * @returns {Array} - Data for the specified page and data parameter
 */
export const fetchPageByType = async (dataType, pageNumber) => {
  const pages = jsonData[dataType];
  
  if (!pages || !Array.isArray(pages)) {
    throw new Error(`Invalid data : ${dataType}`);
  }

  const selectedPage = pages[pageNumber - 1];

  if (!selectedPage) {
    throw new Error(`Page ${pageNumber} not found for ${dataType}`);
  }

  return selectedPage.dataType;
};