"use client";

import { Flame } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import { premiumEase } from "@/lib/motion";

const activityStats = [
  {
    label: "Distance",
    value: "12.7",
    unit: "Km",
  },
  {
    label: "Tricks",
    value: "38",
    unit: "Done",
  },
  {
    label: "Ride Time",
    value: "84",
    unit: "Min",
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
        left-1/2
        top-1/2
        z-20

        w-4/5
        max-w-sm

        -translate-x-1/2
        -translate-y-1/2

        rounded-3xl
        bg-white

        p-5

        text-[#111216]

        shadow-2xl

        sm:w-3/4
        sm:p-6

        lg:w-3/5

        xl:max-w-md
        xl:p-7
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <Flame
            size={20}
            strokeWidth={2}
            fill="currentColor"
            className="text-[#111216]"
          />

          <span
            className="
              text-base
              font-medium
              tracking-tight

              sm:text-lg
            "
          >
            Ride Activity
          </span>
        </div>

        <span
          className="
            rounded-full
            bg-[#FF5B14]

            px-3
            py-1.5

            text-xs
            font-semibold
            leading-none
            text-white
          "
        >
          +87%
        </span>
      </div>

      {/* Main value */}
      <div className="mt-7">
        <div
          className="
            flex
            items-end
            gap-2
          "
        >
          <span
            className="
              text-4xl
              font-normal
              leading-none
              tracking-tighter

              sm:text-5xl
            "
          >
            84
          </span>

          <span
            className="
              pb-1

              text-sm
              font-normal
              text-black/35

              sm:text-base
            "
          >
            Min
          </span>
        </div>

        <p
          className="
            mt-2

            text-xs
            font-normal
            text-black/30
          "
        >
          Your strongest skate session this week
        </p>
      </div>

      {/* Graph */}
      <div
        className="
          relative
          mt-5
          h-24
          overflow-hidden
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-10
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(17,18,22,0.45) 1px, transparent 1px)",
            backgroundSize: "9px 9px",
          }}
        />

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-2
            left-1/2
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
              M30 62
              C48 58 61 51 75 54
              C92 58 104 43 119 46
              C135 50 145 26 160 31
              C174 36 181 61 198 53
              C215 44 226 48 242 39
              C254 32 264 34 277 25
            "
            fill="none"
            stroke="#FF5B14"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="160" cy="31" r="5" fill="#FF5B14" />

          <circle cx="160" cy="31" r="10" fill="#FF5B14" opacity="0.1" />
        </svg>
      </div>

      {/* Stats */}
      <div
        className="
          mt-4

          grid
          grid-cols-3
          gap-2

          sm:gap-4
        "
      >
        {activityStats.map((stat) => (
          <div key={stat.label} className="min-w-0">
            <div
              className="
                flex
                items-center
                gap-2

                text-xs
                font-normal
                text-black/35
              "
            >
              <span
                className="
                  size-1.5
                  shrink-0

                  rounded-full
                  bg-[#FF5B14]
                "
              />

              <span className="truncate">{stat.label}</span>
            </div>

            <div
              className="
                mt-2

                flex
                flex-wrap
                items-end
                gap-1
              "
            >
              <span
                className="
                  text-xl
                  font-medium
                  leading-none
                  tracking-tight

                  sm:text-2xl
                "
              >
                {stat.value}
              </span>

              <span
                className="
                  pb-0.5

                  text-xs
                  font-normal
                  text-black/35
                "
              >
                {stat.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
