import { Center, Container } from "@mantine/core";
import { LoginForm } from "../../components/LoginForm";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer";

export const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Container size="md" h="100vh">
        <Center h="90%">
          <LoginForm />
        </Center>
      </Container>
      <Footer />
    </>
  );
};
