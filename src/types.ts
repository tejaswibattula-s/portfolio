export type Project = {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
  image?: string;
};
