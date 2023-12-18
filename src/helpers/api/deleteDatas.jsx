import { buildApiEndpoint } from "./apiConfig";

export const deleteDatas = async (dataType, id) => {
    const url = buildApiEndpoint(dataType, `/${id}`);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };