// src/hooks/useAuth.ts
import { useEffect, useState } from "react";
import { auth } from "../lib/auth";
import { api } from "../lib/api";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  const token = auth.getToken();
  const isAuthenticated = !!token;

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await api.get("/user");
          console.log("🔎 Usuário carregado:", response.data);
          setUser(response.data);
        } catch (error) {
          console.error("Erro ao buscar usuário", error);
          setUser(null);
        }
      }
    };

    fetchUser();
  }, [token]);

  return { token, isAuthenticated, user };
};
