"use client";

import { Crown } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Header } from "@/components/shared/layout/header";
import { Container } from "@/components/ui/container";
import { premiumEase } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="
        relative
        h-dvh
        min-h-dvh
        w-full
        overflow-hidden
        bg-[#060c10]
        text-white
      "
    >
      <Header />

      {/* Background video */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 1.03,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: premiumEase,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover "
        >
          <source src="images/hero/skate.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[#04131d]/25" />
      </motion.div>

      <Container className="relative z-10 h-full">
        <div className="relative h-full w-full overflow-visible">
          {/* Desktop labels */}
          <div
            className="
              absolute
              left-0
              right-0
              top-24
              z-40

              hidden
              items-center
              justify-between

              lg:flex
            "
          >
            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: premiumEase,
              }}
              className="
                text-sm
                font-medium
                uppercase
                leading-none
                tracking-wide
                text-white/85

                xl:text-base
              "
            >
              Urban Skate Culture
            </motion.span>

            <motion.a
              href="#contact"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: premiumEase,
              }}
              className="
                text-sm
                font-medium
                uppercase
                leading-none
                tracking-wide
                text-white/85

                transition-opacity
                duration-300

                hover:opacity-60

                xl:text-base
              "
            >
              <span className="inline-block border-b border-current pb-1">
                Get in touch
              </span>
            </motion.a>
          </div>

          {/* Mobile / tablet label */}
          <div
            className="
              absolute
              left-0
              right-0
              top-20
              z-40

              flex
              justify-center

              text-center

              sm:top-24

              lg:hidden
            "
          >
            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: premiumEase,
              }}
              className="
                text-sm
                font-medium
                uppercase
                leading-none
                tracking-wide
                text-white/85

                sm:text-base
              "
            >
              Urban Skate Culture
            </motion.span>
          </div>

          {/* Intro */}
          <div
            className="
              absolute
              left-1/2
              top-1/4
              z-40

              w-full
              max-w-md

              -translate-x-1/2

              text-center

              sm:max-w-xl

              lg:left-40
              lg:max-w-lg
              lg:translate-x-0
              lg:text-left
            "
          >
            <h1
              className="
                text-4xl
                font-normal
                leading-none
                tracking-tighter

                sm:text-5xl

                xl:text-6xl
              "
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          y: "115%",
                        }
                  }
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 0.55,
                    ease: premiumEase,
                  }}
                >
                  A new wave
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          y: "115%",
                        }
                  }
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 0.67,
                    ease: premiumEase,
                  }}
                >
                  of skate culture.
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.92,
                ease: premiumEase,
              }}
              className="
                mt-5

                flex
                items-center
                justify-center
                gap-3

                lg:justify-start
              "
            >
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        scale: 0,
                        rotate: -35,
                      }
                }
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.98,
                  ease: premiumEase,
                }}
                className="
                  grid
                  size-9
                  shrink-0
                  place-items-center

                  rounded-full

                  bg-[#ffa313]
                "
              >
                <Crown
                  size={16}
                  fill="currentColor"
                  strokeWidth={1.2}
                />
              </motion.span>

              <p
                className="
                  max-w-xs

                  text-sm
                  font-normal
                  leading-snug
                  tracking-tight
                  text-white/95

                  sm:max-w-none
                  sm:text-base
                "
              >
                Ride harder — move freer — live better
              </p>
            </motion.div>
          </div>

          {/* Mobile / tablet contact */}
          <motion.a
            href="#contact"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 1.05,
              ease: premiumEase,
            }}
            className="
              absolute
              bottom-36
              left-0
              right-0
              z-40

              text-center
              text-sm
              font-medium
              uppercase
              leading-none
              tracking-wide
              text-white/85

              transition-opacity
              duration-300

              hover:opacity-60

              sm:bottom-56
              sm:text-base

              md:bottom-72

              lg:hidden
            "
          >
            <span className="inline-block border-b border-current pb-1">
              Get in touch
            </span>
          </motion.a>

          {/* Giant wordmark */}
          <motion.div
            aria-hidden="true"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    clipPath: "inset(100% 0 0 0)",
                    y: 30,
                  }
            }
            animate={{
              opacity: 1,
              clipPath: "inset(0% 0 0 0)",
              y: 0,
            }}
            transition={{
              duration: 1.25,
              delay: 0.25,
              ease: premiumEase,
            }}
            className="
              pointer-events-none
              absolute
              bottom-4
              left-0
              z-10

              w-full

              font-medium

              sm:bottom-5

              lg:bottom-6
            "
          >
            <svg
              viewBox="0 0 1000 280"
              preserveAspectRatio="none"
              className="block h-auto w-full"
            >
              <text
                x="0"
                y="205"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                fill="currentColor"
                fontSize={280}
                fontWeight={500}
                fontFamily="var(--font-montserrat)"
              >
                Skater
              </text>
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}