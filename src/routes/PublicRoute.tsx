import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PublicRoute() {
  const { isAuthenticated } = useAuth(); // Obtenha o estado de autenticação do hook

  // Se estiver autenticado, redirecione para o dashboard para evitar que o usuário acesse as rotas públicas novamente
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}