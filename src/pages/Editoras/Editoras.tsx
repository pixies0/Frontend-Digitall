import React, { useEffect, useState } from "react";
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
import { listarEditoras, atualizarEditora, criarEditora, excluirEditora } from "../../services/editorasService";

import type { Editora } from "../../types/editora";


export default function EditorasPage() {
  const [editoras, setEditoras] = useState<Editora[]>([]);
  const [editoraSelecionada, setEditoraSelecionada] =
    useState<Editora | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    carregarEditoras();
  }, []);

  async function carregarEditoras() {
    try {
      const dados = await listarEditoras();
      setEditoras(dados);
    } catch (error) {
      console.error(error);
    }
  }

  async function salvarEditora() {
    try {

      if (editoraSelecionada) {

        await atualizarEditora(
          editoraSelecionada.id,
          nome, endereco, telefone
        );

        notifications.show({
          title: "Sucesso",
          message:
            "Editora atualizada com sucesso",
          color: "green",
        });

      } else {

        await criarEditora(nome, endereco, telefone);

        notifications.show({
          title: "Sucesso",
          message:
            "Editora cadastrada com sucesso",
          color: "green",
        });

      }

      setNome("");
      setEditoraSelecionada(null);
      setModalAberto(false);

      carregarEditoras();

    } catch (error) {

      notifications.show({
        title: "Erro",
        message:
          "Falha ao salvar editora",
        color: "red",
      });

      console.error(error);
    }
  }

  function editarEditora(editora: Editora) {
    console.log("Editora:", editora);

    setEditoraSelecionada(editora);
    setNome(editora.nome);
    setEndereco(editora.endereco);
    setTelefone(editora.telefone);
    setModalAberto(true);
  }

  async function excluirEditoraHandler(
    id: number
  ) {
    const confirmar = window.confirm(
      "Deseja realmente excluir esta editora?"
    );

    if (!confirmar) {
      return;
    }

    try {
      await excluirEditora(id);

      notifications.show({
        title: "Sucesso",
        message: "Editora removida com sucesso",
        color: "green",
      });

      carregarEditoras();

    } catch (error) {

      notifications.show({
        title: "Erro",
        message: "Falha ao remover editora",
        color: "red",
      });

      console.error(error);
    }
  }

  return (
    <Box p="md">
      <Group justify="space-between" mb="lg">
        <div>
          <Title order={1}>Editoras</Title>

          <Text c="dimmed" size="sm">
            Gerencie as editoras cadastradas no sistema
          </Text>
        </div>

        <Button
          leftSection={<IconPlus size={18} />}
          onClick={() => setModalAberto(true)}
        >
          Nova Editora
        </Button>
      </Group>

      <Modal
        opened={modalAberto}
        onClose={() => {
          setModalAberto(false);
          setEditoraSelecionada(null);
          setNome("");
          setEndereco("");
          setTelefone("");
        }}
        title={
          editoraSelecionada
            ? "Editar Editora"
            : "Nova Editora"
        }
      >
        <TextInput
          label="Nome"
          value={nome}
          onChange={(e) =>
            setNome(e.currentTarget.value)
          }
        />

        <TextInput
          label="Endereço"
          value={endereco}
          onChange={(e) =>
            setEndereco(e.currentTarget.value)
          }
        />

        <TextInput
          label="Telefone"
          value={telefone}
          onChange={(e) =>
            setTelefone(e.currentTarget.value)
          }
        />

        <Button
          mt="md"
          fullWidth
          onClick={salvarEditora}
        >
          {
            editoraSelecionada
              ? "Atualizar"
              : "Salvar"
          }
        </Button>
      </Modal>

      <DataTable
        records={editoras}
        columns={[
          {
            accessor: "id",
            title: "ID",
            width: 50,
          },
          {
            accessor: "nome",
            title: "Nome",
          },
          {
            accessor: "endereco",
            title: "Endereço",
          },
          {
            accessor: "telefone",
            title: "Telefone",
          },
          {
            accessor: "acoes",
            title: (
              <Text pl={10}>
                Ações
              </Text>
            ),
            width: 100,

            render: (editora) => (
              <Group gap={3} justify="center" grow>

                <ActionIcon
                  color="blue"
                  variant="light"
                  onClick={() => editarEditora(editora)}
                >
                  <IconEdit size={16} />
                </ActionIcon>

                <ActionIcon
                  color="red"
                  variant="light"
                  onClick={() => excluirEditoraHandler(editora.id)}
                >
                  <IconTrash size={16} />
                </ActionIcon>

              </Group>
            ),
          },
        ]}
        noRecordsIcon
        noRecordsText=""
      />
    </Box>
  );
}
