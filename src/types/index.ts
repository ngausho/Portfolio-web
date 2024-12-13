export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}