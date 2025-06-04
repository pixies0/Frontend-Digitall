import { useEffect, useState } from "react";
import { auth } from "../lib/auth";
import { api } from "../lib/api";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true); // Novo estado de carregamento

  const token = auth.getToken();
  const isAuthenticated = !!token;

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoadingUser(true);
      if (token) {
        try {
          const response = await api.get("/user");
          console.log("🔎 Usuário carregado:", response.data);
          setUser(response.data);
        } catch (error) {
          console.error("Erro ao buscar usuário", error);
          setUser(null);
          // Opcional: Se der erro ao buscar usuário, talvez invalidar o token
          // auth.removeToken();
        } finally {
          setIsLoadingUser(false);
        }
      } else {
        setUser(null);
        setIsLoadingUser(false);
      }
    };

    fetchUser();
  }, [token]);

  return { token, isAuthenticated, user, isLoadingUser };
};