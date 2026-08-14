"use client";

import Image from "next/image";
import { Crown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import basketball from "@/public/images/hero/basket.png";
import heroBg from "@/public/images/hero/hero.png";

import { Header } from "@/components/shared/layout/header";
import { premiumEase } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="
        relative
        h-dvh
        w-full
        overflow-hidden
        bg-[#087ead]
        text-white

        [--wellness-column:9.75rem]
        xl:[--wellness-column:10rem]
      "
    >
      <Header />

      {/* Background court */}
      <motion.div
        className="absolute inset-0"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 1.04,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: premiumEase,
        }}
      >
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#007dae]/5" />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 h-full w-full px-5 sm:px-7 lg:px-10 xl:px-12">
        <div className="relative h-full w-full">
          {/* Hero upper labels */}
          <div className="absolute left-0 right-0 top-24 z-30 flex items-center justify-between">
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
                text-[15px]
                font-semibold
                uppercase
                leading-none
                tracking-tight
                text-white/95
                xl:text-[16px]
              "
            >
              Custom Wellness
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
                text-[15px]
                font-semibold
                uppercase
                leading-none
                tracking-tight
                text-white
                transition-opacity
                duration-300
                hover:opacity-60
                xl:text-[16px]
              "
            >
              <span className="inline-block border-b border-current pb-1">
                Get in touch
              </span>
            </motion.a>
          </div>

          {/* Intro copy */}
          <div
            className="
              absolute
              left-0
              top-[25%]
              z-30
              max-w-120
              lg:left-(--wellness-column)
            "
          >
            <h1 className="max-w-120 text-[42px] font-normal leading-[1.045] tracking-[-0.045em] sm:text-[46px] lg:text-[50px] xl:text-[54px]">
              <span className="block overflow-hidden pb-0.5">
                <motion.span
                  className="block"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          y: "115%",
                        }
                  }
                  animate={{
                    y: "0%",
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.55,
                    ease: premiumEase,
                  }}
                >
                  A new species
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
                  animate={{
                    y: "0%",
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.67,
                    ease: premiumEase,
                  }}
                >
                  of sportainment.
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
              className="mt-5 flex items-center gap-3"
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

              <p className="text-[14px] font-normal tracking-[-0.02em] text-white/95 sm:text-[15px]">
                Improve your health — performance well
              </p>
            </motion.div>
          </div>

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
              bottom-[3%]
              left-0
              z-10
              w-full
              font-bold
            "
          >
            <svg
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              className="block aspect-1000/250 w-full"
            >
              <text
                x="0"
                y="170"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                fill="currentColor"
                fontSize={230}
              >
                Granger
              </text>
            </svg>
          </motion.div>

          {/* Basketball */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 120,
                    y: -25,
                    scale: 0.86,
                    rotate: 7,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.35,
              delay: 0.35,
              ease: premiumEase,
            }}
            className="
              pointer-events-none
              absolute
              right-[1%]
              top-[15%]
              z-20
              aspect-square
              w-[clamp(480px,42vw,820px)]
            "
          >
            {/* Floating ball + shadow */}
            <motion.div
              className="absolute inset-0 overflow-visible"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -9, 0],
                      rotate: [0, -0.8, 0],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 5.8,
                      delay: 1.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              {/*
                Large soft oval shadow.

                It is anchored beneath the left side of the ball.
                Because its transform origin is on the right,
                rotate(23deg) sends its left edge UP and LEFT,
                toward Custom Wellness.
              */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  z-0
                  rounded-[50%]
                "
                style={{
                  left: "-146%",
                  top: "34%",
                  width: "202%",
                  height: "58%",
                  transformOrigin: "100% 50%",
                  transform: "rotate(23deg)",
                  background:
                    "radial-gradient(ellipse at 94% 52%, rgba(0, 28, 52, 0.52) 0%, rgba(0, 30, 55, 0.42) 22%, rgba(0, 32, 58, 0.31) 44%, rgba(0, 34, 60, 0.19) 64%, rgba(0, 35, 62, 0.09) 80%, rgba(0, 35, 62, 0) 100%)",
                  filter: "blur(10px)",
                }}
              />

              {/* Wider feathered edge */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  z-0
                  rounded-[50%]
                "
                style={{
                  left: "-154%",
                  top: "30%",
                  width: "210%",
                  height: "68%",
                  transformOrigin: "100% 50%",
                  transform: "rotate(23deg)",
                  background:
                    "radial-gradient(ellipse at 94% 52%, rgba(0, 25, 47, 0.22) 0%, rgba(0, 28, 52, 0.17) 42%, rgba(0, 30, 55, 0.08) 72%, rgba(0, 30, 55, 0) 100%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Dense contact shadow below the ball */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  z-1
                  rounded-[50%]
                "
                style={{
                  left: "-4%",
                  top: "60%",
                  width: "42%",
                  height: "24%",
                  transform: "rotate(18deg)",
                  background:
                    "radial-gradient(ellipse, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.16) 52%, rgba(0,0,0,0) 100%)",
                  filter: "blur(16px)",
                }}
              />

              {/* Ball */}
              <div className="absolute inset-0 z-10">
                <Image
                  src={basketball}
                  alt=""
                  fill
                  priority
                  quality={100}
                  sizes="820px"
                  className="object-contain"
                  style={{
                    filter:
                      "drop-shadow(-12px 16px 18px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}