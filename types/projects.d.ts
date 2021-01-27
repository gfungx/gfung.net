export type Project = {
  name: string;
  full_name: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  description: string;
  html_url: string;
  homepage: string | null;
};

export type Projects = Project[];
