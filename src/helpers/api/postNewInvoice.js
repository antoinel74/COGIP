import { buildApiEndpoint } from "./apiConfig";

export const postNewInvoice = async (formInputs) => {
  try {
    const endpoint = buildApiEndpoint("invoices", "");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputs),
    });

    if (!response.ok) {
      throw new Error(`Error : ${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Invoice not created: ${error.message}`);
  }
};
