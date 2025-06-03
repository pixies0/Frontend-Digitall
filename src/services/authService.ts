import { api } from "../lib/api";
import { auth } from "../lib/auth";

type LoginPayload = {
  registration: number;
  password: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  address: string;
  phone: string;
  registration: number;
  password: string;
  password_confirmation: string;
};

export const authService = {
  login: async (data: LoginPayload) => {
    const response = await api.post("/login", data);
    const { token } = response.data;

    auth.setToken(token);
    console.log("Token set:", token);
    console.log("Token in localStorage:", localStorage.getItem("token"));
    console.log("Usuário Logado")
    return response.data;
  },

  register: (data: RegisterPayload) => api.post("/register", data),

  logout: async () => {
    await api.post("/logout");
    auth.removeToken();
  },

  getUser: async () => {
    const response = await api.get("/user");
    return response.data;
  },
};
