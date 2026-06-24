import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Hadeed Tariq. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/HadeedTariq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link
            href="https://www.linkedin.com/in/hadeed-tariq-299308315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Linkedin"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
