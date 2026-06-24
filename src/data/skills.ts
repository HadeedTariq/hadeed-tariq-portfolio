export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI / LLM Engineering",
    icon: "Brain",
    skills: [
      { name: "LangChain", level: 85 },
      { name: "RAG Systems", level: 82 },
      { name: "Vector Databases", level: 78 },
      { name: "Ollama", level: 75 },
      { name: "Hugging Face", level: 72 },
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "Node.js / Express.js", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 86 },
      { name: "TypeScript", level: 84 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Golang", level: 72 },
    ],
  },
  {
    category: "Databases & Infrastructure",
    icon: "Server",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 82 },
      { name: "Docker", level: 78 },
      { name: "NGINX", level: 75 },
      { name: "AWS EC2", level: 74 },
      { name: "Route 53", level: 70 },
      { name: "Cloudflare", level: 76 },
      { name: "DigitalOcean", level: 72 },
    ],
  },
];
