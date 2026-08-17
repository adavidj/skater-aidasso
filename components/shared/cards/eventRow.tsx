"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { premiumEase } from "@/lib/motion";

interface EventRowProps {
  label: string;
  delay?: number;
}

export function EventRow({
  label,
  delay = 0,
}: EventRowProps) {
  return (
    <motion.a
      href="#"
      initial={{
        opacity: 0,
        y: 14,
      }}
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
        min-h-14.5
        items-center
        justify-between
        border-b
        border-white/15
        text-white
      "
    >
      <span
        className="
          text-[16px]
          font-normal
          tracking-[-0.02em]

          xl:text-[17px]
        "
      >
        {label}
      </span>

      <ArrowUpRight
        size={18}
        strokeWidth={1.4}
        className="
          text-white/70
          transition-transform
          duration-300

          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-white
        "
      />
    </motion.a>
  );
}