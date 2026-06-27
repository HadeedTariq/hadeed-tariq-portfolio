"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Star, Layers, User } from "lucide-react";

import { projects } from "@/data/projects";
import { GithubIcon } from "../ui/icons";
import { VideoPlayer } from "./VideoPlayer";
import { ProjectNotFound } from "./ProjectNotFound";
import { DemoCredentials } from "./ProjectDemoCredentials";

// Lazy-load the markdown preview to keep the initial bundle light
const MarkdownPreview = dynamic(
  () => import("@uiw/react-md-editor").then((m) => m.default.Markdown),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-4 animate-pulse rounded-md bg-muted/30"
            style={{ width: `${85 + Math.random() * 15}%` }}
          />
        ))}
      </div>
    ),
  },
);

// ─── Animation config ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ─── Cloudinary URL builder ───────────────────────────────────────────────────
function buildVideoUrl(url: string) {
  return url.replace(
    /\/upload\/(f_auto,q_auto,vc_auto\/)?/,
    "/upload/f_auto,q_auto,vc_auto,w_1400/",
  );
}

function buildPosterUrl(url: string, fallback?: string) {
  if (fallback) return fallback;
  return url.replace(
    /\/upload\/(.*)\.(mp4|webm|mov)$/,
    "/upload/w_1400,q_auto,f_auto,so_0/$1.jpg",
  );
}

// ─── TechBadge ────────────────────────────────────────────────────────────────
interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white/70
        px-4
        py-2.5
        text-sm
        font-medium
        text-slate-700
        backdrop-blur-md
        transition-all
        duration-300

        hover:border-cyan-400/40
        hover:shadow-xl
        hover:shadow-cyan-500/10

        dark:border-zinc-800
        dark:bg-zinc-900/60
        dark:text-zinc-200
      "
    >
      <span
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(135deg, oklch(0.75 0.18 195 / 0.08), transparent)",
        }}
      />

      <span className="relative z-10">{label}</span>
    </motion.div>
  );
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────
interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{
          background: "oklch(0.75 0.18 195)",
        }}
      />

      <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
        {children}
      </h2>
    </div>
  );
}

