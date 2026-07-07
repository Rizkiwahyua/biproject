import { getLombas } from "@/lib/lomba";
import DetailLombaClient from "./DetailLombaClient";

export async function generateStaticParams() {
  try {
    const lombas = await getLombas();
    const params = lombas.map((lomba) => ({
      id: String(lomba.id),
    }));
    return [...params, { id: "detail" }];
  } catch (error) {
    console.error("Gagal membuat static params lomba:", error);
    return [{ id: "detail" }];
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailLombaPage({ params }: PageProps) {
  const { id } = await params;
  return <DetailLombaClient id={id} />;
}
