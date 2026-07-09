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