// ─── MetaChip ─────────────────────────────────────────────────────────────────
function MetaChip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl border border-border/40 bg-muted/10 px-4 py-3">
      <div className="flex items-center gap-1.5 text-muted-foreground/40">
        <Icon className="h-3 w-3" />
        <span className="font-mono text-[10px] uppercase tracking-widest">
          {label}
        </span>
      </div>
      <span className="text-sm font-medium text-foreground/80">{value}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <ProjectNotFound />;

  const videoSrc = buildVideoUrl(project.videoUrl);
  const poster = buildPosterUrl(project.videoUrl, project.videoPosterUrl);
  const hasLinks = project.liveDemoUrl || project.githubUrl;

  return (
    <main className="min-h-screen pb-32">
      {/* ── Ambient gradient from project colour ── */}
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 h-[500px] bg-gradient-to-b ${project.gradient} opacity-[0.04] blur-3xl`}
        aria-hidden
      />

      <div className="mx-auto max-w-4xl px-6 pt-2">
        {/* ── Back nav ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-[13px] text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="font-mono tracking-wide">All Projects</span>
          </Link>
        </motion.div>

        {/* ── Hero header ───────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-6 mb-6"
        >
          {/* Featured badge */}
          {project.featured && (
            <motion.div variants={fadeUp as any} custom={0} className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary/70">
                <Star className="h-2.5 w-2.5 fill-current" />
                Featured Project
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp as any}
            custom={0.05}
            className="text-3xl font-bold tracking-tight  text-primary"
          >
            {project.title}
          </motion.h1>

          {project.summary && (
            <motion.p
              variants={fadeUp as any}
              custom={0.1}
              className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground/70 my-2"
            >
              {project.summary}
            </motion.p>
          )}

          {/* Meta chips row */}
          <motion.div
            variants={fadeUp as any}
            custom={0.15}
            className="flex flex-wrap gap-3"
          >
            {project.role && (
              <MetaChip icon={User} label="Role" value={project.role} />
            )}
            <MetaChip
              icon={Layers}
              label="Stack"
              value={`${project.tech.length} technologies`}
            />
          </motion.div>
        </motion.div>

        {/* ── Video Player ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <VideoPlayer src={videoSrc} poster={poster} title={project.title} />
        </motion.div>

        {/* ── Tech Stack ────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-8 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-15 blur-3xl"
            style={{
              background: "oklch(0.75 0.18 195)",
            }}
          />

          <div className="relative z-10 flex items-center justify-between max-[400px]:flex-col max-[400px]:items-start">
            <SectionLabel>Technologies</SectionLabel>

            <div
              className="rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: "oklch(0.75 0.18 195 / 0.25)",
                background: "oklch(0.75 0.18 195 / 0.08)",
                color: "oklch(0.75 0.18 195)",
              }}
            >
              {project.tech.length} Technologies
            </div>
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          <motion.div
            variants={stagger}
            className="relative z-10 flex flex-wrap gap-3 mt-6"
          >
            {project.tech.map((tech) => (
              <motion.div
                key={tech}
                variants={fadeUp as any}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <TechBadge label={tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {hasLinks && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-8 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div
              className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full opacity-15 blur-3xl"
              style={{
                background: "oklch(0.75 0.18 195)",
              }}
            />

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Project Links
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  Explore the live application or inspect the source code to see
                  the architecture, implementation, and engineering decisions
                  behind this project.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.liveDemoUrl && (
                  <motion.a
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              group
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-cyan-500
              to-sky-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-cyan-500/20
              transition-all
              duration-300
              hover:shadow-xl
              hover:shadow-cyan-500/30
            "
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    Live Demo
                  </motion.a>
                )}

                {project.githubUrl && (
                  <motion.a
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              group
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white/70
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-700
              backdrop-blur-md
              transition-all
              duration-300

              hover:border-cyan-400/40
              hover:text-cyan-600
              hover:shadow-lg
              hover:shadow-cyan-500/10

              dark:border-zinc-800
              dark:bg-zinc-900/60
              dark:text-zinc-200
              dark:hover:text-cyan-300
            "
                  >
                    <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                    Source Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* ── Description (Markdown) ────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3"
        >
          <SectionLabel>Project Overview</SectionLabel>

          <div
            className="
              prose prose-neutral dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
              prose-p:text-[14px] prose-p:leading-relaxed prose-p:text-muted-foreground/75
              prose-li:text-[14px] prose-li:text-muted-foreground/75
              prose-code:rounded-md prose-code:border prose-code:border-border/50
              prose-code:bg-muted/30 prose-code:px-1.5 prose-code:py-0.5
              prose-code:font-mono prose-code:text-[12px] prose-code:text-foreground/80
              prose-pre:rounded-xl prose-pre:border prose-pre:border-border/40
              prose-pre:bg-muted/20 prose-pre:backdrop-blur-sm
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-blockquote:border-l-border/50 prose-blockquote:text-muted-foreground/60
              [&_.wmde-markdown]:bg-transparent
              [&_.w-md-editor-preview]:bg-transparent
            "
          >
            <MarkdownPreview
              source={project.description}
              style={{ backgroundColor: "transparent", color: "inherit" }}
              // disable the default dark styles that conflict with our theme
              wrapperElement={
                {
                  "data-color-mode": "dark",
                } as React.HTMLAttributes<HTMLDivElement>
              }
            />
          </div>
        </motion.section>

        {/* ── Footer nav ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border/30 pt-10"
        >
          <DemoCredentials credentials={project.demoCredentials} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border/30 pt-10"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-[13px] text-muted-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="font-mono tracking-wide">
              Back to all projects
            </span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetails;
