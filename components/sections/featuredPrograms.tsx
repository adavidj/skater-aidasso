"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Volleyball,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import basketballLeft from "@/public/images/program/basketball-left.png";

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
        bg-[#F4F6FC]
        pb-12
        pt-5
        text-[#111216]

        dark:bg-[#17191e]
        dark:text-white

        lg:pb-16
        lg:pt-8
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
            rounded-4xl
            bg-white
            px-6
            pb-8
            pt-6

            dark:bg-[#202228]

            sm:px-8
            lg:px-10
            lg:pb-10
            xl:px-12
          "
        >
          {/* TOP */}
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left sm:gap-6">
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
              className="flex flex-wrap items-center justify-center gap-2"
            >
              <div
                className="
                  flex
                  h-8
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#F4F6FC]
                  px-3
                  text-sm
                  font-medium

                  dark:bg-white/10
                "
              >
                <Volleyball size={15} strokeWidth={1.8} />
                <span>Virtual Challenges</span>
              </div>

              <div
                className="
                  flex
                  h-8
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#F4F6FC]
                  px-3
                  text-sm
                  font-medium

                  dark:bg-white/10
                "
              >
                <Trophy size={15} strokeWidth={1.8} />
                <span>Community Tournaments</span>
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
              "
            >
              <span className="size-2 rounded-full bg-[#49BDD7]" />
              <span>The Program</span>
            </motion.div>
          </div>

          {/* HEADING */}
          <div
            className="
              mt-6
              grid
              gap-8

              lg:grid-cols-[minmax(0,1fr)_260px]
              lg:items-end
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
                max-w-212.5
                text-center
                text-[34px]
                font-normal
                leading-[0.99]
                tracking-[-0.055em]

                sm:text-[50px]
                lg:text-left
                lg:text-[54px]
                xl:text-[60px]
              "
            >
              <span className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-center">
                <span>Elevate your</span>

                <span
                  className="
                    relative
                    mx-2.5
                    inline-block
                    h-10
                    w-18.5
                    shrink-0
                    overflow-hidden
                    rounded-[14px]

                    lg:h-11
                    lg:w-20.5

                    xl:h-12
                    xl:w-22.5
                    xl:rounded-2xl
                  "
                >
                  <Image
                    src={basketballLeft}
                    alt=""
                    fill
                    quality={100}
                    sizes="90px"
                    className="object-cover object-center"
                  />
                </span>

                <span>experience</span>
              </span>

              <span className="mt-1 block">
                with handpicked featured.
              </span>
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
                max-w-62.5
                text-center
                text-[14px]
                font-normal
                leading-[1.45]
                text-black/55

                dark:text-white/55

                sm:text-left
                xl:text-[15px]
              "
            >
              Your sports journey starts
              <br />
              right here with us and the crew.
            </motion.p>
          </div>

          {/* CONTENT */}
          <div
            className="
              mt-8
              grid
              gap-7

              lg:grid-cols-[150px_minmax(0,1fr)]
            "
          >
            {/* COUNTER */}
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
                min-h-auto
                flex-col

                items-center
                text-center

                sm:items-start
                sm:text-left
                sm:min-h-81.25
                xl:min-h-87.5
              "
            >
              <div>
                <div className="flex items-end">
                  <span
                    className="
                      text-[44px]
                      font-normal
                      leading-none
                      tracking-[-0.07em]

                      sm:text-[60px]
                      xl:text-[64px]
                    "
                  >
                    01
                  </span>

                  <span
                    className="
                      ml-1
                      pb-1
                      text-[18px]
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
                    text-[12px]
                    leading-[1.3]
                    text-black/55

                    dark:text-white/55
                  "
                >
                  Upcoming
                  <br />
                  Event
                </div>
              </div>

              <div className="mt-auto flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous program"
                  className="
                    grid
                    size-11
                    place-items-center
                    rounded-full
                    border
                    border-black/10
                    bg-white

                    dark:border-white/15
                    dark:bg-white/5
                  "
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  aria-label="Next program"
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

            {/* CARDS */}
            <div className="grid gap-4 md:grid-cols-2">
              <ProgramCard
                variant="coach"
                delay={0.4}
              />

              <ProgramCard
                variant="chemistry"
                delay={0.52}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}