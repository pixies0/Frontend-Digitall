import {
  Button,
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { authService } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

type LoginFormValues = {
  registration: string;
  password: string;
};

export const LoginForm = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    initialValues: {
      registration: "",
      password: "",
    },

    validate: {
      password: (value) => (value.length >= 6 ? null : "Mínimo 6 caracteres"),
    },
  });

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      await authService.login({
        registration: Number(values.registration),
        password: values.password,
      });

      navigate("/dashboard");
    } catch (error) {
      alert("Login falhou. Verifique sua matrícula e senha.");
    }
  };

  return (
    <Paper radius="md" p="xl" withBorder w={400}>
      <Title order={2} ta="center" mb="md">
        Login
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Matrícula"
            placeholder="123456789"
            {...form.getInputProps("registration")}
            type="number"
            pattern="\d*"
          />

          <PasswordInput
            label="Senha"
            placeholder="*********"
            {...form.getInputProps("password")}
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Button
            color={isDark ? "severanceRed" : "severanceGreen"}
            fullWidth
            type="submit"
          >
            Entrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
