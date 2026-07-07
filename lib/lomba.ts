import { apiFetch } from "./api";
import { Lomba } from "@/types/lomba";
import { ApiCollection, ApiItem } from "@/types/api";

const API_URL_POST = process.env.NEXT_PUBLIC_API_URL || "https://cbprupiahlsm.id/admin-cbp/public/api/v1";

export async function getLombas(): Promise<Lomba[]> {
  const response = await apiFetch<ApiCollection<Lomba>>("/lombas");

  return response.data;
}

export async function getLomba(id: number): Promise<Lomba> {
  const response = await apiFetch<ApiItem<Lomba>>(`/lombas/${id}`);

  return response.data;
}

export async function registerLomba(formData: FormData) {
  const response = await fetch(`${API_URL_POST}/lomba-registrations`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}
