// services/autoresService.ts

import { postgrest } from "../lib/postgrest";
import type { Autor } from "../types/autor";

export async function listarAutores(): Promise<Autor[]> {
  const response = await postgrest.get("/autores");
  return response.data;
}

export async function criarAutor(nome: string) {
  const response = await postgrest.post(
    "/autores",
    { nome },
    {
      headers: {
        Prefer: "return=representation",
      },
    }
  );

  return response.data;
}

export async function atualizarAutor(
  id: number,
  nome: string
) {
  const response = await postgrest.patch(
    `/autores?id=eq.${id}`,
    { nome },
    {
      headers: {
        Prefer: "return=representation",
      },
    }
  );

  return response.data;
}

export async function excluirAutor(id: number) {
  await postgrest.delete(
    `/autores?id=eq.${id}`
  );
}