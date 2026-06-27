"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Copy,
  Check,
  Mail,
  Phone,
  Lock,
  FileText,
} from "lucide-react";
import { DemoCredential } from "@/data/projects";

interface DemoCredentialsProps {
  credentials?: DemoCredential[];
}

export function DemoCredentials({ credentials }: DemoCredentialsProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!credentials || credentials.length === 0) return null;

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(id);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Shared theme variable matching your token schema
  const brandingStyles = {
    borderColor: "oklch(0.75 0.18 195 / 0.25)",
    background: "oklch(0.75 0.18 195 / 0.08)",
    color: "oklch(0.75 0.18 195)",
  };

  return (
    <div className="w-full space-y-4">
      {/* Component Header Match Inspiration */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
          Demo Credentials
        </span>

        <div
          className="rounded-full border px-3 py-1 text-xs font-semibold tracking-wide"
          style={brandingStyles}
        >
          {credentials.length}{" "}
          {credentials.length === 1 ? "Role Available" : "Roles Available"}
        </div>
      </div>

      {/* Grid Layout Layout: 1 col on mobile, 2 on lg desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {credentials.map((cred, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-zinc-700"
          >
            <div>
              {/* Card Title Header */}
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck
                  className="h-4 w-4 shrink-0"
                  style={{ color: brandingStyles.color }}
                />
                <h4 className="text-sm font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wide">
                  {cred.role}
                </h4>
              </div>

              {/* Credential Data Stack */}
              <div className="space-y-2.5">
                {/* Email Field */}
                {cred.email && (
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/30 px-3 py-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <Mail className="h-3.5 w-3.5 text-slate-400 dark:text-zinc-500 shrink-0" />
                      <span className="text-slate-500 dark:text-zinc-400 truncate select-all">
                        {cred.email}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(cred.email!, `email-${index}`)}
                      className="text-slate-400 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors p-1"
                      aria-label="Copy email"
                    >
                      {copiedText === `email-${index}` ? (
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                )}

                {/* Phone Field */}
                {cred.phone && (
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/30 px-3 py-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <Phone className="h-3.5 w-3.5 text-slate-400 dark:text-zinc-500 shrink-0" />
                      <span className="text-slate-500 dark:text-zinc-400 truncate select-all">
                        {cred.phone}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(cred.phone!, `phone-${index}`)}
                      className="text-slate-400 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors p-1"
                      aria-label="Copy phone number"
                    >
                      {copiedText === `phone-${index}` ? (
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                )}

                {/* Password Field */}
                <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/30 px-3 py-2 text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <Lock className="h-3.5 w-3.5 text-slate-400 dark:text-zinc-500 shrink-0" />
                    <span className="font-mono text-slate-700 dark:text-zinc-300 truncate select-all">
                      {cred.password}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(cred.password, `pass-${index}`)}
                    className="text-slate-400 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors p-1"
                    aria-label="Copy password"
                  >
                    {copiedText === `pass-${index}` ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Notes Block */}
            {cred.notes && (
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex gap-2 items-start">
                <FileText className="h-3.5 w-3.5 text-slate-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-slate-400 dark:text-zinc-500 italic">
                  {cred.notes}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
