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

export interface YoutubeLink {
  id: number;
  youtube_url: string;
}

export interface HomeSettingResponse {
  heroes: HomeHero[];
  youtube_urls: string[];
}
