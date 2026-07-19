export interface ApiCollection<T> {
  data: T[];
}

export interface ApiItem<T> {
  data: T;
}

export interface Edukasi {
  id: number;
  judul: string;
  deskripsi: string;
  content: string;
  file: string | null;
  file_name: string | null;
  file_extension: string | null;
  link: string | null;
  created_at: string;
}

export interface HomeHero {
  id: number;
  title: string;
  description: string | null;
  image: string;
  sort_order: number;
}

export interface RunningText {
  id: number;
  running_text: string;
  created_at: string;
}

export interface EdukasiVideo {
  id: number;
  judul: string;
  deskripsi: string;
  link: string;
  created_at: string;
  updated_at: string;
}
