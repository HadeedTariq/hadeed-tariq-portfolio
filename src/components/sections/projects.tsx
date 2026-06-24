"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star, Briefcase, LayoutGrid, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeading } from "../ui/section-heading";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
type ProjectFilter = "all" | "professional" | "personal";

const FILTERS: {
  value: ProjectFilter;
  label: string;
  icon: typeof LayoutGrid;
}[] = [
  { value: "all", label: "All Projects", icon: LayoutGrid },
  { value: "professional", label: "Professional", icon: Briefcase },
  { value: "personal", label: "Personal", icon: User },
];

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  // Pre-compute counts once so tab labels can show how many projects live in each bucket.
  const counts = useMemo(() => {
    return projects.reduce(
      (acc, project) => {
        acc.all += 1;
        acc[project.projectType] += 1;
        return acc;
      },
      { all: 0, professional: 0, personal: 0 } as Record<ProjectFilter, number>,
    );
  }, []);

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) => Number(b.featured) - Number(a.featured),
    );
    return filter === "all"
      ? sorted
      : sorted.filter((project) => project.projectType === filter);
  }, [filter]);

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// projects"
          title="Featured Work"
          description="These are the projects on which I worked on"
        />

        <Tabs
          value={filter}
          onValueChange={(value) => setFilter(value as ProjectFilter)}
          className="mt-3 mb-8 flex justify-center"
        >
          <TabsList className="flex h-auto flex-wrap items-center justify-center gap-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-100/80 dark:bg-zinc-900/50 p-4 backdrop-blur-sm">
            {FILTERS.map(({ value, label, icon: Icon }) => {
              const active = filter === value;
              return (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={cn(
                    // Base reset — strip shadcn defaults
                    "rounded-lg border border-transparent transition-all duration-300",
                    "cursor-pointer gap-1 items-center",

                    // Inactive text
                    "text-slate-500 dark:text-zinc-400",

                    // Hover — only fires when NOT active (active takes over via data attr)
                    "hover:bg-slate-200 dark:hover:bg-zinc-800",
                    "hover:text-slate-900 dark:hover:text-zinc-100",

                    // ✅ Active: use data-[state=active]: to override shadcn's own active styles
                    "data-[state=active]:bg-none", // nuke shadcn default bg
                    "data-[state=active]:text-white",
                    "data-[state=active]:shadow-lg",
                    "data-[state=active]:shadow-indigo-500/20",
                    "data-[state=active]:scale-105",
                    "data-[state=active]:border-transparent",
                  )}
                  style={
                    filter === value
                      ? {
                          background: "#009497",
                          color: "white",
                          padding: "4px 8px",
                        }
                      : {
                          padding: "4px 8px",
                        }
                  }
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 stroke-[2.25] transition-transform duration-300",
                      active && "scale-110",
                    )}
                  />
                  <span>{label}</span>

                  {/* Dynamic Badge using Parent Group States */}
                  <span
                    className={cn(
                      "ml-1 rounded-md px-1.5 py-0.5 text-[10px] font-mono font-bold transition-colors duration-300",
                      active
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/60 text-slate-600 dark:bg-zinc-800/80 dark:text-zinc-400",
                    )}
                  >
                    ({counts[value]})
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 py-20 text-center">
            <p className="text-sm text-muted-foreground">
              No projects match this filter yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px", // Reduced margin so it triggers slightly earlier
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full" // Ensures the motion div takes full height of the grid cell
    >
      <Link
        href={`/projects/${project.id}`}
        className="block h-full outline-none"
      >
        <Card
          className="
    group
    relative
    flex
    h-full
    flex-col
    overflow-hidden
    border
    border-border/50
    bg-card
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-primary/30
    hover:shadow-2xl
  "
        >
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-1",
              `bg-gradient-to-r ${project.gradient}`,
            )}
          />

          <div
            className="
      absolute
      inset-0
      bg-gradient-to-b
      from-primary/[0.02]
      to-transparent
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
          />
          <div className="relative w-full h-[220px] shrink-0 overflow-hidden bg-muted">
            <VideoPreview project={project} />
          </div>

          {/* 2. Content Section (Bottom Stack) */}
          <div className="flex flex-1 flex-col p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                {project.featured ? (
                  <Badge className="border-0 bg-primary/10 text-primary">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    Featured Project
                  </Badge>
                ) : (
                  <div />
                )}

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>

                {project.role && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Role:</span>

                    <span className="font-medium text-foreground">
                      {project.role}
                    </span>
                  </div>
                )}
              </div>

              <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="mt-auto pt-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tech Stack
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-md">
                    {tech}
                  </Badge>
                ))}

                {project.tech.length > 4 && (
                  <Badge variant="outline" className="rounded-md">
                    +{project.tech.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

function VideoPreview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMetadataLoaded, setIsMetadataLoaded] = useState(false);

  // Clean up any active timers if the component unmounts unexpectedly
  useEffect(() => {
    return () => {
      if (playTimeoutRef.current) clearTimeout(playTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    // 1. Trigger network preloading if metadata hasn't fetched yet
    if (videoRef.current && videoRef.current.readyState === 0) {
      videoRef.current.load();
    }

    // 2. Debounce playback (150ms delay) to ensure casual scrolling doesn't lag the page
    playTimeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.warn("Video playback was interrupted or blocked:", error);
          });
      }
    }, 150);
  };

  const handleMouseLeave = () => {
    // Clear the play timer if the mouse leaves before the 150ms delay finishes
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
    }

    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);

      // Reset the video back to the beginning frame only if data is safely available
      if (videoRef.current.readyState >= 1) {
        videoRef.current.currentTime = 0;
      }
    }
  };
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-background"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.video
        ref={videoRef}
        poster={project.videoPosterUrl}
        preload="metadata" // Download file details immediately, but withhold streaming bits until intent
        muted // Crucial: modern browsers completely block dynamic script playback if unmuted
        loop
        playsInline // Stops iOS safari from launching a full-screen native media utility player
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        // Performance classes: will-change leverages GPU thread isolation layers during transforms
        className="h-[260px] w-full object-cover md:h-[380px] lg:h-full will-change-transform"
        initial={{ scale: 1.05, opacity: 0.9 }}
        whileHover={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onLoadedMetadata={() => setIsMetadataLoaded(true)}
      >
        <source src={project.videoUrl} type="video/mp4" />
      </motion.video>

      {/* Optimization: Subtle visual hint overlay overlaying the card when static */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none transition-opacity duration-300">
          <div className="rounded-full bg-background/20 backdrop-blur-md border border-white/20 p-2.5 opacity-80 group-hover:opacity-0 transition-opacity duration-300">
            <svg
              className="w-4 h-4 fill-white translate-x-px"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
