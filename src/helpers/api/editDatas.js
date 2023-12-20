import { buildApiEndpoint } from "./apiConfig";

export const editDatas = async (dataType, id, updatedData) => {
//   console.log("editDatas called with", dataType, id, updatedData);
  const url = buildApiEndpoint(dataType, `/${id}`);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  return data;
};
