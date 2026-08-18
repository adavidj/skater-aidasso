"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { premiumEase } from "@/lib/motion";

interface EventRowProps {
  label: string;
  delay?: number;
}

export function EventRow({ label, delay = 0 }: EventRowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href="#"
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 14,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay,
        ease: premiumEase,
      }}
      className="
        group

        flex
        min-h-16
        items-center
        justify-between
        gap-4

        border-b
        border-white/15

        py-4

        text-white

        sm:min-h-20
        sm:py-5
      "
    >
      <span
        className="
          text-base
          font-normal
          tracking-wide
          text-white/85

          transition-colors
          duration-300

          group-hover:text-white

          sm:text-lg
        "
      >
        {label}
      </span>

      <ArrowUpRight
        size={18}
        strokeWidth={1.4}
        className="
          shrink-0

          text-white/60

          transition-all
          duration-300

          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-white
        "
      />
    </motion.a>
  );
}
