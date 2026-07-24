import type { Metadata } from "next";
import { courses, siteConfig } from "@/lib/site-config";
import { CourseCard } from "@/components/course-card";
import { Stagger, StaggerItem, FadeIn } from "@/components/motion/fade-in";
import { Cta } from "@/components/sections/cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore online Quran courses at Tajweed ul Quran Academy: Noorani Qaida, Nazra with Tajweed, Hifz memorization, Tajweed rules, Quran for kids and Tafsir.",
  alternates: { canonical: `${siteConfig.url}/courses` },
};

const faqs = [
  {
    q: "How do the online classes work?",
    a: "Classes are one-on-one over a video call (Zoom, Google Meet or WhatsApp) with a shared screen for the Quran text. You only need a device and an internet connection.",
  },
  {
    q: "What ages do you teach?",
    a: "Everyone, from young children (4+) to adults and seniors. Lessons are tailored to each student's age, level and pace.",
  },
  {
    q: "Can I choose a male or female teacher?",
    a: "Yes. We have qualified male and female tutors, so you can choose whoever you and your family are most comfortable with.",
  },
  {
    q: "Is there really a free trial?",
    a: "Yes. Your first class is a free, no-obligation trial so you can meet your teacher and decide if it's the right fit before enrolling.",
  },
  {
    q: "How flexible are the timings?",
    a: "Very. We teach across time zones, so we'll agree on a schedule that fits your week, including evenings and weekends.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="border-b border-border bg-sidebar/60">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              Our courses
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-normal leading-tight text-foreground sm:text-5xl">
              Courses for every stage of your Quran journey
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you&apos;re starting with your first letter or memorising the
              whole Quran, there&apos;s a structured path for you, always taught
              with proper Tajweed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <StaggerItem key={course.slug} className="h-full">
              <CourseCard course={course} className="h-full" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-sidebar/60">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-normal text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn className="mt-10">
            <Accordion multiple={false} className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <Cta />
    </>
  );
}
