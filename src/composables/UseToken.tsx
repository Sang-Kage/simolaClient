import Notify from "../helpers/Notify";

export default function UseToken() {
  function getToken() {
    return sessionStorage.getItem("token");
  }

  function setToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  function removeToken() {
    sessionStorage.removeItem("token");
  }


  async function validateToken() {
    try {
      const payload = JSON.parse(window.atob(getToken()!.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        await refreshToken();
        return;
      }
    } catch (error: any) {
      Notify.error(error.message);
    }
  }

  async function refreshToken() {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + getToken(),
        },
      });
      if(response.ok === false) {
        removeToken();
        return;
      }
      const data = await response.json();
      setToken(data.token);
    } catch (error: any) {
      Notify.error(error.message);
    }
  }


  return {
    getToken,
    setToken,
    removeToken,
    refreshToken,
    validateToken
  };
}
