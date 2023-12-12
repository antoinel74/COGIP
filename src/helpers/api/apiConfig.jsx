const apikey = import.meta.env.VITE_COGIP_KEY;
const baseURL = `https://cogip-api-${apikey}.herokuapp.com`;

/**
 * Construct the api endpoint with the data type and the options described here:
 * @param {string} dataType - parameter corresponding to "contacts", "invoices", "companies"
 * @param {string} options - options to add to the endpoint (ex: "?page=2", "/last" or "/1"**for a single item call by id**)
 * @returns 
 */
export const buildApiEndpoint = (dataType, options) => {
    let path = `${baseURL}/${dataType}`;
    if (options) {
        path += `${options}`;
    }
    return path;
}
