import { apiFetch } from "./api";
import { Edukasi } from "@/types/api";
import { ApiCollection, ApiItem } from "@/types/api";

export async function getEdukasis(): Promise<Edukasi[]> {
  const response = await apiFetch<ApiCollection<Edukasi>>("/edukasis");

  return response.data;
}

export async function getEdukasi(id: number): Promise<Edukasi> {
  const response = await apiFetch<ApiItem<Edukasi>>(`/edukasis/${id}`);

  return response.data;
}
