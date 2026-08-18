"use client";

import Image from "next/image";

import { ArrowLeft, ArrowRight, Trophy, Zap } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import basketballLeft from "@/public/images/program/skate-left.png";

import { Container } from "@/components/ui/container";
import { ProgramCard } from "@/components/shared/cards/programCard";

import { premiumEase } from "@/lib/motion";

export function FeaturedProgram() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="program"
      className="
        w-full
        bg-[#F1F3F8]
        pb-12
        pt-6
        text-[#111216]

        dark:bg-[#17191e]
        dark:text-white

        sm:pb-14
        sm:pt-8

        lg:pb-16
      "
    >
      <Container>
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 45,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.95,
            ease: premiumEase,
          }}
          className="
            overflow-hidden
            rounded-3xl
            bg-white

            px-5
            pb-7
            pt-6

            dark:bg-[#202228]

            sm:rounded-4xl
            sm:px-7
            sm:pb-9
            sm:pt-8

            md:px-8

            lg:px-10
            lg:pb-10

            xl:px-12
          "
        >
          {/* Top */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-4

              text-center

              lg:flex-row
              lg:justify-between
              lg:text-left
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -15,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: premiumEase,
              }}
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-2

                lg:justify-start
              "
            >
              <div
                className="
                  flex
                  h-9
                  items-center
                  gap-2

                  rounded-full
                  bg-[#F1F3F8]

                  px-3

                  text-sm
                  font-medium

                  dark:bg-white/10

                  sm:px-4
                  sm:text-base
                "
              >
                <Zap size={15} strokeWidth={1.8} />

                <span>Trick Challenges</span>
              </div>

              <div
                className="
                  flex
                  h-9
                  items-center
                  gap-2

                  rounded-full
                  bg-[#F1F3F8]

                  px-3

                  text-sm
                  font-medium

                  dark:bg-white/10

                  sm:px-4
                  sm:text-base
                "
              >
                <Trophy size={15} strokeWidth={1.8} />

                <span>Community Skate Jams</span>
              </div>
            </motion.div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 15,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: premiumEase,
              }}
              className="
                flex
                shrink-0
                items-center
                justify-center
                gap-2

                text-sm
                font-semibold
                uppercase
                tracking-wide

                sm:text-base

                lg:justify-end
              "
            >
              <span
                className="
                  size-2
                  rounded-full
                  bg-[#FF5B14]
                "
              />

              <span>The Program</span>
            </motion.div>
          </div>

          {/* Heading */}
          <div
            className="
              mt-8

              grid
              grid-cols-1
              gap-5

              lg:grid-cols-12
              lg:items-end
              lg:gap-8
            "
          >
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.85,
                delay: 0.12,
                ease: premiumEase,
              }}
              className="
                mx-auto
                max-w-4xl

                text-center
                text-3xl
                font-normal
                leading-none
                tracking-tighter

                sm:text-4xl

                md:text-5xl

                lg:col-span-9
                lg:mx-0
                lg:text-left
                lg:text-5xl

                xl:text-6xl
              "
            >
              <span
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-2
                  gap-y-1

                  lg:justify-start
                "
              >
                <span>Elevate your</span>

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

                    md:h-12
                    md:w-24
                    md:rounded-2xl
                  "
                >
                  <Image
                    src={basketballLeft}
                    alt=""
                    fill
                    quality={100}
                    sizes="
                      (max-width: 640px) 64px,
                      96px
                    "
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.span>

                <span>ride</span>
              </span>

              <span className="mt-1 block">with handpicked sessions.</span>
            </motion.h2>

            <motion.p
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
                duration: 0.7,
                delay: 0.26,
                ease: premiumEase,
              }}
              className="
                mx-auto
                max-w-sm

                text-center
                text-sm
                font-normal
                leading-relaxed
                text-black/55

                dark:text-white/55

                sm:text-base

                lg:col-span-3
                lg:mx-0
                lg:max-w-xs
                lg:text-left
              "
            >
              Your next skate session starts right here with the crew.
            </motion.p>
          </div>

          {/* Programs */}
          <div
            className="
              mt-10

              grid
              grid-cols-1
              gap-7

              lg:grid-cols-12
              lg:gap-6
            "
          >
            {/* Counter */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.3,
                ease: premiumEase,
              }}
              className="
                flex
                items-center
                justify-between
                gap-5

                border-b
                border-black/10

                pb-5

                dark:border-white/10

                lg:col-span-2
                lg:min-h-80
                lg:flex-col
                lg:items-start
                lg:border-b-0
                lg:pb-0

                xl:min-h-96
              "
            >
              <div>
                <div className="flex items-end">
                  <span
                    className="
                      text-5xl
                      font-normal
                      leading-none
                      tracking-tighter

                      sm:text-6xl

                      lg:text-5xl

                      xl:text-6xl
                    "
                  >
                    01
                  </span>

                  <span
                    className="
                      ml-1
                      pb-1

                      text-lg
                      text-black/30

                      dark:text-white/30
                    "
                  >
                    /8
                  </span>
                </div>

                <div
                  className="
                    mt-2

                    text-xs
                    leading-snug
                    text-black/55

                    dark:text-white/55

                    sm:text-sm
                  "
                >
                  Upcoming
                  <br />
                  Session
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  lg:mt-auto
                "
              >
                <button
                  type="button"
                  aria-label="Previous session"
                  className="
                    grid
                    size-11
                    place-items-center

                    rounded-full

                    border
                    border-black/10

                    bg-white

                    transition-transform
                    duration-300

                    hover:scale-105
                    active:scale-95

                    dark:border-white/15
                    dark:bg-white/5
                  "
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  aria-label="Next session"
                  className="
                    grid
                    size-11
                    place-items-center

                    rounded-full

                    bg-[#FF5B14]

                    text-white

                    transition-transform
                    duration-300

                    hover:scale-105
                    active:scale-95
                  "
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>

            {/* Cards */}
            <div
              className="
                grid
                min-w-0
                gap-5

                md:grid-cols-2

                lg:col-span-10
                lg:gap-4
              "
            >
              <ProgramCard variant="coach" delay={0.4} />

              <ProgramCard variant="chemistry" delay={0.52} />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
