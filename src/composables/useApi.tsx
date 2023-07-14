import Notify from "../helpers/Notify";
import UseToken from "./UseToken";
export default function UseApi() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { validateToken } = UseToken();
  

  async function resource(path: string, method: string, body?: any) {
    try {
      await validateToken();
      const response = await fetch(`${baseUrl}/${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + sessionStorage.getItem("token"),
        },
        body: body ? JSON.stringify(body) : null,
      });
      await checkResponse(response);
      const data = await response.json();
      return data;
    } catch (error: any) {
      Notify.error(error.message);
    }
  }

  async function getResource(path: string, params?: string) {
    return await resource(path, "GET", params);
  }

  async function postResource(path: string, body: any) {
    return await resource(path, 'POST', body);
  }

  async function putResource(path: string, body: any) {
    return await resource(path, 'PUT', body);
  }

  async function deleteResource(path: string) {
    return await resource(path, 'DELETE');
  }

  async function checkResponse(response: any) {
    if ((await response.ok) === false) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || "Something went wrong";
      throw new Error(errorMessage);
    }
  }
  return {
    getResource,
    postResource,
    deleteResource,
    putResource,
  };
}
