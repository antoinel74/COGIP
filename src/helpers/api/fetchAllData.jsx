import jsonData from "../../assets/data.json";

/**

example: const allContacts = await fetchAllData("contacts");
@param {string} dataType - Data types corresponding to "contacts", "invoices", "companies"
@returns {Array} - All data from data.json for the specified data type */

export const fetchAllData = async (dataType) => {
  let allData = [];
  for (let page of jsonData[dataType]) {
    const newData = page.data;
    allData = allData.concat(newData);
  }
  return allData;
};
