import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { EnrollForm } from "@/components/enroll-form";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact & Enrol",
  description:
    "Enrol at Tajweed ul Quran Academy or ask a question. Start a free trial class over WhatsApp or email — for students of any age, anywhere.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  const waHref = whatsappLink(
    `Assalamu alaikum! I'd like to book a free trial class at ${siteConfig.name}.`,
  );

  const contactItems = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: waHref,
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneDisplay.replace(/[^+\d]/g, "")}`,
      external: false,
    },
  ];

  return (
    <>
      <section className="border-b border-border bg-sidebar/60">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              Get started
            </span>
            <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-normal leading-tight text-foreground sm:text-5xl">
              Book your free trial class
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Fill in a few details and send them straight to us on WhatsApp or by
              email. We&apos;ll reply quickly to arrange your first class.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact info */}
          <FadeIn direction="right">
            <h2 className="text-2xl text-foreground">Reach us directly</h2>
            <p className="mt-2 text-muted-foreground">
              Prefer to talk first? Use any of these — we&apos;re happy to answer
              questions before you enrol.
            </p>

            <ul className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                        <span className="block text-sm text-muted-foreground">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
              <li className="flex items-center gap-4 rounded-xl border border-dashed border-border p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    Class hours
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {siteConfig.hours}
                  </span>
                </span>
              </li>
            </ul>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <EnrollForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
