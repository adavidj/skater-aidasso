"use client";

import Image from "next/image";

import {
  ArrowUpRight,
  Gauge,
  
  Route,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import activityMain from "@/public/images/activity/activity-main.jpg";
import activitySmall from "@/public/images/activity/activity-small.jpg";
import basketballLeft from "@/public/images/program/skate-left.png";

import { ActivityStatsCard } from "@/components/shared/cards/activityStatsCard";
import { Container } from "@/components/ui/container";

import { premiumEase } from "@/lib/motion";

function DiamondClusterIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 6 6)"
        fill="currentColor"
      />

      <rect
        x="11"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 14 6)"
        fill="currentColor"
      />

      <rect
        x="19"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 22 6)"
        fill="currentColor"
      />

      <rect
        x="11"
        y="11"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 14 14)"
        fill="currentColor"
      />
    </svg>
  );
}

function SmallSkateIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 14C6 16 8 17 12 17C16 17 19 16 20 13"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M5 13H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="8"
        cy="18"
        r="1.3"
        fill="currentColor"
      />

      <circle
        cx="17"
        cy="18"
        r="1.3"
        fill="currentColor"
      />
    </svg>
  );
}

export function ActivityTracking() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="activity"
      className="
        w-full
        bg-[#F4F6FC]

        pb-14
        pt-8

        text-[#111216]

        dark:bg-[#17191e]
        dark:text-white

        sm:pb-16
        sm:pt-12

        lg:pb-16
        lg:pt-10
      "
    >
      <Container>
        <div
          className="
            grid
            gap-10

            sm:gap-12

            lg:grid-cols-2
            lg:items-stretch
            lg:gap-12

            xl:gap-16
          "
        >
          {/* Main visual */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -45,
                    scale: 0.98,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.95,
              ease: premiumEase,
            }}
            className="
              relative

              min-h-96

              overflow-hidden
              rounded-3xl

              sm:min-h-144

              lg:min-h-160

              xl:min-h-168
            "
          >
            <motion.div
              className="
                absolute
                inset-0
                z-0

                overflow-hidden
              "
              initial={
                reduceMotion
                  ? false
                  : {
                      scale: 1.07,
                    }
              }
              whileInView={{
                scale: 1.025,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.4,
                ease: premiumEase,
              }}
            >
              <Image
                src={activityMain}
                alt=""
                fill
                quality={100}
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="
                  scale-105
                  object-cover
                  object-center

                  blur-sm
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-black/5
                "
              />
            </motion.div>

            <ActivityStatsCard />
          </motion.div>

          {/* Content */}
          <div
            className="
              flex
              min-w-0
              flex-col
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: premiumEase,
              }}
              className="
                flex
                items-center
                justify-center
                gap-2

                text-sm
                font-semibold
                uppercase
                tracking-wide

                lg:justify-start
              "
            >
              <span
                className="
                  size-2
                  rounded-full
                  bg-[#FF5B14]
                "
              />

              <span>
                Ride Tracking
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.85,
                delay: 0.13,
                ease: premiumEase,
              }}
              className="
                mx-auto
                mt-6
                max-w-2xl

                text-center
                text-4xl
                font-normal
                leading-none
                tracking-tighter

                sm:text-5xl

                lg:mx-0
                lg:text-left
                lg:text-5xl

                xl:text-6xl
              "
            >
              <span className="block">
                Track every line.
              </span>

              <span
                className="
                  mt-2

                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2

                  lg:justify-start
                "
              >
                <span>
                  Push
                </span>

                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.85,
                          rotate: -4,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.28,
                    ease: premiumEase,
                  }}
                  className="
                    relative

                    inline-block

                    h-9
                    w-16
                    shrink-0

                    overflow-hidden
                    rounded-xl

                    sm:h-10
                    sm:w-20

                    xl:h-12
                    xl:w-24
                    xl:rounded-2xl
                  "
                >
                  <Image
                    src={basketballLeft}
                    alt=""
                    fill
                    quality={100}
                    sizes="96px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.span>

                <span>
                  every session.
                </span>
              </span>
            </motion.h2>

            {/* Feature buttons */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 15,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.26,
                ease: premiumEase,
              }}
              className="
                mt-8

                flex
                flex-wrap
                items-center
                justify-center
                gap-3

                lg:justify-start
              "
            >
              <button
                type="button"
                aria-label="Skate activity"
                className="
                  grid
                  size-14
                  place-items-center

                  rounded-full

                  bg-white
                  text-[#111216]

                  shadow-lg
                  shadow-black/5

                  dark:bg-white/10
                  dark:text-white
                "
              >
                <DiamondClusterIcon className="h-6 w-7" />
              </button>

              <button
                type="button"
                aria-label="Routes"
                className="
                  grid
                  size-14
                  place-items-center

                  rounded-full

                  bg-white
                  text-[#111216]

                  shadow-lg
                  shadow-black/5

                  dark:bg-white/10
                  dark:text-white
                "
              >
                <Route
                  size={23}
                  strokeWidth={1.6}
                />
              </button>

              <button
                type="button"
                aria-label="Performance"
                className="
                  grid
                  size-14
                  place-items-center

                  rounded-full

                  bg-white
                  text-[#111216]

                  shadow-lg
                  shadow-black/5

                  dark:bg-white/10
                  dark:text-white
                "
              >
                <Gauge
                  size={23}
                  strokeWidth={1.6}
                />
              </button>

              <button
                type="button"
                aria-label="More tracking features"
                className="
                  grid
                  size-14
                  place-items-center

                  rounded-full

                  bg-[#FF5B14]

                  text-sm
                  font-semibold
                  leading-none
                  text-white

                  shadow-lg
                  shadow-[#FF5B14]/20
                "
              >
                8+
              </button>
            </motion.div>

            {/* Lower content */}
            <div
              className="
                mt-10

                grid
                flex-1
                gap-8

                sm:grid-cols-5
                sm:items-end

                lg:grid-cols-5
                lg:items-end

                xl:gap-10
              "
            >
              {/* Text + CTA */}
              <div
                className="
                  flex
                  h-full
                  flex-col
                  items-center

                  text-center

                  sm:col-span-3
                  sm:items-start
                  sm:text-left

                  lg:col-span-3
                "
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.33,
                    ease: premiumEase,
                  }}
                >
                  <p
                    className="
                      max-w-sm

                      text-lg
                      font-normal
                      leading-relaxed
                      tracking-tight
                      text-black/65

                      dark:text-white/65
                    "
                  >
                    Record your rides, tricks and distance
                    to understand every session and keep
                    progressing.
                  </p>

                  <div
                    className="
                      mt-5

                      flex
                      items-center
                      justify-center
                      gap-2

                      text-sm
                      font-semibold
                      uppercase
                      tracking-wide

                      sm:justify-start
                    "
                  >
                    <Sparkles
                      size={16}
                      strokeWidth={1.6}
                      className="text-[#FF5B14]"
                    />

                    <span>
                      Smart Ride Insights
                    </span>
                  </div>
                </motion.div>

                {/* CTA bottom line */}
                <div
                  className="
                    mt-10

                    flex
                    w-full
                    items-end
                    justify-between
                    gap-6

                    sm:mt-auto
                    sm:pt-12
                  "
                >
                  {/* Arrow stays left */}
                  <motion.a
                    href="#events"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.85,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.75,
                      delay: 0.43,
                      ease: premiumEase,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.04,
                          }
                    }
                    className="
                      grid
                      size-20
                      shrink-0
                      place-items-center

                      rounded-full

                      bg-[#FF5B14]
                      text-white

                      sm:size-24
                    "
                  >
                    <ArrowUpRight
                      size={29}
                      strokeWidth={1.4}
                    />
                  </motion.a>

                  {/* Text stays on the right, next to the image */}
                  <span
                    className="
                      ml-auto
                      pb-1

                      text-right
                      text-xs
                      font-semibold
                      uppercase
                      leading-none
                    "
                  >
                    Explore
                    <br />
                    More
                  </span>
                </div>
              </div>

              {/* Small image */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 35,
                        y: 15,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.38,
                  ease: premiumEase,
                }}
                className="
                  relative

                  overflow-hidden
                  rounded-3xl

                  bg-[#EEF0F4]

                  dark:bg-[#202228]

                  sm:col-span-2

                  lg:col-span-2
                "
              >
                <div
                  className="
                    relative
                    min-h-64
                    overflow-hidden

                    sm:min-h-72
                  "
                >
                  <Image
                    src={activitySmall}
                    alt=""
                    fill
                    quality={100}
                    sizes="
                      (max-width: 1024px) 100vw,
                      35vw
                    "
                    className="
                      object-cover
                      object-center
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0

                      bg-linear-to-t
                      from-black/35
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      z-20

                      flex
                      items-center
                      gap-2

                      text-white
                    "
                  >
                    <span
                      className="
                        size-2
                        rounded-full
                        bg-white
                      "
                    />

                    <span
                      className="
                        text-lg
                        font-medium
                        leading-none
                      "
                    >
                      2026
                    </span>
                  </div>

                  <motion.a
                    href="#events"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.035,
                          }
                    }
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-30

                      flex

                      -translate-x-1/2
                      -translate-y-1/2

                      items-center
                      justify-center
                      gap-2

                      whitespace-nowrap

                      rounded-full

                      bg-white

                      px-4
                      py-2.5

                      text-xs
                      font-semibold
                      text-[#111216]

                      shadow-lg
                    "
                  >
                    <SmallSkateIcon
                      className="
                        size-5
                        text-[#48BDD7]
                      "
                    />

                    <span>
                      View Session
                    </span>
                  </motion.a>

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-5
                      z-20

                      text-center
                      text-sm
                      font-medium
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    1 / Next Session
                  </div>
                </div>

                <div
                  className="
                    relative
                    h-14
                    overflow-hidden
                    bg-[#ECEEF2]

                    dark:bg-white/5
                  "
                >
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : {
                            width: "0%",
                          }
                    }
                    whileInView={{
                      width: "76%",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.65,
                      ease: premiumEase,
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0

                      bg-white

                      dark:bg-white/10
                    "
                  />

                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-full
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <Zap
                      size={18}
                      fill="currentColor"
                      strokeWidth={1.2}
                      className="text-[#F9B614]"
                    />

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-[#111216]

                        dark:text-white
                      "
                    >
                      Session Boost
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}