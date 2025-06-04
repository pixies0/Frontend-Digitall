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
import { showNotification } from "@mantine/notifications";

import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

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

      showNotification({
        title: "Login bem-sucedido!",
        message: "Você foi logado com sucesso.",
        color: "green",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error: any) {
      // console.error("Erro no login:", error); // Para depuração
      let errorMessage = "Login falhou. Verifique sua matrícula e senha.";

      if (error.status === 401) {
        errorMessage = "Não autorizado. Verifique sua matrícula e senha.";
      }else if(error.status === 500) {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
      }else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      } else{
        errorMessage = error.message;
      }

      showNotification({
        title: "Erro no Login",
        message: errorMessage,
        color: "red",
      });
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
            // error={form.errors.registration}
          />

          <PasswordInput
            label="Senha"
            placeholder="*********"
            {...form.getInputProps("password")}
            // error={form.errors.password}
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
