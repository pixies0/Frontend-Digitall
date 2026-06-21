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
import { listarUnidades, atualizarUnidade, criarUnidade, excluirUnidade } from "../../services/unidadesService";

import type { Unidade } from "../../types/unidade";

export default function UnidadesPage() {
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [unidadeSelecionada, setUnidadeSelecionada] =
    useState<Unidade | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");

  useEffect(() => {
    carregarUnidades();
  }, []);

  async function carregarUnidades() {
    try {
      const dados = await listarUnidades();
      setUnidades(dados);
    } catch (error) {
      console.error(error);
    }
  }

  async function salvarUnidade() {
    try {

      if (unidadeSelecionada) {

        await atualizarUnidade(
          unidadeSelecionada.id,
          nome, endereco
        );

        notifications.show({
          title: "Sucesso",
          message:
            "Unidade atualizada com sucesso",
          color: "green",
        });

      } else {

        await criarUnidade(nome, endereco);

        notifications.show({
          title: "Sucesso",
          message:
            "Unidade cadastrada com sucesso",
          color: "green",
        });

      }

      setNome("");
      setUnidadeSelecionada(null);
      setModalAberto(false);

      carregarUnidades();

    } catch (error) {

      notifications.show({
        title: "Erro",
        message:
          "Falha ao salvar unidade",
        color: "red",
      });

      console.error(error);
    }
  }

  function editarUnidade(unidade: Unidade) {
    console.log("Unidade:", unidade);

    setUnidadeSelecionada(unidade);
    setNome(unidade.nome);
    setEndereco(unidade.endereco);
    setModalAberto(true);
  }

  async function excluirUnidadeHandler(
    id: number
  ) {
    const confirmar = window.confirm(
      "Deseja realmente excluir esta Unidade?"
    );

    if (!confirmar) {
      return;
    }

    try {
      await excluirUnidade(id);

      notifications.show({
        title: "Sucesso",
        message: "Editora removida com sucesso",
        color: "green",
      });

      carregarUnidades();

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
          <Title order={1}>Unidades</Title>

          <Text c="dimmed" size="sm">
            Gerencie as unidades cadastradas no sistema
          </Text>
        </div>

        <Button
          leftSection={<IconPlus size={18} />}
          onClick={() => setModalAberto(true)}
        >
          Nova Unidade
        </Button>
      </Group>

      <Modal
        opened={modalAberto}
        onClose={() => {
          setModalAberto(false);
          setUnidadeSelecionada(null);
          setNome("");
          setEndereco("");
        }}
        title={
          unidadeSelecionada
            ? "Editar Unidade"
            : "Nova Unidade"
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


        <Button
          mt="md"
          fullWidth
          onClick={salvarUnidade}
        >
          {
            unidadeSelecionada
              ? "Atualizar"
              : "Salvar"
          }
        </Button>
      </Modal>

      <DataTable
        records={unidades}
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
            accessor: "acoes",
            title: (
              <Text pl={10}>
                Ações
              </Text>
            ),
            width: 100,

            render: (unidade) => (
              <Group gap={3} justify="center" grow>

                <ActionIcon
                  color="blue"
                  variant="light"
                  onClick={() => editarUnidade(unidade)}
                >
                  <IconEdit size={16} />
                </ActionIcon>

                <ActionIcon
                  color="red"
                  variant="light"
                  onClick={() => excluirUnidadeHandler(unidade.id)}
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
