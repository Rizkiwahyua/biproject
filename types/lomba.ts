export interface Lomba {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;

  release_date: string;
  end_date: string;

  location: string;
  location_type: string;

  status: "upcoming" | "ongoing" | "closed";
  status_label: string;
  status_color: string;
}
