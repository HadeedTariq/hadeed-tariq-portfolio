export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "RaviNovus Tech",
    role: "Full Stack Developer",
    period: "Apr 2025 — Apr 2026",
    description:
      "Worked on multiple large-scale full stack platforms including e-commerce systems, escrow-based marketplaces, flight booking platform, and dynamic scraping solutions. Built scalable backend architectures using Node.js, PostgreSQL, and TypeScript with strong focus on transactional consistency, performance optimization, and modular system design. Developed complex order management, seller onboarding, chat systems, notifications, webhook integrations, background jobs, and admin dashboards while ensuring data integrity using PostgreSQL transactions and locking mechanisms. Optimized APIs through advanced SQL techniques including joins, CTEs, selective field loading, and asynchronous data fetching strategies. Also handled infrastructure deployment using DigitalOcean, NGINX, PM2, Cloudflare tunneling, and Vercel while collaborating with clients, mentoring interns, and contributing to technical architecture discussions and proposals.",
    tech: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "TypeScript",
      "Golang",
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Docker",
      "NGINX",
      "Cloudflare",
      "DigitalOcean",
      "Puppeteer",
    ],
  },
  {
    company: "Remian AI",
    role: "Associate Software Engineer",
    period: "Aug 2024 — Jan 2025",
    description:
      "Engineered a large-scale SEO-focused platform for a U.S.-based plumbing company supporting 19,000+ cities and generating over 150K dynamic pages. Built automated geographic data processing pipelines using Node.js to clean, structure, and organize large datasets for scalable subdomain-based page generation. Implemented sitemap automation, schema markup, robots.txt optimization, and internal linking strategies to improve search engine crawlability and indexing performance. Managed complete infrastructure deployment using AWS EC2, Route 53, and NGINX while optimizing server performance for high-scale dynamic content delivery and SEO-driven traffic growth.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "AWS EC2",
      "Route 53",
      "NGINX",
      "SEO",
      "REST APIs",
    ],
  },
];
