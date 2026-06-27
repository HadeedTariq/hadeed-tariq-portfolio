export interface DemoCredential {
  role: string;
  email?: string;
  phone?: string;
  password: string;
  notes?: string;
}

export interface Project {
  id: number;
  title: string;
  projectType: "personal" | "professional";
  description: string;
  tech: string[];
  gradient: string;

  // Video fields
  videoUrl: string; // Your optimized Cloudinary URL
  videoPosterUrl?: string; // Highly Recommended: Static fallback image before video loads

  // Call-To-Action Links (Optional/Nullable)
  liveDemoUrl?: string; // Optional (some internal/NDA projects might not have a live link)
  githubUrl?: string; // Optional (some client/private company repos won't have a public link)

  // Professional Additions for a High-Tier Portfolio
  role?: string; // e.g., "Frontend Developer", "Fullstack", "Solo Creator"
  featured: boolean; // true/false to highlight your best work at the top of your homepage
  summary?: string;
  demoCredentials?: DemoCredential[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Daily Dev Clone",
    projectType: "personal",
    summary:
      "A high-performance social media platform for developers featuring raw SQL optimization, real-time community squad management, and fault-tolerant transactional architectures.",
    tech: [
      "React",
      "Node",
      "Express",
      "Ts",
      "Postgres",
      "Vercel",
      "OAUTH(Github)",
    ],
    gradient: "from-orange-500 to-amber-600", // A tech/developer focused orange-to-amber gradient
    role: "Fullstack Developer",
    featured: false,

    // Video and Media assets
    videoUrl:
      "https://res.cloudinary.com/lmsproject/video/upload/f_auto,q_auto,vc_auto/v1780828405/export-1780817270160_Encoded_ogfsg4.mp4",

    // Call-To-Action Links
    liveDemoUrl: "https://daily-dev-frontend-pearl.vercel.app/",
    githubUrl: "https://github.com/HadeedTariq/daily-dev",

    // Raw Markdown Description Layout
    description: `# Daily Dev Clone - A Social Media Platform for Developers

## Approach

I chose to use **raw SQL queries** instead of an ORM to have more control over database operations. ORMs often abstract away complexities, limiting deep understanding. By writing raw SQL, I gained a better grasp of how queries work under the hood. Additionally, I focused on **optimizing latency and bandwidth usage**, ensuring efficient data retrieval and storage.

---

## Project Description

**Daily Dev Clone** is a social media platform designed for developers. I built it using **raw SQL**, crafting complex queries, transactions, and fault-tolerant database schemas. I carefully placed **indexes only where necessary** to enhance performance, fine-tuning queries for efficiency.

---
    
## Backend Features

### **Authentication**

- Implemented user registration with customizable preferences.
- Added validations to prevent duplicate accounts.
- Enabled **magic link registration** for simple sign-up.
- Ensured **transactional consistency** when verifying users and building profiles.
- Used **BullMQ with Redis** for asynchronous email delivery, reducing latency.
- Supported **refresh token-based reauthentication** when sessions expire.

### **Follow System**

- Designed SQL transactions to maintain consistency in **Follow/Following** operations.
- Ensured **atomic updates** to user stats and notifications.
- **Enforced constraints** preventing users from following themselves or following the same user multiple times.
- Used a similar strategy for **Unfollow** operations.

### **Posts**

- Posts are the core of this platform, requiring **extensive query optimization**.

#### **Creating Posts**

- Developed an **auto-tag detection** feature to extract relevant tags from content.
- Used a **Set data structure** to avoid redundancy.
- Implemented **SQL injection protection** and data sanitization.

#### **Fetching Posts**

- Optimized post retrieval with **complex joins and fine-tuned queries**.
- Implemented **cursor-based infinite scrolling** for reduced latency.
- Sorted posts based on **user preferences (ID, upvotes, views, etc.).**
- Leveraged **React Query** to minimize backend calls and enhance responsiveness.

#### **Comments & Replies**

- Built a full-fledged **comments and replies** system.
- Used **cursor-based pagination** for handling large numbers of comments efficiently.
- Implemented full **CRUD operations** for comments.

#### **Post & Comment Upvotes**

- Implemented an upvote system for both **posts and comments**.
- Used **PostgreSQL transactions and constraints** to ensure a user can only upvote once.

### **Squads (Developer Communities)**

- Developed **squad creation and management** functionality.
- Optimized **squad post retrieval** by reducing unnecessary columns and applying **cursor-based infinite scrolling**.
- Implemented **squad statistics tracking** (e.g., number of members, posts, and likes).
- Enforced **database constraints** to prevent users from joining a squad multiple times.
- Created **role-based access control** (Admin, Mod, Member) with appropriate permissions.

### **User Profiles**

#### **Streaks**

- Built a streak-tracking system to encourage engagement.
- Ensured **streak updates occur only once per day**.
- Utilized **Redis** to reduce database round trips and improve efficiency.

#### **Profile Customization**

- Allowed users to add **social links, README, company details, etc.**
- Optimized profile update logic to modify **only the changed fields**.
- Enforced that when a user updates their **main profile**, a **new access token** is issued to maintain data consistency.

---

## Summary

This project has been a **deep dive into raw SQL**, allowing me to:

- **Master complex queries, transactions, and database constraints**.
- **Optimize database performance** by fine-tuning queries and reducing unnecessary queries.
- **Implement best practices** in authentication, user interactions, and data security.
- **Utilize caching and pagination** to improve system efficiency and responsiveness.

This project has significantly enhanced my backend development skills and database expertise while focusing on building a scalable, fault-tolerant system. 🚀`,
  },

