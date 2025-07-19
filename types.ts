
export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  details?: string[];
  link?: string;
  github?: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ChatMessage {
    id: number;
    sender: 'user' | 'ai';
    text: string;
}
