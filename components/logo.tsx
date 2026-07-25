import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/** Brand mark: cropped to the emblem (arch + calligraphy + book) from the full logo lockup. */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden rounded-md bg-[#faf7f1]",
        className,
      )}
    >
      <Image
        src="/logo.jpg"
        alt="Tajweed ul Quran Academy"
        fill
        sizes="48px"
        className="object-cover object-[50%_32%] scale-[1.55]"
      />
    </span>
  );
}
