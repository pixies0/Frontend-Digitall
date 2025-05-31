import { auth } from "../lib/auth";

export const useAuth = () => {
  const token = auth.getToken();
  const isAuthenticated = !!token;

  return { token, isAuthenticated };
};
