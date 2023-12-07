const baseURL = '';

/**
 * path builder for api calls
 * @param {string} path the path to api's endpoint
 * @returns {buildApiUrl} the full path to api's endpoint
 */
export const buildApiUrl = (path) => `${baseURL}${path}`;