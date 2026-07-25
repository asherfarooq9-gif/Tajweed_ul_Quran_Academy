import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/site-config";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  const enrollHref = whatsappLink(
    `Assalamu alaikum! I'm interested in the "${course.title}" course at ${siteConfig.name}. Please share the details.`,
  );

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-12px] hover:shadow-primary/25",
        className,
      )}
    >
      {course.image && (
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              course.imagePosition ?? "object-center",
            )}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="secondary" className="font-medium">
          {course.level}
        </Badge>
        <span className="text-xs text-muted-foreground">{course.duration}</span>
      </div>

      <h3 className="mt-4 text-xl leading-snug text-foreground">
        {course.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {course.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {course.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-foreground/85">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />

      <a
        href={enrollHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        Enroll now
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      </div>
    </article>
  );
}
