"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const slides = [
  {
    src: "/images/hero-1.png",
    alt: "Open Quran with golden calligraphy on a wooden holder",
    position: "72% 50%",
  },
  {
    src: "/images/hero-2.png",
    alt: "A calm study desk with an open Quran by a sunlit window",
    position: "60% 50%",
  },
  {
    src: "/images/hero-3.png",
    alt: "Serene mosque interior with soft light and an open Quran",
    position: "50% 55%",
  },
];

const INTERVAL_MS = 5000;

export function HeroSlideshow() {
  const shouldReduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [shouldReduce]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shouldReduce ? (
        <div
          className="h-full w-full bg-cover"
          style={{
            backgroundImage: `url('${slides[0].src}')`,
            backgroundPosition: slides[0].position,
          }}
          role="img"
          aria-label={slides[0].alt}
        />
      ) : (
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0 h-full w-full bg-cover"
            style={{
              backgroundImage: `url('${slides[index].src}')`,
              backgroundPosition: slides[index].position,
            }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: INTERVAL_MS / 1000 + 1.4, ease: "linear" },
            }}
            role="img"
            aria-label={slides[index].alt}
          />
        </AnimatePresence>
      )}

      {/* Readability overlays — kept light so the photos stay visible,
          with a stronger scrim only on the left where the hero text sits. */}
      <div className="absolute inset-0 bg-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent md:via-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}
