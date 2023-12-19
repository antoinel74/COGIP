import { buildApiEndpoint } from "./apiConfig";

export const editDatas = async (dataType, id) => {
    const url = buildApiEndpoint(dataType, `/${id}`);
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}
