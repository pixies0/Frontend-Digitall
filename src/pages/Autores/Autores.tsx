import { useEffect, useState } from "react";
import { DataTable } from "mantine-datatable";

import {
  Box,
  Button,
  Group,
  Text,
  Title,
  Modal,
  TextInput,
  ActionIcon
} from "@mantine/core";

import { notifications } from "@mantine/notifications";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import { listarAutores, criarAutor } from "../../services/autoresService";
import type { Autor } from "../../types/autor";

export default function AutoresPage() {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState("");

  useEffect(() => {
    carregarAutores();
  }, []);

  async function carregarAutores() {
    try {
      const dados = await listarAutores();
      setAutores(dados);
    } catch (error) {
      console.error(error);
    }
  }

  async function salvarAutor() {
    try {
      await criarAutor(nome);

      notifications.show({
        title: "Sucesso",
        message: "Autor cadastrado com sucesso!",
        color: "green",
      });

      setNome("");
      setModalAberto(false);

      carregarAutores();
    } catch (error) {
      notifications.show({
        title: "Erro",
        message: "Falha ao cadastrar autor",
        color: "red",
      });
    }
  }

  console.log("Autores:", autores);
  console.log("Quantidade:", autores.length);

  return (
    <Box p="md">
      <Group justify="space-between" mb="lg">
        <div>
          <Title order={1}>Autores</Title>

          <Text c="dimmed" size="sm">
            Gerencie os autores cadastrados no sistema
          </Text>
        </div>

        <Button
          leftSection={<IconPlus size={18} />}
          onClick={() => setModalAberto(true)}
        >
          Novo Autor
        </Button>
      </Group>

      <Modal
        opened={modalAberto}
        onClose={() => setModalAberto(false)}
        title="Novo Autor"
      >
        <TextInput
          label="Nome"
          placeholder="Digite o nome do autor"
          value={nome}
          onChange={(event) => setNome(event.currentTarget.value)}
        />

        <Button mt="md" fullWidth onClick={salvarAutor}>
          Salvar
        </Button>
      </Modal>

      <DataTable
        records={autores}
        columns={[
          {
            accessor: "id",
            title: "ID",
            width: 80,
          },
          {
            accessor: "nome",
            title: "Nome",
          },
          {
            accessor: "acoes",
            title: (
              <Text pl={10}>
                Ações
              </Text>
            ),
            width: 100,

            render: (autor) => (
              <Group justify="center" gap={4} grow>

                <ActionIcon
                  color="blue"
                  variant="light"
                  onClick={() => editarAutor(autor)}
                >
                  <IconEdit size={16} />
                </ActionIcon>

                <ActionIcon
                  color="red"
                  variant="light"
                  onClick={() => excluirAutorHandler(autor.id)}
                >
                  <IconTrash size={16} />
                </ActionIcon>

              </Group>
            ),
          }
        ]}
        noRecordsIcon
        noRecordsText=""
      />
    </Box>
  );
}
