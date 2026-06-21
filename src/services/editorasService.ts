import { postgrest } from "../lib/postgrest";

export async function listarEditoras() {
  const response = await postgrest.get("/editoras");
  return response.data;
}

export async function criarEditora(
  nome: string,
  endereco: string,
  telefone: string
) {
  await postgrest.post("/editoras", {
    nome,
    endereco,
    telefone,
  });
}

export async function atualizarEditora(
  id: number,
  nome: string,
  endereco: string,
  telefone: string
) {
  await postgrest.patch(
    `/editoras?id=eq.${id}`,
    {
      nome,
      endereco,
      telefone,
    }
  );
}

export async function excluirEditora(
  id: number
) {
  await postgrest.delete(
    `/editoras?id=eq.${id}`
  );
}