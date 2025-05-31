import { Center } from '@mantine/core';
import { RegisterForm } from '../../components/RegisterForm';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer';

export const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <Center style={{ minHeight: '80vh' }}>
        <RegisterForm />
      </Center>
      <Footer />
    </>
  );
};
