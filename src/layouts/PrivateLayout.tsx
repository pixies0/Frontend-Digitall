import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/auth";

import { AppShell, NavLink, Text, Stack, Divider, Group } from "@mantine/core";

import {
  IconHome,
  IconBook,
  IconBuilding,
  IconUsers,
  IconCrown,
  IconArrowsExchange,
  IconLogout,
  IconSchool,
  IconFileCheck,
  IconBuildings,
} from "@tabler/icons-react";

import { Outlet, Link, useLocation } from "react-router-dom";

export function PrivateLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmar = window.confirm(
      "Deseja realmente sair do sistema?"
    );

    if (!confirmar) return;

    auth.removeToken();

    navigate("/");
  };

  return (
    <AppShell
      navbar={{
        width: 280,
        breakpoint: "sm",
      }}
    >
      <AppShell.Navbar p="md">
        <Group mb="md">
          <IconCrown size={28} />
          <Text fw={700} size="xl">
            DigitalLL
          </Text>
        </Group>

        <Divider mb="md" />

        <Stack gap={4}>
          <NavLink
            component={Link}
            to="/dashboard"
            label="Dashboard"
            leftSection={<IconHome size={18} />}
            active={location.pathname.includes("/dashboard")}
          />

          <NavLink
            label="Cadastros"
            leftSection={<IconFileCheck size={18} />}
            defaultOpened
          >
            <NavLink
              component={Link}
              to="/autores"
              label="Autores"
              leftSection={<IconUsers size={16} />}
              active={location.pathname === "/autores"}
            />

            <NavLink
              component={Link}
              to="/editoras"
              label="Editoras"
              leftSection={<IconBuilding size={16} />}
              active={location.pathname === "/editoras"}
            />

            <NavLink
              component={Link}
              to="/livros"
              label="Livros"
              leftSection={<IconBook size={16} />}
              active={location.pathname === "/livros"}
            />

            <NavLink
              component={Link}
              to="/unidades"
              label="Unidades"
              leftSection={<IconBuildings size={16} />}
              active={location.pathname === "/unidades"}
            />
          </NavLink>

          <NavLink
            label="Movimentações"
            leftSection={<IconArrowsExchange size={18} />}
            defaultOpened
          >
            <NavLink
              component={Link}
              to="/emprestimos"
              label="Empréstimos"
              leftSection={<IconSchool stroke={2} />}
            />
          </NavLink>

          <Divider my="md" />

          <NavLink
            label="Sair"
            color="red"
            leftSection={<IconLogout size={18} />}
            onClick={handleLogout}
          />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
