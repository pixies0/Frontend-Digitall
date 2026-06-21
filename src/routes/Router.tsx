import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { NotFound } from "../pages/NotFound";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import {
  DashboardAdmin,
  DashboardCommon,
  DashboardRedirect,
} from "../pages/Dashboard/Dashboards";

import { PrivateLayout } from "../layouts/PrivateLayout";

import EditorasPage from "../pages/Editoras/Editoras";
import AutoresPage from "../pages/Autores/Autores";
import LivrosPage from "../pages/Livros/Livros";
import UnidadesPage from "../pages/Unidades/Unidades";
import EmprestimosPage from "../pages/Emprestimos/Emprestimos";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Rotas privadas */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<DashboardRedirect />} />
            <Route path="/dashboard/admin" element={<DashboardAdmin />} />
            <Route path="/dashboard/common" element={<DashboardCommon />} />

            <Route path="/autores" element={<AutoresPage />} />
            <Route path="/editoras" element={<EditorasPage />} />
            <Route path="/livros" element={<LivrosPage />} />
            <Route path="/unidades" element={<UnidadesPage />} />
            <Route path="/emprestimos" element={<EmprestimosPage />} />
          </Route>
        </Route>

        {/* Página de erro 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
