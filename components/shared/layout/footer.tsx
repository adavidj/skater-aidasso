"use client";

import { ArrowUpRight, FileText, MapPin } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { premiumEase } from "@/lib/motion";

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      className="
        w-full
        bg-[#F1F3F8]
        pb-8

        dark:bg-[#17191e]

        lg:pb-10
      "
    >
      <Container>
        <div
          className="
            overflow-hidden
            rounded-b-3xl
            bg-white

            px-5
            pb-8

            text-[#111216]

            dark:bg-[#202228]
            dark:text-white

            sm:px-8

            lg:px-12
            lg:pb-10
          "
        >
          {/* Legal */}
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
              duration: 0.65,
              ease: premiumEase,
            }}
            className="
              relative
              z-30

              -mx-5

              bg-white

              dark:bg-[#202228]

              sm:-mx-8

              lg:-mx-12
            "
          >
            <div
              className="
                grid
                grid-cols-1
                justify-items-center
                gap-4

                px-5
                py-6

                text-center

                sm:grid-cols-3
                sm:items-center
                sm:justify-items-stretch
                sm:px-8
                sm:text-left

                lg:px-12
              "
            >
              <a
                href="#"
                className="
                  w-fit

                  text-sm
                  font-normal

                  transition-opacity
                  duration-300

                  hover:opacity-50

                  sm:text-base
                "
              >
                Privacy Policy
              </a>

              <span
                className="
                  text-sm
                  font-normal

                  sm:justify-self-center
                  sm:text-base
                "
              >
                WEST — 2018
              </span>

              <a
                href="#"
                className="
                  flex
                  w-fit
                  items-center
                  gap-1

                  text-sm
                  font-normal

                  transition-opacity
                  duration-300

                  hover:opacity-50

                  sm:justify-self-end
                  sm:text-base
                "
              >
                Terms & Conditions
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* Giant wordmark */}
          <div
            className="
              relative

              -mx-5
              -mt-8

              h-64

              overflow-hidden

              sm:-mx-8
              sm:-mt-10
              sm:h-72

              lg:-mx-12
              lg:-mt-12
              lg:h-80
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: 0.08,
                ease: premiumEase,
              }}
              className="
                absolute
                inset-x-0

                -top-12

                sm:-top-16

                lg:-top-20
              "
            >
              <svg
                viewBox="0 0 1200 300"
                preserveAspectRatio="none"
                aria-label="Skater"
                role="img"
                className="
                  block
                  h-72
                  w-full

                  text-[#111216]

                  dark:text-white

                  sm:h-80

                  lg:h-96
                "
              >
                <text
                  x="0"
                  y="250"
                  textLength="1200"
                  lengthAdjust="spacingAndGlyphs"
                  fill="currentColor"
                  fontSize="310"
                  fontWeight="500"
                  fontFamily="var(--font-montserrat)"
                  letterSpacing="-10"
                >
                  Skater
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Bottom */}
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
              duration: 0.7,
              delay: 0.15,
              ease: premiumEase,
            }}
            className="
              mt-2

              flex
              flex-col
              items-center
              gap-6

              text-center

              sm:mt-3

              md:flex-row
              md:items-center
              md:justify-between
              md:text-left

              lg:gap-0
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-3

                md:justify-start
              "
            >
              <motion.a
                href="#events"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                className="
                  flex
                  h-10
                  items-center
                  gap-2

                  rounded-full
                  bg-[#F1F3F8]

                  px-4

                  text-sm
                  font-medium

                  dark:bg-white/5

                  sm:h-11
                  sm:px-5
                "
              >
                <MapPin size={16} strokeWidth={1.6} />
                Skate Spots
              </motion.a>

              <motion.a
                href="#"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                className="
                  flex
                  h-10
                  items-center
                  gap-2

                  rounded-full
                  bg-[#F1F3F8]

                  px-4

                  text-sm
                  font-medium

                  dark:bg-white/5

                  sm:h-11
                  sm:px-5
                "
              >
                <FileText size={16} strokeWidth={1.6} />
                Resources
              </motion.a>
            </div>

            <div
              className="
                text-sm
                font-medium
                text-black

                dark:text-white

                sm:text-base
              "
            >
              ©2026 Skater. All Rights Reserved
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
