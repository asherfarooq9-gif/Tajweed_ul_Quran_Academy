import {
  BookOpenText,
  Users,
  UserRound,
  CalendarClock,
  GraduationCap,
  Gift,
} from "lucide-react";
import { features } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

const icons = [
  BookOpenText,
  Users,
  UserRound,
  CalendarClock,
  GraduationCap,
  Gift,
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Why families choose us"
        title="A calmer, more personal way to learn"
        description="Everything is built around one goal: helping you or your child recite the Quran correctly and confidently."
      />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = icons[i % icons.length];
          return (
            <StaggerItem key={feature.title}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-16px] hover:shadow-primary/25">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
