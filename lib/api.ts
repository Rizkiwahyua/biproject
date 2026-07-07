const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://cbprupiahlsm.id/admin-cbp/public/api/v1";

export async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }

  return response.json();
}
