"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 1.4,
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const reduceMotion = useReducedMotion();

  const value = useMotionValue(from);

  const displayValue = useTransform(
    value,
    (latest) => `${Math.round(latest)}${suffix}`,
  );

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      value.set(to);
      return;
    }

    const controls = animate(value, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [duration, isInView, reduceMotion, to, value]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
}
