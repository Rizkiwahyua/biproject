import { getBeritas } from "@/lib/berita";
import DetailBeritaClient from "./DetailBeritaClient";

export async function generateStaticParams() {
  try {
    const beritas = await getBeritas();
    const params = beritas.map((berita) => ({
      id: String(berita.id),
    }));
    return [...params, { id: "detail" }];
  } catch (error) {
    console.error("Gagal membuat static params berita:", error);
    return [{ id: "detail" }];
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailBeritaPage({ params }: PageProps) {
  const { id } = await params;
  return <DetailBeritaClient id={id} />;
}
