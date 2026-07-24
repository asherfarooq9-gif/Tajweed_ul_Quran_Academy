import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Loved by students & parents"
        title="Kind words from our community"
      />

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.author} className="h-full">
            <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
              <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-base text-foreground">
                  {t.author}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
