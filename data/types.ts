export type Project = {
  id: number;
  title: string;
  category: "design" | "brand" | "photos";
  thumbnail: string;
  images: string[];
  description: string;
  client: string;
  industry: string;
  technologies: string;
  date: string;
  url: string;
};
