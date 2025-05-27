import { ColorSchemeToggle } from '../../components/ColorSchemeToggle';
import { Center, Container, Group } from '@mantine/core';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
  return (
    <Container size="md" h="100vh">
      <Group justify="flex-end" pt="md">
        <ColorSchemeToggle />
      </Group>
      <Center h="90%">
        <LoginForm />
      </Center>
    </Container>
  );
};
