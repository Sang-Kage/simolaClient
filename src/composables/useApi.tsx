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

  async function getResource(path: string, method: "GET", params?: string) {
    return await resource(path, method, params);
  }

  async function postResouce(path: string, method: "POST", body: any) {
    return await resource(path, method, body);
  }

  async function putResource(path: string, method: "PUT", body: any) {
    return await resource(path, method, body);
  }

  async function deleteResource(path: string, method: "DELETE") {
    return await resource(path, method);
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
    postResouce,
    deleteResource,
    putResource,
  };
}
