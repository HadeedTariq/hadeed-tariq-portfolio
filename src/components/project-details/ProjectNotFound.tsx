"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Frown } from "lucide-react";

export function ProjectNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/40 bg-muted/20">
        <Frown className="h-7 w-7 text-muted-foreground/40" />
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Project not found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground/60">
        This project doesn't exist or may have been removed. Head back to see
        all available work.
      </p>

      <Link
        href="/#projects"
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-border/80 hover:bg-muted/40 hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>
    </motion.div>
  );
}
