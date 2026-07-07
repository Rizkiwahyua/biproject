import { getLombas } from "@/lib/lomba";
import RegistrasiLombaClient from "./RegistrasiLombaClient";

export async function generateStaticParams() {
  try {
    const lombas = await getLombas();
    const params = lombas.map((lomba) => ({
      id: String(lomba.id),
    }));
    return [...params, { id: "detail" }];
  } catch (error) {
    console.error("Gagal membuat static params registrasi lomba:", error);
    return [{ id: "detail" }];
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RegistrasiLombaPage({ params }: PageProps) {
  const { id } = await params;
  return <RegistrasiLombaClient id={id} />;
}
