import { Outlet, Link, useLocation } from "react-router-dom";
import { AppShell, NavLink, Group, Title } from "@mantine/core";

export function PrivateLayout() {
  const location = useLocation();

  return (
    <AppShell
      navbar={{
        width: 250,
        breakpoint: "sm",
      }}
    >
      <AppShell.Navbar p="md">
        <Title order={3} mb="lg">
          DigitalLL
        </Title>

        <NavLink
          component={Link}
          to="/dashboard"
          label="Dashboard"
          active={location.pathname.includes("/dashboard")}
        />

        <NavLink label="Cadastros" childrenOffset={12}>
          <NavLink component={Link} to="/autores" label="Autores" />
          <NavLink component={Link} to="/editoras" label="Editoras" />
          <NavLink component={Link} to="/livros" label="Livros" />
          <NavLink component={Link} to="/unidades" label="Unidades" />
        </NavLink>

        <NavLink label="Movimentações" childrenOffset={12}>
          <NavLink component={Link} to="/emprestimos" label="Empréstimos" />
        </NavLink>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
