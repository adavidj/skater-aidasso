"use client";

import { Flame } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { premiumEase } from "@/lib/motion";

const activityStats = [
  {
    label: "Walking",
    value: "127",
  },
  {
    label: "Running",
    value: "386",
  },
  {
    label: "Workout",
    value: "249",
  },
] as const;

export function ActivityStatsCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
              scale: 0.94,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.85,
        delay: 0.35,
        ease: premiumEase,
      }}
      className="
        absolute
        left-[21%]
        top-[22%]
        z-20
        w-[62%]
        max-w-88.75
        rounded-3xl
        bg-white
        p-6
        text-[#111216]
        shadow-[0_20px_55px_rgba(20,35,65,0.14)]

        xl:max-w-95
        xl:p-7
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Flame
            size={20}
            strokeWidth={2}
            fill="currentColor"
            className="text-black"
          />

          <span
            className="
              text-[16px]
              font-medium
              tracking-tight

              xl:text-[17px]
            "
          >
            Activity
          </span>
        </div>

        <span
          className="
            rounded-full
            bg-[#FF5B14]
            px-3
            py-1.5
            text-[11px]
            font-semibold
            leading-none
            text-white

            xl:text-[12px]
          "
        >
          +87%
        </span>
      </div>

      {/* MAIN NUMBER */}
      <div className="mt-8">
        <div className="flex items-end gap-2">
          <span
            className="
              text-[45px]
              font-normal
              leading-none
              tracking-[-0.065em]

              xl:text-[50px]
            "
          >
            2,780
          </span>

          <span
            className="
              pb-1
              text-[15px]
              font-normal
              text-black/35

              xl:text-[16px]
            "
          >
            Cal
          </span>
        </div>

        <p
          className="
            mt-2
            text-[11px]
            font-normal
            text-black/25

            xl:text-[12px]
          "
        >
          You improved overall well-being
        </p>
      </div>

      {/* GRAPH */}
      <div
        className="
          relative
          mt-4
          h-22.5
          overflow-hidden
        "
      >
        {/* dotted background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(17,18,22,0.45) 1px, transparent 1px)",
            backgroundSize: "9px 9px",
          }}
        />

        {/* vertical guide */}
        <div
          aria-hidden="true"
          className="
            absolute
            bottom-2
            left-[50%]
            top-1
            w-px
            bg-black/5
          "
        />

        <svg
          viewBox="0 0 300 90"
          preserveAspectRatio="none"
          className="
            absolute
            inset-0
            h-full
            w-full
            overflow-visible
          "
        >
          <path
            d="
              M84 52
              C96 45 104 43 114 48
              C125 55 133 52 143 41
              C152 30 160 31 168 42
              C180 58 189 63 199 53
              C207 45 214 48 221 53
            "
            fill="none"
            stroke="#FF5B14"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="160"
            cy="31"
            r="5"
            fill="#FF5B14"
          />

          <circle
            cx="160"
            cy="31"
            r="10"
            fill="#FF5B14"
            opacity="0.10"
          />
        </svg>
      </div>

      {/* STATS */}
      <div
        className="
          mt-4
          grid
          grid-cols-3
          gap-4
        "
      >
        {activityStats.map((stat) => (
          <div key={stat.label}>
            {/* POINT + LABEL */}
            <div
              className="
                flex
                items-center
                gap-2
                text-[11px]
                font-normal
                text-black/35

                xl:text-[12px]
              "
            >
              <span
                className="
                  size-1.75
                  shrink-0
                  rounded-full
                  bg-[#FF5B14]
                "
              />

              <span>{stat.label}</span>
            </div>

            {/* VALUE */}
            <div
              className="
                mt-2
                flex
                items-end
                gap-1.5
              "
            >
              <span
                className="
                  text-[24px]
                  font-medium
                  leading-none
                  tracking-[-0.04em]

                  xl:text-[27px]
                "
              >
                {stat.value}
              </span>

              <span
                className="
                  pb-0.5
                  text-[11px]
                  font-normal
                  text-black/35
                "
              >
                Cal
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}