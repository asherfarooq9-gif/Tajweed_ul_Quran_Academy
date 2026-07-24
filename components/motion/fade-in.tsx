"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  /** Render as a list container that staggers direct <FadeIn.Item> children. */
  as?: "div" | "ul" | "section";
};

const offsetFor = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { x: 0, y: 24 };
    case "down":
      return { x: 0, y: -24 };
    case "left":
      return { x: 24, y: 0 };
    case "right":
      return { x: -24, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  as = "div",
}: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const offset = shouldReduce ? { x: 0, y: 0 } : offsetFor(direction);
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

/** Staggered reveal container. Wrap each child in <Stagger.Item>. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
