import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Stack,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import errorDois from "../assets/errorDois.jpg";
import errorTres from "../assets/errorTres.jpg";

export function NotFound() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const primaryColor =
    colorScheme === "dark"
      ? theme.colors.severanceRed[5]
      : theme.colors.severanceGreen[9];

  return (
    <>
      <Navbar />

      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${
            colorScheme === "dark" ? errorTres : errorDois
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <Container size="md">
          <Stack align="center" gap="xs">
            <Title
              order={1}
              style={{
                fontSize: "10rem",
                lineHeight: 1,
                color: primaryColor,
                userSelect: "none",
              }}
            >
              404
            </Title>
            <Title order={2} ta="center">
              Página não encontrada
            </Title>
            <Button
              component={Link}
              to="/"
              mt="md"
              size="md"
              color={colorScheme === "dark" ? "severanceRed" : "severanceGreen"}
            >
              ← Voltar para Home
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
