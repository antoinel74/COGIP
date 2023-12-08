import jsonData from "../../assets/data.json";

/**
 * Fetches the last data for the given data type.
 * example:  const lastContacts = await fetchLast("contacts");
 * @param {string} dataType the data type corresponding to "contacts", "invoices", "companies"
 * @returns {fetchLast} the last data for the specified data type
 */
export const fetchLast = (dataType) => {
    const lastData = jsonData.last_data[dataType] || [];
    return lastData;
  };