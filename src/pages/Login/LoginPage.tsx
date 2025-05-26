import { Center, Container } from '@mantine/core';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
  return (
    <Container size="md" h="100vh">
      <Center h="100%">
        <LoginForm />
      </Center>
    </Container>
  );
};
