import {
  Button,
  Group,
  Paper,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";

import { api } from "../../lib/api";

type RegisterFormValues = {
  name: string;
  email: string;
  address: string;
  phone: string;
  registration: string;
  password: string;
  password_confirmation: string;
};

export const RegisterForm = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const navigate = useNavigate();

  const form = useForm<RegisterFormValues>({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      registration: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      name: (value) => (value.length < 3 ? "Nome muito curto" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "E-mail inválido"),
      phone: (value) => (value.length < 8 ? "Telefone inválido" : null),
      address: (value) => (value.length < 5 ? "Endereço muito curto" : null),
      password: (value) => (value.length >= 6 ? null : "Mínimo 6 caracteres"),
      password_confirmation: (value, values) =>
        value === values.password ? null : "As senhas não conferem",
    },
  });

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
     await api.post("/register", {
        ...values,
        registration: Number(values.registration), // Converte para número, o backend espera assim
      });

      notifications.show({
        title: "Sucesso!",
        message: "Cadastro realizado com sucesso!",
        color: "green",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500); // Aguarda 1.5 segundos antes de redirecionar
    } catch (error) {
      notifications.show({
        title: "Erro no cadastro",
        message: "Ocorreu um erro ao realizar o cadastro. Verifique os dados ou tente novamente.",
        color: "red",
      });
    }
  };

  return (
    <Paper radius="md" p="xl" withBorder w={700}>
      <Title order={2} ta="center" mb="md">
        Crie sua conta
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {/* Coluna Esquerda */}
          <Stack>
            <TextInput
              label="Nome"
              placeholder="Seu nome completo"
              withAsterisk
              {...form.getInputProps("name")}
            />

            <TextInput
              label="E-mail"
              placeholder="seu@email.com"
              withAsterisk
              {...form.getInputProps("email")}
            />

            <TextInput
              label="Telefone"
              placeholder="11999999999"
              withAsterisk
              {...form.getInputProps("phone")}
            />

            <TextInput
              label="Endereço"
              placeholder="Rua, número, cidade"
              withAsterisk
              {...form.getInputProps("address")}
            />
          </Stack>

          {/* Coluna Direita */}
          <Stack>
            <TextInput
              label="Matrícula"
              placeholder="20192365"
              withAsterisk
              {...form.getInputProps("registration")}
              onInput={(e) => {
                const input = e.currentTarget;
                input.value = input.value.replace(/\D/g, ""); // Remove tudo que não for número
                form.setFieldValue("registration", input.value);
              }}
            />

            <PasswordInput
              label="Senha"
              placeholder="Sua senha"
              withAsterisk
              {...form.getInputProps("password")}
            />

            <PasswordInput
              label="Confirme sua senha"
              placeholder="Digite a senha novamente"
              withAsterisk
              {...form.getInputProps("password_confirmation")}
            />
          </Stack>
        </SimpleGrid>

        <Group justify="space-between" mt="xl">
          <Button
            color={isDark ? "severanceRed" : "severanceGreen"}
            fullWidth
            type="submit"
          >
            Registrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
