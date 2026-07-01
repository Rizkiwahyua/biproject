export interface Berita {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  source: string;
  content: string;
  
  image: string | null;

  published_at: string;
}
