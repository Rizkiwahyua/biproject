import { getEdukasis } from "@/lib/edukasi";
import DetailEdukasiClient from "./DetailEdukasiClient";

export async function generateStaticParams() {
  try {
    const edukasis = await getEdukasis();
    const params = edukasis.map((edukasi) => ({
      id: String(edukasi.id),
    }));
    return [...params, { id: "detail" }];
  } catch (error) {
    console.error("Gagal membuat static params edukasi:", error);
    return [{ id: "detail" }];
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailEdukasiPage({ params }: PageProps) {
  const { id } = await params;
  return <DetailEdukasiClient id={id} />;
}
