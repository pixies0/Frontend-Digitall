import {
  Box,
  Group,
  Anchor,
  Flex,
  Burger,
  Drawer,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { LibraryBig } from "lucide-react";
import { ColorSchemeToggle } from "../ColorSchemeToggle";
import { useMantineTheme } from "@mantine/core";

export function Navbar() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box
      component="header"
      px="xl"
      py="md"
      style={(theme) => ({
        width: "100%",
        backgroundColor:
          colorScheme === "dark"
            ? theme.colors.severanceRed[4]
            : theme.colors.severanceGreen[4],
        position: "sticky",
        top: 0,
        zIndex: 100,
      })}
    >
      <Flex justify="space-between" align="center">
        <Anchor
          component={Link}
          to="/"
          fw={700}
          fz="xl"
          c={colorScheme === "dark" ? "black" : "white"}
          style={{ textDecoration: "none" }}
        >
          <Group gap={8}>
            <LibraryBig size={32} strokeWidth={2} />
            DigitaLL
          </Group>
        </Anchor>

        <Group gap="md" visibleFrom="sm">
          <Anchor
            component={Link}
            to="/login"
            fw={500}
            fz="lg"
            c={colorScheme === "dark" ? "black" : "white"}
            underline="hover"
            style={{ textDecoration: "none" }}
          >
            Login
          </Anchor>
          <Anchor
            component={Link}
            to="/register"
            fw={500}
            fz="lg"
            c={colorScheme === "dark" ? "black" : "white"}
            underline="hover"
            style={{ textDecoration: "none" }}
          >
            Registro
          </Anchor>
          <ColorSchemeToggle />
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          aria-label="Toggle navigation"
          color={colorScheme === "dark" ? "black" : "white"}
        />
      </Flex>

      <Drawer
        opened={opened}
        onClose={close}
        padding="sm"
        size="100%"
        hiddenFrom="sm"
        styles={{
          content: {
            backgroundColor:
              colorScheme === "dark"
                ? theme.colors.severanceRed[4]
                : theme.colors.severanceGreen[4],
          },
        }}
      >
        <Flex direction="column" gap="lg" py={"md"}>
          <Anchor
            component={Link}
            to="/login"
            fw={600}
            fz="xl"
            onClick={close}
            c={colorScheme === "dark" ? "black" : "white"}
            style={{ textDecoration: "none" }}
          >
            Login
          </Anchor>
          <Anchor
            component={Link}
            to="/register"
            fw={600}
            fz="xl"
            onClick={close}
            c={colorScheme === "dark" ? "black" : "white"}
            style={{ textDecoration: "none" }}
          >
            Registro
          </Anchor>
          <ColorSchemeToggle />
        </Flex>
      </Drawer>
    </Box>
  );
}
