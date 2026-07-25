import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, Globe2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tajweed ul Quran Academy and our mission to make correct, beautiful Quran recitation accessible to students of every age, anywhere in the world.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const steps = [
  {
    title: "Meet & assess",
    description:
      "Your free trial class doubles as a friendly assessment. We learn your goals, level and schedule.",
  },
  {
    title: "Personalised plan",
    description:
      "Your teacher builds a plan around you: the right course, pace and daily targets.",
  },
  {
    title: "Learn one-on-one",
    description:
      "Regular private classes with live Tajweed correction, so mistakes are fixed the moment they happen.",
  },
  {
    title: "Track & revise",
    description:
      "Consistent revision cycles and gentle accountability keep your progress steady and lasting.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our mission",
    description:
      "To make correct, beautiful Quran recitation accessible to every willing heart, regardless of age, background or location.",
  },
  {
    icon: Heart,
    title: "Taught with care",
    description:
      "Patience and encouragement come first. Learning the Quran should feel calm and uplifting, never stressful.",
  },
  {
    icon: Globe2,
    title: "For the whole world",
    description:
      "Students across 20+ countries learn with us. Distance is no barrier to a great teacher.",
  },
  {
    icon: ShieldCheck,
    title: "Qualified & trusted",
    description:
      "Certified, experienced male and female tutors, vetted for both knowledge and character.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-sidebar/60">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              About us
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-normal leading-tight text-foreground sm:text-5xl">
              Bringing the Quran closer, one student at a time
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {siteConfig.name} was founded on a simple belief: that anyone,
              anywhere, deserves a patient teacher and a proper foundation in
              reciting the Quran with Tajweed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Banner image */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="relative -mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src="/images/about.jpg"
            alt="An online Quran lesson set up on a desk with an open Quran and prayer beads"
            width={1376}
            height={768}
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="h-auto w-full object-cover"
          />
        </FadeIn>
      </div>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title}>
                <div className="flex h-full gap-5 rounded-xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg text-foreground">{value.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Method */}
      <section className="bg-sidebar/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-normal text-foreground sm:text-4xl">
              How learning works
            </h2>
            <p className="mt-4 text-muted-foreground">
              A simple, proven path from your first class to fluent, confident
              recitation.
            </p>
          </FadeIn>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-xl border border-border bg-card p-6">
                  <span className="font-heading text-4xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta title="Come and see the difference for yourself" />
    </>
  );
}
