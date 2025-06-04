import { Button, Container, Stack, Text, Title, Center, Loader, } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { authService } from '../../services/authService';
import { useAuth } from "../../hooks/useAuth";

export function DashboardCommon() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout();
    navigate('/');
  };

  return (
    <Container>
      <Stack align="center" justify="center" h="100vh">
        <Title order={1}>Dashboard Comum</Title>
        <Text>Você está logado e acessou uma rota privada!</Text>
        <Button color="red" onClick={handleLogout}>
          Sair
        </Button>
      </Stack>
    </Container>
  );
}

export function DashboardAdmin() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logout();
    navigate('/');
  };

  return (
    <Container>
      <Stack align="center" justify="center" h="100vh">
        <Title order={1}>Dashboard ADMIN</Title>
        <Text>Você está logado e acessou dash admin!</Text>
        <Button color="red" onClick={handleLogout}>
          Sair
        </Button>
      </Stack>
    </Container>
  );
}


export function DashboardRedirect() {
  const { user, isAuthenticated, token, isLoadingUser } = useAuth(); // Use isLoadingUser
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoadingUser) {
      console.log("DashboardRedirect: Usuário em carregamento. Aguardando...");
      return;
    }

    if (!isAuthenticated) {
      console.log("DashboardRedirect: Carregamento finalizado, não autenticado. Redirecionando para /login");
      navigate("/login", { replace: true });
      return;
    }

    if (isAuthenticated && user) {
      console.log("DashboardRedirect: Usuário carregado. is_admin:", user.is_admin);
      if (user.is_admin === 1) {
        navigate("/dashboard/admin", { replace: true });
      } else {
        navigate("/dashboard/common", { replace: true });
      }
    }
  }, [user, isAuthenticated, token, isLoadingUser, navigate]);

  if (isLoadingUser) {
    return (
      <Center style={{ height: '100vh' }}>
        <Stack align="center">
          <Loader size="xl" />
          <Text size="lg">Verificando suas permissões...</Text>
        </Stack>
      </Center>
    );
  }

  // Fallback: se por algum motivo chegou aqui sem redirecionar (não deveria ocorrer se a lógica acima estiver ok)
  return (
    <Center style={{ height: '100vh' }}>
      <Stack align="center">
        <Text size="lg" color="red">Ocorreu um erro inesperado. Redirecionando...</Text>
        <Loader />
      </Stack>
    </Center>
  );
}
