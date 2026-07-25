import Link from "next/link";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  navLinks,
  siteConfig,
  courses,
  whatsappLink,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const waHref = whatsappLink(
    `Assalamu alaikum! I'd like to know more about ${siteConfig.name}.`,
  );

  return (
    <footer className="border-t border-border bg-sidebar">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-16 w-16" />
            <span className="font-heading text-lg leading-none">
              {siteConfig.shortName}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
            Courses
          </h3>
          <ul className="mt-4 space-y-2.5">
            {courses.slice(0, 5).map((course) => (
              <li key={course.slug}>
                <Link
                  href="/courses"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with care for learners everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
