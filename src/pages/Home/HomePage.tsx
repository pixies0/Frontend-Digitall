import { Box, Container, Stack, Text, Title } from '@mantine/core';
import { Navbar } from '../../components/Navbar/Navbar';

import bgImage from '../../assets/backgroundDois.jpg';

export function HomePage() {

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />

      <Container size="lg" style={{ marginTop: '10vh' }}>
        <Stack align="center" gap="lg">
          <Title order={1} c="white" ta="center">
            Bem-vindo à DigitaLL
          </Title>
          <Text c="white" ta="center" size="lg" maw={600}>
            Quis qui sit anim Lorem sunt cillum ut incididunt. Anim reprehenderit esse veniam culpa. Exercitation magna eu mollit cupidatat aliquip.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
