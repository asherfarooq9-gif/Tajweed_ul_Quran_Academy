"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { StatCounter } from "@/components/stat-counter";
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
  { to: 500, suffix: "+", decimals: 0, label: "Students taught" },
  { to: 20, suffix: "+", decimals: 0, label: "Countries reached" },
  { to: 4.9, suffix: "★", decimals: 1, label: "Average rating" },
];

export function Hero() {
  const trialHref = whatsappLink(
    `Assalamu alaikum! I'd like to book a free trial class at ${siteConfig.name}.`,
  );

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden sm:min-h-[86vh] lg:min-h-[92vh]">
      {/* Background image slideshow */}
      <HeroSlideshow />

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Free trial class · No commitment
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-normal leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
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
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80"
          >
            Online one-on-one Quran classes for every age — beautiful recitation,
            proper Tajweed, and qualified teachers who make learning feel calm and
            joyful. Wherever you are, whenever suits you.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
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
                  <StatCounter
                    to={stat.to}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
