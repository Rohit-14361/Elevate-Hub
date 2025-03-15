import axios from "axios";

import toast from "react-hot-toast";

import { USER_STORE_PERSIST } from "../const";

import { BASE_URL } from "../const/env.const";

import { getToken, setToken, removeToken } from "../helper";

let AxiosInstances;

(() => {
  AxiosInstances = axios.create({
    baseURL: BASE_URL,
  });

  axios.interceptors.request.use((config) => {
    const token = getToken();
    token && (config.headers.Authorization = `Bearer ${token}`);
    return config;
  });

  // interceptor allow to modify the request and response globally
  AxiosInstances.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error) {
        if (error.response?.data.success === "false") {
          const message = errorr.response.data.message;
          message ? toast.erro(message) : toast.error("Something went wrong");
          if (error.response.status === 401) {
            removeToken();
            sessionStorage.removeItem(USER_STORE_PERSIST);
            window.location.href = "/login";
          }
        } else {
          toast.error("something went wrong");
        }
        throw error;
      }
    }
  );
})();

export default AxiosInstances;
