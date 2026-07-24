import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/** Decorative brand mark: an open Quran on a rounded sage tile. */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[62%] w-[62%]"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6c-1.8-1.2-4-1.6-6-1.2v11.4c2-.4 4.2 0 6 1.2 1.8-1.2 4-1.6 6-1.2V4.8c-2-.4-4.2 0-6 1.2Z" />
        <path d="M12 6v11.4" />
        <path d="M9 9.2c-.9-.2-1.8-.2-2.6 0M9 11.6c-.9-.2-1.8-.2-2.6 0" />
        <path d="M17.6 9.2c-.9-.2-1.8-.2-2.6 0M17.6 11.6c-.9-.2-1.8-.2-2.6 0" />
      </svg>
    </span>
  );
}
