import {
  Box,
  Container,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Navbar } from "../../components/Navbar/Navbar";

import bgImageUm from "../../assets/backgroundUm.jpg";
import bgImageDois from "../../assets/backgroundDois.jpg";

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundImage:
          colorScheme === "dark" ? `url(${bgImageDois})` : `url(${bgImageUm})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <Container size="lg" style={{ marginTop: "10vh" }}>
        <Stack align="center" gap="lg">
          <Title
            order={1}
            c={
              colorScheme === "dark"
                ? theme.colors.severanceRed[5]
                : theme.colors.severanceGreen[9]
            }
            ta="center"
          >
            Bem-vindo à DigitaLL
          </Title>
          <Text
            c={
              colorScheme === "dark"
                ? theme.colors.severanceRed[5]
                : theme.colors.severanceGreen[9]
            }
            ta="center"
            size="lg"
            maw={600}
          >
            Quis qui sit anim Lorem sunt cillum ut incididunt. Anim
            reprehenderit esse veniam culpa. Exercitation magna eu mollit
            cupidatat aliquip.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
