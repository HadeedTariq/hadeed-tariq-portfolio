export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Understanding Durability in PostgreSQL: The 'D' in ACID",
    excerpt:
      "A deep dive into how PostgreSQL ensures your data survives crashes through Write-Ahead Logging (WAL) and fsync.",
    date: "Jul 18, 2025",
    tag: "PostgreSQL",
    url: "https://dev.to/hadeedtariq/understanding-durability-in-postgresql-the-d-in-acid-1f40",
  },
  {
    title: "Hands-On with P2P Networks: Building a Messaging System",
    excerpt:
      "Step-by-step guide to building a decentralized messaging system, exploring the core principles of peer-to-peer architecture.",
    date: "May 12, 2025",
    tag: "Golang",
    url: "https://dev.to/hadeedtariq/hands-on-with-p2p-networks-building-a-messaging-system-12nd",
  },
  {
    title: "Understanding Isolation in PostgreSQL: The “I” in ACID",
    excerpt:
      "Exploring how PostgreSQL handles concurrent transactions and prevents phenomena like dirty reads and phantom reads.",
    date: "May 4, 2025",
    tag: "PostgreSQL",
    url: "https://dev.to/hadeedtariq/understanding-isolation-in-postgresql-the-i-in-acid-22hk",
  },
  {
    title: "Mastering Database Consistency: Unlocking the 'C' in ACID",
    excerpt:
      "Learn how PostgreSQL maintains data integrity across transactions using constraints, triggers, and foreign keys.",
    date: "Apr 20, 2025",
    tag: "PostgreSQL",
    url: "https://dev.to/hadeedtariq/mastering-database-consistency-unlocking-the-c-in-acid-with-postgresql-4m6p",
  },
  {
    title: "Understanding Atomicity: The First Pillar of ACID",
    excerpt:
      "Breaking down the 'all or nothing' principle of database transactions and how it protects your data from partial updates.",
    date: "Apr 13, 2025",
    tag: "Database",
    url: "https://dev.to/hadeedtariq/understanding-atomicity-the-first-pillar-of-acid-transactions-4gm5",
  },
  {
    title: "From Slow Queries to Fast Responses: Connection Pooling",
    excerpt:
      "Optimize your application performance by reducing the overhead of database connections using pooling techniques.",
    date: "Mar 17, 2025",
    tag: "Performance",
    url: "https://dev.to/hadeedtariq/from-slow-queries-to-fast-responses-the-power-of-connection-pooling-3gpk",
  },
];
