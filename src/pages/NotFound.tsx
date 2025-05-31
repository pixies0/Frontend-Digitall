// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Box, Title, Text, Button } from "@mantine/core";

export function NotFound() {
  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Title order={1}>404</Title>
      <Text size="lg" mt="sm">
        Página não encontrada!
      </Text>
      <Button component={Link} to="/" mt="md" color="green">
        Voltar para Home
      </Button>
    </Box>
  );
}
