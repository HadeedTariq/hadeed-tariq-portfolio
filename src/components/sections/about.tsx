"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Years Experience", value: "1.75+" },
  { label: "Programming Languages", value: "6+" },
  { label: "Books Read", value: "10+" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="Engineering Scalable Backend Systems"
          description="Building performant applications focused on scalability, optimization, and real-world impact."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image + Terminal */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow">
                <Image
                  src="/images/my-ai-image.png"
                  alt="Muhammad Hadeed Tariq"
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />

                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      terminal
                    </span>
                  </div>

                  <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                    <code>
                      {`$ whoami
> hadeed_tariq

$ cat stack.txt
> nodejs, nestjs, golang,
> postgresql, mongodb, redis, reactjs, nextjs
> AWS EC2, ROUTE 53, DIGITAL OCEAN, NGINX

$ cat interests.txt
> system_design,
> distributed_systems,
> database_engineering

$ echo $STATUS
> building scalable systems`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m Muhammad Hadeed Tariq, a Full Stack Developer with a
                  strong backend focus, currently working at RaviNovus Tech. I
                  specialize in building scalable web applications,
                  performance-focused backend systems, and production-ready
                  architectures that solve real business problems.
                </p>

                <p>
                  Previously at RemianAI, I engineered a large-scale SEO-driven
                  platform generating over 150K dynamic pages across 19K+ U.S.
                  cities using Node.js, AWS EC2, Route 53, Docker, and Nginx. My
                  experience spans backend optimization, automation systems,
                  distributed architectures, and high-performance database
                  engineering.
                </p>

                <p>
                  Beyond professional work, I build systems focused on
                  real-world scalability and engineering depth — including
                  Editex, a JavaScript code editor powered by NestJS and the
                  Piston API, backend-centric social platforms using raw SQL,
                  scraping systems with Puppeteer, and multiple full-stack
                  applications exploring performance optimization and system
                  design concepts.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="gradient-text text-2xl font-bold">
                          {stat.value}
                        </p>

                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