  {
    id: 2,
    title: "Accoswap",
    projectType: "professional",
    summary:
      "A social account marketplace featuring escrow-based payments, automated ownership verification, offer-driven purchasing, and fault-tolerant transaction orchestration powered by background workers and webhook-driven workflows.",

    tech: [
      "React",
      "Redux Toolkit",
      "ShadCN",
      "Tailwind CSS",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Raw SQL",
      "BullMQ",
      "Trustap",
      "Puppeteer",
      "OpenTelemetry",
      "Cloudflare Tunnel",
    ],

    gradient: "from-indigo-600 to-violet-700",

    role: "Fullstack Developer",

    featured: true,

    videoUrl:
      "https://res.cloudinary.com/lmsproject/video/upload/v1781243160/Export-1781154112927_Encoded_crzgpp.mp4",

    liveDemoUrl: "https://accoswap-web-client.vercel.app/",

    description: `
# Accoswap — Social Account Marketplace with Escrow Payments

## Overview

Accoswap is a marketplace platform that enables users to buy and sell social media accounts through secure ownership verification and escrow-backed payments.

As the sole Fullstack Developer on the project, I designed and implemented both frontend and backend systems, focusing heavily on transaction safety, platform trust, fault tolerance, and scalable architecture.

The platform combines account verification, offer management, buyer-seller communication, escrow transactions, administrative oversight, and automated background processing into a single ecosystem.

---

## Key Responsibilities

- Designed and developed the complete frontend and backend architecture
- Built ownership verification workflows for account sellers
- Engineered escrow-based purchase flows using Trustap
- Designed PostgreSQL schemas and raw SQL data access layers
- Implemented asynchronous processing using BullMQ workers
- Developed administrative tooling for moderation and dispute management
- Integrated webhook-driven financial workflows
- Built notification, chat, and offer management systems

---

## Architecture & System Design

The backend follows a modular architecture organized around:

- adapters/
- api/
- routes/
- db/
- jobs/
- workers/

The system was designed around separation of concerns and single responsibility principles.

Major architectural decisions include:

- Event-driven background processing using BullMQ
- Webhook-based transaction orchestration
- Modular verification and escrow services
- Scalable notification infrastructure
- Fault-tolerant worker execution with retries
- PostgreSQL-driven relational data modeling

This architecture enabled independent scaling of asynchronous workloads while maintaining a clean and maintainable codebase.

---

## Automated Ownership Verification

One of the core trust mechanisms of the platform is account ownership verification.

### Automated Verification Flow

To reduce manual review effort, I developed a Puppeteer-powered verification system executed through BullMQ workers.

Process:

1. Seller receives a unique verification code.
2. Seller places the code within their social media profile bio.
3. Background workers periodically inspect the profile.
4. Verification status is automatically updated.
5. Users and administrators receive notifications and email updates.

Benefits:

- Reduced manual verification workload
- Faster listing approvals
- Improved marketplace trust
- Fully automated verification workflow

### Manual Verification Flow

For platforms where automation is restricted, administrators can manually review uploaded ownership evidence and approve listings through the admin dashboard.

This hybrid approach ensures platform-wide verification coverage.

---

## Dynamic Notification System

To support future scalability, I designed a generic notification architecture using PostgreSQL.

The notification model stores:

- Notification type
- Related entity ID
- Dynamic metadata (JSON)

Examples include:

- Verification updates
- Offer activity
- Purchase progress
- Escrow events
- Dispute status changes

This approach eliminates the need for dedicated notification tables and allows new notification types to be introduced without schema changes.

---

## Offer & Communication System

The platform includes a built-in buyer-seller communication workflow.

Key features:

- Internal messaging system
- Offer negotiation process
- Offer acceptance workflow
- Purchase restrictions based on accepted offers

Business rule enforcement ensures that purchases can only proceed through approved offers, reducing transaction ambiguity and increasing platform reliability.

---

## Escrow Purchase System (Trustap Integration)

The escrow workflow is one of the most sophisticated systems within the platform.

### Purchase Initiation

- Buyers initiate transactions through Trustap's Face-to-Face escrow model.
- Funds remain secured until ownership transfer is completed.
- Payment processing and compliance requirements are handled by Trustap.

### Webhook Processing

Using Cloudflare Tunnel during development, webhook endpoints were exposed for Trustap event delivery.

Supported events include:

- Payment received
- Deposit confirmation
- Cancellation events
- Dispute events

Each webhook triggers:

- Database updates
- Status transitions
- Notification generation
- Administrative workflows

### Ownership Transfer Workflow

The transfer sequence follows:

Seller → Admin Escrow → Buyer

Administrators verify the transfer process before final completion.

### Automated Fund Release

BullMQ scheduled jobs monitor transaction timelines.

After the escrow holding period:

- Trustap releases funds to the seller
- Platform commissions are processed
- Transaction records are finalized

This workflow combines financial safety, asynchronous processing, and administrative oversight into a reliable marketplace transaction system.

---

## Admin Dashboard

Built a dedicated React-based administration panel providing operational control over the platform.

Capabilities include:

- Ownership verification management
- Escrow transfer monitoring
- User moderation
- Listing moderation
- Dispute handling
- Customer support operations
- Notification management
- CMS-powered email communication
- Featured listing controls

The dashboard enabled efficient platform administration while maintaining transparency across transaction workflows.

---

## Background Jobs & Automation

Implemented multiple BullMQ workers and scheduled jobs responsible for:

- Verification retries
- Purchase status updates
- Escrow monitoring
- Delayed fund release workflows
- Notification delivery
- Data cleanup operations

These systems ensure platform resilience even when temporary failures occur.

---

## Engineering Highlights

- Designed complete escrow-based transaction architecture
- Built automated ownership verification using Puppeteer
- Integrated Trustap escrow services and webhooks
- Developed fault-tolerant background worker infrastructure
- Engineered dynamic notification architecture
- Implemented chat and offer management systems
- Built full administrative tooling for marketplace operations
- Leveraged PostgreSQL and raw SQL for performance-focused data access

---

## Key Takeaways

This project significantly strengthened my understanding of system design, asynchronous workflows, financial transaction orchestration, and trust-focused marketplace architecture.

By combining automation, background processing, escrow payments, administrative oversight, and scalable database design, I built a production-grade marketplace capable of handling complex transactional workflows while maintaining reliability and user trust.

---

## Repository Availability

This project was originally developed as part of a company-owned product.

The source code resides in a private organizational repository and cannot be publicly shared. The live deployment is provided solely to showcase the product's functionality and engineering work after the project was later discontinued.
`,
    demoCredentials: [
      {
        role: "Admin",
        email: "joey_cole39@yahoo.com ",
        password: "Password@123",
        notes:
          "Recruiter can  test admin account with access to marketplace functionality. The admin password is admin@124",
      },
    ],
  },
  {
    id: 3,
    title: "Davis Plumbing & Irrigation",
    projectType: "professional",
    description: `
# Davis Plumbing & Irrigation – Large-Scale SEO Platform for Nationwide Service Discovery

## Overview

Davis Plumbing & Irrigation is one of the most technically challenging production projects I have worked on. The objective was to build a highly scalable SEO-driven plumbing platform capable of serving customers across the entire United States.

The platform was designed to support all **50 U.S. states**, more than **19,000 cities**, and **18 plumbing services per city**, resulting in approximately **150,000–200,000 dynamically generated pages**. Every page required unique metadata, structured content, schema markup, internal linking, and optimized routing while maintaining fast server-side rendering.

I was responsible for designing and implementing the complete backend architecture, dynamic routing system, SEO infrastructure, data processing pipeline, sitemap automation, deployment, and server configuration.

---

# Technical Challenges

## 1. Building a Geographic Data Pipeline

The project began without structured datasets for U.S. states and cities.

To solve this, I:

- Collected geographic datasets from multiple open-source sources.
- Removed duplicate records.
- Normalized inconsistent city names.
- Merged state, city, and ZIP code information.
- Created reusable JSON datasets consumed by the application.
- Built data-processing utilities using Node.js and the File System (fs) module.

This preprocessing layer became the foundation for every dynamically generated page.

---

## 2. Dynamic Location Routing

The original production system was built around wildcard subdomains to create SEO-friendly URLs.

Examples:

- tx.domain.com
- ca.domain.com
- dallas-tx.domain.com
- houston-tx.domain.com

Every request was dynamically parsed to determine:

- Country
- State
- City
- Requested service

without requiring separate route definitions for thousands of pages.

This allowed a single Express application to dynamically render hundreds of thousands of unique pages while keeping the routing layer extremely lightweight.

For the portfolio deployment, the project has been adapted to **path-based routing** because the default Vercel domain does not support wildcard subdomains. The production architecture originally relied on Route 53 wildcard DNS records.

Examples:

- /state/tx
- /city/dallas-tx
- /city/dallas-tx/drain-cleaning

The underlying rendering logic remains identical.

---

## 3. Large-Scale Dynamic Rendering

Instead of generating static HTML files, every page is rendered dynamically using:

- Express.js
- Pug Templates
- Server-Side Rendering (SSR)

The rendering engine dynamically injects:

- SEO metadata
- Page titles
- Meta descriptions
- Service-specific content
- FAQs
- Review sections
- Location-aware content
- Schema markup

based entirely on the requested location.

---

## 4. SEO Architecture

One of the largest engineering challenges was ensuring that search engines could efficiently discover and crawl such a large number of pages.

The SEO strategy included:

- Automated XML sitemap generation
- Sitemap index generation
- Robots.txt configuration
- Internal linking architecture
- State-to-city navigation
- Nearby city recommendations
- Dynamic Schema.org structured data
- Canonical URL generation
- Location-specific metadata
- Crawl optimization

This significantly improved crawlability and indexing across the platform.

---

## 5. Internal Linking Strategy

The project implements a hierarchical internal linking structure.

Homepage

↓

All States

↓

Cities Within Each State

↓

Nearby Cities

↓

Individual Plumbing Services

This architecture helps both users and search engine crawlers efficiently navigate the entire website while distributing link authority across thousands of pages.

---

## 6. Nearby City Recommendation Engine

Each city page dynamically calculates nearby cities using ZIP code proximity.

The application:

- identifies the current city's ZIP code,
- calculates an acceptable ZIP code range,
- filters neighboring cities,
- generates SEO-friendly navigation links.

This improves user navigation while strengthening internal linking.

---

## 7. Dynamic Sitemap Generation

Because manually maintaining thousands of URLs is impractical, I developed an automated sitemap generation system.

The generator:

- reads geographic datasets,
- generates sitemap indexes,
- creates state-specific XML sitemaps,
- removes duplicate URLs,
- automatically produces valid XML files ready for search engine submission.

This enables efficient indexing of a very large dynamic website.

---

## 8. Infrastructure & Deployment

For the production deployment, I configured the complete hosting infrastructure.

Technologies included:

- AWS EC2
- Nginx
- Route 53
- SSL Configuration
- Reverse Proxy Configuration
- Wildcard Subdomain Routing
- Server Optimization

The production environment supported wildcard DNS routing required for the subdomain architecture.

For this portfolio demonstration, the application has been deployed to Vercel using path-based routing so the project can be demonstrated publicly without requiring a custom domain and wildcard DNS configuration.

---

# Engineering Highlights

- Designed a scalable routing architecture capable of serving 150K–200K dynamic pages.
- Built a complete geographic data-processing pipeline.
- Implemented automated XML sitemap generation.
- Developed dynamic SEO metadata and Schema.org generation.
- Designed hierarchical internal linking for improved crawlability.
- Implemented ZIP code–based nearby city recommendations.
- Configured production deployment using AWS EC2, Nginx, and Route 53.
- Adapted the production architecture for Vercel deployment while preserving application behavior.

---

# Technologies Used

- Node.js
- Express.js
- JavaScript
- Pug
- HTML
- CSS
- XML Sitemap Generation
- Schema.org
- Node.js File System (fs)
- AWS EC2
- Nginx
- Route 53
- Server-Side Rendering (SSR)
- SEO Optimization
- Dynamic Routing

---

# Note

The source code for this project is proprietary because it was developed for a company and is not publicly available.

The public demo has been adapted for portfolio purposes. Since wildcard DNS routing is unavailable on the default Vercel domain, the demo uses path-based URLs instead of the original production subdomain architecture while preserving the application's functionality and rendering logic.
`,
    tech: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Pug",
      "HTML",
      "CSS",
      "AWS EC2",
      "Nginx",
      "Route 53",
      "Server-Side Rendering",
      "SEO",
      "Schema.org",
      "XML Sitemaps",
      "File System (fs)",
    ],
    gradient: "from-blue-600 via-sky-500 to-cyan-500",
    videoUrl:
      "https://res.cloudinary.com/lmsproject/video/upload/v1781694195/Export-1781608450910_Encoded_pdxapy.mp4",
    liveDemoUrl: "https://davis-plumbing-and-irrigation.vercel.app/",
    role: "Full Stack Developer",
    featured: true,
    summary:
      "Built a nationwide SEO-driven plumbing platform capable of dynamically serving approximately 150K–200K pages across 50 U.S. states and 19,000+ cities using Node.js, Express, Pug, AWS, and advanced SEO automation.",
  },
  {
    id: 5,
    title: "Editex",
    projectType: "personal",
    summary:
      "A browser-based JavaScript code editor featuring a hierarchical file system, project collaboration, secure authentication, and real-time code execution powered by an online compiler API.",
    tech: [
      "React",
      "NestJS",
      "MongoDB",
      "CodeMirror",
      "JWT",
      "Tailwind CSS",
      "Shadcn UI",
      "Online Compiler API",
      "Vercel",
    ],
    gradient: "from-emerald-500 to-teal-600",
    role: "Fullstack Developer",
    featured: false,

    videoUrl:
      "https://res.cloudinary.com/lmsproject/video/upload/v1782481505/editex-final-video_xxrq7i.mp4",

    liveDemoUrl: "https://editex-frontend.vercel.app/",
    githubUrl: "https://github.com/HadeedTariq/editex",

    demoCredentials: [
      {
        email: "computeranalog351@gmail.com",
        password: "Hadeed@1234",
        role: "user",
      },
    ],

    description: `# Editex - JavaScript Code Editor

## Overview

Editex is a full-stack JavaScript code editor built to simulate the workflow of a lightweight online IDE. The application allows authenticated users to create projects, organize files and folders, write JavaScript using a professional editor, execute code directly from the browser, and collaborate with other developers through contributor management and merge requests.

The primary focus of the project was designing the backend architecture, implementing a hierarchical file system, and building a scalable project management workflow.

---

## Technical Architecture

### Authentication

- JWT-based authentication
- Secure login and registration flow
- Protected backend routes using NestJS Guards
- User session validation
- Authorization for project ownership and collaboration

---

## Project Management

Users can:

- Create multiple projects
- Update project information
- Delete projects
- Configure project visibility (Private/Public)
- Browse public projects
- View project-specific notifications

The backend enforces ownership checks before allowing sensitive operations.

---

## Hierarchical File System

One of the core engineering challenges was implementing a hierarchical project structure similar to a lightweight IDE.

The application supports:

- Folder creation
- Nested file management
- Code persistence
- Folder updates
- Dynamic project tree rendering

Each project maintains an organized directory structure that allows users to separate code into multiple folders and files instead of working inside a single editor.

---

## Code Editor

The editor is built using **CodeMirror**, providing features expected from a modern development environment:

- JavaScript syntax highlighting
- Auto indentation
- Professional editing experience
- Fast rendering for larger files
- Live editing with persistent storage

Code changes are saved to the backend, allowing projects to be resumed at any time.

---

## Code Execution Pipeline

Instead of executing code locally, Editex integrates with an Online Compiler API.

Execution workflow:

1. User writes JavaScript code.
2. Source code is sent securely to the backend.
3. NestJS communicates with the compiler service.
4. Execution results are returned to the client.
5. Console output is displayed inside the application.

This architecture keeps execution isolated from the frontend while providing a smooth development experience.

---

## Collaboration System

Projects support collaborative development through contributor management.

Implemented features include:

- Contributor assignment
- Merge request workflow
- Project notifications
- Notification status management

This allows multiple developers to participate in the same project while maintaining controlled access.

---

## Backend Design

The backend is developed using NestJS with a modular architecture.

Major modules include:

- Authentication
- Projects
- Files & Folders
- Collaboration
- Notifications

MongoDB stores project metadata, user information, folder hierarchies, files, and notification data.

---

## Frontend

The frontend is built with React and focuses on responsiveness and usability.

Implemented features include:

- Responsive dashboard
- Project explorer
- Dynamic file tree
- Integrated code editor
- Console output viewer
- Authentication pages
- Project management interface
- Notification system

The UI is styled using Tailwind CSS and Shadcn UI components.

---

## Tech Stack

### Frontend

- React
- Tailwind CSS
- Shadcn UI
- CodeMirror

### Backend

- NestJS
- JWT Authentication

### Database

- MongoDB

### Services

- Online Compiler API

### Deployment

- Vercel

---

## Engineering Highlights

- Designed a modular NestJS backend architecture.
- Built a hierarchical file and folder management system.
- Integrated CodeMirror for a professional editing experience.
- Implemented secure JWT authentication and authorization.
- Developed a complete project collaboration workflow.
- Connected the editor to an external compiler service for browser-based code execution.
- Built reusable React components with responsive layouts using Tailwind CSS and Shadcn UI.
`,
  },
  {
    id: 4,
    title: "Real Estate Scraper",
    projectType: "professional",
    summary:
      "A scalable multi-provider real estate scraping platform featuring dynamic scraper selection, adaptive UI generation, Playwright automation, Oxylabs proxy rotation, and high-performance CSV data extraction.",

    tech: [
      "Node.js",
      "Express",
      "EJS",
      "Playwright",
      "JavaScript",
      "CSV",
      "Oxylabs",
    ],

    gradient: "from-emerald-500 to-cyan-600",

    role: "Fullstack Developer",

    featured: true,

    videoUrl:
      "https://res.cloudinary.com/lmsproject/video/upload/v1781962327/Real-state-scraper_Encoded_bih2kj.mp4",

    description: `# Real Estate Scraper

A scalable enterprise-grade real estate scraping platform built to collect structured property data from multiple real estate providers through a unified web interface.

Unlike traditional scraping tools that are tightly coupled to a single website, this application dynamically adapts both its backend workflow and frontend configuration based on the selected provider. Users can configure provider-specific search parameters including locations, page ranges, and custom filters before launching a scraping session.

The architecture was designed around modular scraper implementations, making it straightforward to support additional real estate platforms without introducing breaking changes to the existing system.

---

# Key Features

- Multi-provider real estate scraping
- Dynamic provider selection
- Adaptive UI generation
- Site-specific scraping workflows
- Configurable search parameters
- CSV data export
- Playwright browser automation
- Proxy rotation with Oxylabs
- Residential and Datacenter proxy support
- Optimized network request interception
- Modular scraper architecture
- Easily extensible provider system

---

# Supported Platforms

The application was designed to support multiple leading real estate providers through isolated scraper implementations.

Current providers include:

- Zillow
- Redfin
- Corcoran

The architecture allows new providers to be integrated with minimal effort by implementing dedicated scraper modules.

---

# Tech Stack

## Backend

- Node.js
- Express.js
- EJS

## Browser Automation

- Playwright

## Data Processing

- CSV Generation

## Proxy Infrastructure

- Oxylabs Residential Proxies
- Oxylabs Datacenter Proxies

---

# Architecture

The project follows a modular architecture where every supported provider owns its own scraping implementation.

\`\`\`
User
   │
   ▼
Dynamic Web Interface
   │
   ▼
Route Resolver
   │
   ▼
Selected Scraper
   │
   ├── Zillow
   ├── Redfin
   ├── Corcoran
   └── ...
         │
         ▼
Playwright Browser
         │
         ▼
Optimized Page Loading
         │
         ▼
Extract Property Data
         │
         ▼
Normalize Results
         │
         ▼
CSV Export
\`\`\`

Every scraper encapsulates provider-specific logic, resulting in a clean separation of concerns and excellent maintainability.

---

# Dynamic User Interface

One of the core engineering challenges was designing a frontend capable of adapting to different providers.

Instead of maintaining separate applications for every website, the platform dynamically renders provider-specific configuration forms based on the selected scraper.

This allows users to configure only the parameters relevant to the chosen provider while keeping the user experience consistent across the platform.

---

# Performance Optimizations

A significant focus of this project was improving scraping performance while reducing bandwidth consumption.

Using Playwright's request interception capabilities, unnecessary resources are blocked before they are downloaded.

Blocked resources include:

- Images
- Videos
- Fonts
- Media assets
- Analytics scripts
- Tracking pixels
- Advertising resources

Examples include:

- Google Tag Manager
- DoubleClick
- Facebook Pixel
- Hotjar

This optimization provides several benefits:

- Faster browser startup
- Lower bandwidth usage
- Reduced CPU consumption
- Improved scraping throughput
- Faster page rendering

---

# Proxy Management

Large-scale scraping requires reliable IP management to reduce request failures.

The platform integrates Oxylabs proxy services with support for:

- Residential Proxies
- Datacenter Proxies

Proxy rotation improves:

- Scraping reliability
- Long-running scraping sessions
- Request success rate
- Protection against temporary IP blocking

---

# Engineering Practices

The application was developed following clean architecture principles with a strong emphasis on maintainability and scalability.

Key engineering decisions include:

- Dedicated scraper implementation per provider
- Centralized routing layer
- Dynamic scraper resolution
- Shared utility modules
- Independent parsing logic
- Reusable browser helpers
- Modular project structure

Adding a new provider generally requires only:

1. Creating a scraper module.
2. Registering the scraper.
3. Defining its configuration schema.
4. Implementing provider-specific extraction logic.

No major architectural changes are required.

---

# Data Extraction Workflow

\`\`\`
Select Provider
        │
        ▼
Configure Dynamic Form
        │
        ▼
Launch Browser
        │
        ▼
Configure Proxy
        │
        ▼
Block Unnecessary Resources
        │
        ▼
Navigate Property Listings
        │
        ▼
Extract Structured Data
        │
        ▼
Normalize Results
        │
        ▼
Generate CSV
        │
        ▼
Download Dataset
\`\`\`

---

# Export

After the scraping process completes, extracted property information is normalized and exported as CSV files, allowing seamless integration with spreadsheets, databases, analytics platforms, and downstream data pipelines.

---

# Highlights

- Enterprise-ready modular architecture
- Multi-provider scraping platform
- Dynamic frontend generation
- Playwright-powered browser automation
- Oxylabs proxy integration
- Residential & Datacenter proxy support
- Optimized network interception
- Reduced bandwidth consumption
- High-performance CSV export
- Easily extensible provider architecture
- Clean separation of concerns
- Scalable and maintainable codebase`,
  },
];
