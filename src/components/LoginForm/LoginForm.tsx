import { Button, Group, Paper, PasswordInput, Stack, TextInput, Title, useMantineColorScheme } from '@mantine/core';
import { useForm } from '@mantine/form';

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {

  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
      password: (value) => (value.length >= 6 ? null : 'Mínimo 6 caracteres'),
    },
  });

  const handleSubmit = (values: LoginFormValues) => {
    console.log('Login data:', values);
    // Aqui você pode chamar sua API de autenticação
  };

  return (
    <Paper radius="md" p="xl" withBorder w={400}>
      <Title order={2} ta="center" mb="md">
        Login
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="E-mail"
            placeholder="seu@email.com"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            {...form.getInputProps('password')}
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Button
          color={isDark ? 'severanceRed' : 'severanceGreen'}
          fullWidth
          type="submit">
            Entrar
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
