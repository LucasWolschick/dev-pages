export interface UserExperience {
  place: string;
  from: string;
  to: string;
  description: string;
}

export interface UserProject {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface User {
  id: number;
  name: string;
  socials: {
    email?: string;
    github?: string;
    linkedin?: string;
  };
  bio: string;
  skills: string[];
  experiences: UserExperience[];
  projects: UserProject[];
}
