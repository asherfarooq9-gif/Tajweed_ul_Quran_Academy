import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/lib/site-config";
import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CoursePreview() {
  const featured = courses.slice(0, 3);

  return (
    <section className="bg-sidebar/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Our courses"
          title="A clear path from first letter to fluent recitation"
          description="Structured programs for every stage. Not sure where to start? Book a free trial and we'll guide you."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <StaggerItem key={course.slug} className="h-full">
              <CourseCard course={course} className="h-full" />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/courses">
              View all courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
