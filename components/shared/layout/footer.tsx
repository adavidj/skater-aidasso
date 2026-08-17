"use client";

import { ArrowUpRight, FileText, Link2 } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { premiumEase } from "@/lib/motion";

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      className="
        w-full
        bg-[#F4F6FC]
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
            px-6
            pb-8
            text-[#111216]

            dark:bg-[#202228]
            dark:text-white

            sm:px-8

            lg:px-12
            lg:pb-10
          "
        >
          {/* Liens légaux */}
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

              -mx-6

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
                gap-4

                px-6
                py-6

                sm:grid-cols-3
                sm:items-center
                sm:px-8

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
                EST — 2018
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

          {/* Le haut du logo passe sous la zone blanche */}
          <div
            className="
              relative

              -mx-6
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
                aria-label="granger"
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
                  fontFamily="var(--font-granger)"
                  letterSpacing="-14"
                >
                  Granger
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Bas du footer */}
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
              gap-6

              sm:mt-3

              md:flex-row
              md:items-center
              md:justify-between

              lg:gap-0
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
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
                  bg-[#F4F6FC]

                  px-4

                  text-sm
                  font-medium

                  dark:bg-white/5

                  sm:h-11
                  sm:px-5
                "
              >
                <Link2 size={16} strokeWidth={1.6} />
                Website Attachment
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
                  bg-[#F4F6FC]

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
                text-black

                dark:text-white

                sm:text-base

                font-medium
              "
            >
              ©2025 Granger. All Rights Reserved
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
