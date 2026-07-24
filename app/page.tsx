import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CoursePreview } from "@/components/sections/course-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CoursePreview />
      <Testimonials />
      <Cta />
    </>
  );
}
