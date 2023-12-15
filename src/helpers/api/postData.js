import { buildApiEndpoint } from "./apiConfig";

const postNewData = async (entity, formInputs) => {
  try {
    const endpoint = buildApiEndpoint(entity, "");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Failed to create ${entity}: ${error.message}`);
  }
};

export const postNewInvoice = async (formInputs) => {
  return postNewData("invoices", formInputs);
};

export const postNewContact = async (formInputs) => {
  return postNewData("contacts", formInputs);
};

export const postNewCompany = async (formInputs) => {
  return postNewData("companies", formInputs);
};
