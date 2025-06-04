import { Button, Container, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

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
