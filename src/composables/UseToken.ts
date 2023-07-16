import axios from "axios";
import Notify from "../helpers/Notify";
import { isDisableLayer, isEnableLayer } from "../helpers/Preloader";

export default function UseToken() {
  function getToken() {
    return sessionStorage.getItem("token");
  }

  function setToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  async function removeToken() {
    sessionStorage.removeItem("token");
  }

  async function validateToken() {
    try {
      const payload = JSON.parse(window.atob(getToken()!.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        await refreshToken();
      }
    } catch (error: any) {
      Notify.error(error.message);
    }
  }

  async function refreshToken() {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
          },
        }
      );

      if (data.status === "success") {
        setToken(data.data.access_token);
        return;
      }
      removeToken();
    } catch (error: any) {
      Notify.error(error.message);
      removeToken();
    }
  }

  async function getSaya() {
    try {
      isEnableLayer();
      await validateToken();
      let endpoint = "";
      if (sessionStorage.getItem("is_simat") == "true") {
        endpoint = import.meta.env.VITE_API_SIMAT + "/saya";
      } else {
        endpoint = import.meta.env.VITE_BASE_URL + "/auth/me";
      }
      const { data } = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getToken(),
        },
      });
      isDisableLayer();
      return sessionStorage.getItem("is_simat") == "true" ? data.data : data;
    } catch (error: any) {
      Notify.error(error.message);
    }
  }

  return {
    getToken,
    setToken,
    removeToken,
    refreshToken,
    validateToken,
    getSaya,
  };
}
