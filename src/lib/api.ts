// src/lib/api.ts
import axios from "axios";
import { auth } from "./auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = auth.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Token inválido ou expirado
        auth.removeToken();
        window.location.href = "/login"; // Redireciona para login
      }

      if (status >= 500) {
        alert("Erro interno no servidor. Tente novamente mais tarde.");
      }
    }

    return Promise.reject(error);
  }
);
