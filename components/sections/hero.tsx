"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stats = [
  { value: "500+", label: "Students taught" },
  { value: "20+", label: "Countries reached" },
  { value: "4.9★", label: "Average rating" },
];

export function Hero() {
  const shouldReduce = useReducedMotion();
  const trialHref = whatsappLink(
    `Assalamu alaikum! I'd like to book a free trial class at ${siteConfig.name}.`,
  );

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-accent/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] -z-10 h-[360px] w-[360px] rounded-full bg-secondary/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Free trial class · No commitment
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-normal leading-[1.05] text-foreground sm:text-6xl"
          >
            Learn the Quran with{" "}
            <span className="relative whitespace-nowrap text-primary">
              Tajweed
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary/40"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Online one-on-one Quran classes for every age — beautiful recitation,
            proper Tajweed, and qualified teachers who make learning feel calm and
            joyful. Wherever you are, whenever suits you.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={trialHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Book a free trial
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">
                Explore courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-2xl text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={shouldReduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl border border-border bg-card p-8 shadow-[0_30px_80px_-30px] shadow-primary/30"
          >
            <div className="rounded-2xl bg-gradient-to-br from-secondary to-accent p-8 text-center">
              <p
                className="font-heading text-5xl leading-tight text-primary-foreground/90"
                lang="ar"
                dir="rtl"
              >
                ﷽
              </p>
              <p className="mt-4 text-sm text-secondary-foreground/80">
                In the name of Allah, the Most Gracious, the Most Merciful
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {["Noorani Qaida", "Nazra with Tajweed", "Hifz Program"].map(
                (label, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            animate={shouldReduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-card px-4 py-3 shadow-lg"
          >
            <p className="text-xs text-muted-foreground">Trusted by families in</p>
            <p className="font-heading text-lg text-foreground">20+ countries</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
