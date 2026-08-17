"use client";

import Image from "next/image";
import { ArrowUpRight, BicepsFlexed, Shirt, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import activityMain from "@/public/images/activity/activity-main.jpg";
import activitySmall from "@/public/images/activity/activity-small.jpg";
import basketballLeft from "@/public/images/program/basketball-left.png";

import { ActivityStatsCard } from "@/components/shared/cards/activityStatsCard";
import { Container } from "@/components/ui/container";

import { premiumEase } from "@/lib/motion";

/* =========================================================
   FIRST ICON:
   3 diamonds on top + 1 diamond centered below
========================================================= */
function DiamondClusterIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* top left */}
      <rect
        x="3"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 6 6)"
        fill="currentColor"
      />

      {/* top center */}
      <rect
        x="11"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 14 6)"
        fill="currentColor"
      />

      {/* top right */}
      <rect
        x="19"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(45 22 6)"
        fill="currentColor"
      />

      {/* bottom center */}
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

/* =========================================================
   SMALL CYAN ICON FOR VIEW MORE
========================================================= */
function SmallSportIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 15.5C8.5 15.5 9.6 13.8 10.7 12.4L12.6 10C13 9.5 13.7 9.5 14.1 10L16 12.2C17 13.3 18.2 14 19.7 14.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 16.5H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M7.5 13L9 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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
        pt-8 
        pb-14
        text-[#111216]

        dark:bg-[#17191e]
        dark:text-white

        sm:pt-12
        sm:pb-18

        lg:pt-10 
        lg:pb-16
      "
    >
      <Container>
        <div
              className="
                grid
                gap-8

                sm:gap-12

                lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]
                lg:items-stretch
                lg:gap-12

                xl:gap-16
              "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================= */}
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
              min-h-80
              overflow-hidden
              rounded-[26px]

              sm:min-h-147.5
              lg:min-h-155
              xl:min-h-162.5

              lg:rounded-[34px]
            "
          >
            {/* BLURRED IMAGE ONLY */}
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                className="
                  scale-[1.03]
                  object-cover
                  object-center
                  blur-[2.5px]
                "
              />
            </motion.div>

            {/* SHARP CARD */}
            <ActivityStatsCard />
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <div className="flex flex-col">
            {/* FEATURED FEATURES */}
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
                text-[13px]
                font-semibold
                uppercase

                sm:justify-center
                sm:text-[14px]
                lg:justify-start
                xl:text-[14px]
              "
            >
              <span className="size-2 rounded-full bg-[#49BDD7]" />

              <span>Featured Features</span>
            </motion.div>

            {/* TITLE */}
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
                mt-6
                max-w-162.5
                text-center
                text-[34px]
                font-normal
                leading-[0.98]
                tracking-[-0.055em]

                sm:text-[42px]
                md:text-[48px]
                lg:text-left
                lg:text-[56px]
                xl:text-[62px]
              "
            >
              <span className="block">Stay motivated with</span>

              <span className="mt-1 block sm:mt-2">
                <span
                  className="
                    relative
                    mx-auto
                    block
                    h-10.5
                    w-17
                    overflow-hidden
                    rounded-[14px]

                    sm:mx-0
                    sm:inline-block

                    xl:h-11.75
                    xl:w-19
                  "
                >
                  <Image
                    src={basketballLeft}
                    alt=""
                    fill
                    quality={100}
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </span>
              </span>

              <span className="mt-1 block">
                activity tracking.
              </span>
            </motion.h2>

            {/* =================================================
                FEATURE BUTTONS
            ================================================= */}
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
              className="mt-8 flex items-center justify-center gap-3 sm:justify-center lg:justify-start"
            >
              {/* DIAMONDS */}
              <button
                type="button"
                aria-label="Activity categories"
                className="
                  grid
                  size-13
                  place-items-center
                  rounded-full
                  bg-white
                  text-[#111216]
                  shadow-[0_5px_18px_rgba(20,30,50,0.045)]

                  sm:size-14

                  dark:bg-white/10
                  dark:text-white
                "
              >
                <DiamondClusterIcon className="h-5.5 w-6.5 sm:h-6 sm:w-7" />
              </button>

              {/* JERSEY */}
              <button
                type="button"
                aria-label="Jersey"
                className="
                  grid
                  size-13
                  place-items-center
                  rounded-full
                  bg-white
                  text-[#111216]
                  shadow-[0_5px_18px_rgba(20,30,50,0.045)]

                  sm:size-14

                  dark:bg-white/10
                  dark:text-white
                "
              >
                <Shirt size={21} strokeWidth={1.6} className="sm:hidden" />
                <Shirt size={24} strokeWidth={1.6} className="hidden sm:block" />
              </button>

              {/* BICEPS */}
              <button
                type="button"
                aria-label="Workout"
                className="
                  grid
                  size-13
                  place-items-center
                  rounded-full
                  bg-white
                  text-[#111216]
                  shadow-[0_5px_18px_rgba(20,30,50,0.045)]

                  sm:size-14

                  dark:bg-white/10
                  dark:text-white
                "
              >
                <BicepsFlexed size={23} strokeWidth={1.6} className="sm:hidden" />
                <BicepsFlexed size={26} strokeWidth={1.6} className="hidden sm:block" />
              </button>

              {/* 8+ */}
              <button
                type="button"
                aria-label="More activities"
                className="
                  grid
                  size-10
                  place-items-center
                  rounded-full
                  bg-[#FF5B14]
                  text-[12px]
                  font-semibold
                  leading-none
                  text-white
                  shadow-[0_8px_20px_rgba(255,91,20,0.16)]
                "
              >
                8+
              </button>
            </motion.div>

            {/* =================================================
                LOWER CONTENT
            ================================================= */}
            <div
              className="
                mt-10
                grid
                flex-1
                gap-8

                sm:grid-cols-[minmax(0,1fr)_235px]
                sm:items-end

                xl:grid-cols-[minmax(0,1fr)_255px]
              "
            >
              {/* TEXT + CTA */}
              <div className="flex h-full flex-col items-center text-center sm:items-start sm:text-left">
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
                      max-w-75
                      text-[17px]
                      font-normal
                      leading-[1.45]
                      tracking-[-0.018em]
                      text-black/65

                      dark:text-white/65

                      md:text-[18px]
                      xl:text-[18px]
                    "
                  >
                    Record — activities to
                    <br />
                    boost your performance.
                  </p>

                  <div
                    className="
                      mt-5
                      text-[14px]
                      font-semibold
                      uppercase
                      tracking-[-0.01em]

                      xl:text-[15px]
                    "
                  >
                    With GPT 4.0
                  </div>
                </motion.div>

                <div
                  className="
                    mt-auto
                    flex
                    items-end
                    justify-center
                    gap-6
                    pt-12

                    sm:justify-between
                  "
                >
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
                      size-21.5
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-[#FF5B14]
                      text-white

                      xl:size-23.5
                    "
                  >
                    <ArrowUpRight size={29} strokeWidth={1.4} />
                  </motion.a>

                  <span
                    className="
                      pb-1
                      text-right
                      text-[11px]
                      font-semibold
                      uppercase
                      leading-[1.05]

                      xl:text-[12px]
                    "
                  >
                    Explore
                    <br />
                    More
                  </span>
                </div>
              </div>

              {/* =================================================
                  SMALL IMAGE CARD
              ================================================= */}
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
                  rounded-[26px]
                  bg-[#EEF0F4]

                  dark:bg-[#202228]
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    min-h-60
                    overflow-hidden

                    xl:min-h-67.5
                  "
                >
                  <Image
                    src={activitySmall}
                    alt=""
                    fill
                    quality={100}
                    sizes="260px"
                    className="object-cover object-center"
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/25
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* 2025 */}
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
                        size-1.75
                        rounded-full
                        bg-white
                      "
                    />

                    <span
                      className="
                        text-[17px]
                        font-medium
                        leading-none

                        xl:text-[19px]
                      "
                    >
                      2025
                    </span>
                  </div>

                  {/* VIEW MORE */}
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
                      top-[49%]
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
                      text-[12px]
                      font-semibold
                      text-[#111216]
                      shadow-[0_8px_24px_rgba(0,0,0,0.08)]

                      xl:text-[13px]
                    "
                  >
                    <SmallSportIcon className="size-4.5 text-[#48BDD7]" />

                    <span>View More</span>
                  </motion.a>

                  {/* COMING SOON */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-5
                      z-20
                      text-center
                      text-[14px]
                      font-medium
                      uppercase
                      tracking-wide
                      text-white

                      xl:text-[15px]
                    "
                  >
                    1 / Coming Soon
                  </div>
                </div>

                {/* =================================================
                    MOOD BOOST - PARTIAL PROGRESS
                ================================================= */}
                <div
                  className="
                    relative
                    h-13.5
                    overflow-hidden
                    bg-[#ECEEF2]

                    dark:bg-white/5
                  "
                >
                  {/* filled portion */}
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

                      dark:bg-white/12
                    "
                  />

                  {/* CONTENT */}
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
                        text-[13px]
                        font-semibold
                        text-[#111216]

                        dark:text-white

                        xl:text-[14px]
                      "
                    >
                      Mood Boost
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
