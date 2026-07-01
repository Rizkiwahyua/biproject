import { apiFetch } from "./api";
import { Berita } from "@/types/berita";
import { ApiCollection, ApiItem } from "@/types/api";

export async function getBeritas(): Promise<Berita[]> {
  const response = await apiFetch<ApiCollection<Berita>>("/beritas");

  return response.data;
}

export async function getBerita(id: number): Promise<Berita> {
  const response = await apiFetch<ApiItem<Berita>>(`/beritas/${id}`);

  return response.data;
}
