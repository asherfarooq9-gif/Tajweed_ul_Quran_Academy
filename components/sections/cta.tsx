import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig, whatsappLink } from "@/lib/site-config";

type CtaProps = {
  title?: string;
  description?: string;
};

export function Cta({
  title = "Ready to begin your Quran journey?",
  description = "Book a free, no-obligation trial class today. Meet your teacher, ask questions, and feel the difference of one-on-one learning.",
}: CtaProps) {
  const trialHref = whatsappLink(
    `Assalamu alaikum! I'd like to book a free trial class at ${siteConfig.name}.`,
  );

  return (
    <section className="px-4 py-20 sm:px-6 lg:py-24">
      <FadeIn className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)",
            backgroundSize: "18px 18px",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-normal leading-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <a href={trialHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Book a free trial
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
