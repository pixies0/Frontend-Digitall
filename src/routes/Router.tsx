import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { NotFound } from "../pages/NotFound";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export function AppRouter() {
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas públicas */}
        <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Rotas privadas */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        </Route>

        {/* Página de erro 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
