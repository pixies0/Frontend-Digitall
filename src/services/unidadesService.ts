import { postgrest } from "../lib/postgrest";

export async function listarUnidades() {
  const response = await postgrest.get("/unidades");
  return response.data;
}

export async function criarUnidade(
  nome: string,
  endereco: string
) {
  await postgrest.post("/unidades", {
    nome,
    endereco,
  });
}

export async function atualizarUnidade(
  id: number,
  nome: string,
  endereco: string
) {
  await postgrest.patch(
    `/unidades?id=eq.${id}`,
    {
      nome,
      endereco,
    }
  );
}

export async function excluirUnidade(
  id: number
) {
  await postgrest.delete(
    `/unidades?id=eq.${id}`
  );
}