export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export interface ContactInfo {
  icon: React.FC;
  title: string;
  content: string;
  link: string | null;
}
