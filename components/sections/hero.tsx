"use client";

import Image from "next/image";
import { Crown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import basketball from "@/public/images/hero/basket.png";
import heroBg from "@/public/images/hero/hero.png";

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
        w-full
        overflow-hidden
        bg-[#087ead]
        text-white

        [--wellness-column:9.75rem]
        xl:[--wellness-column:10rem]
      "
    >
      <Header />

      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
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

      {/* 1440px content grid */}
      <Container className="relative z-10 h-full">
        <div className="relative h-full w-full overflow-visible">
          {/* Upper labels */}
          <div className="absolute left-0 right-0 top-17 z-40 flex flex-col items-center gap-3 sm:top-24 sm:flex-row sm:justify-between sm:gap-0">
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
                order-2
                text-[15px]
                font-medium
                uppercase
                leading-none
                tracking-wide
                text-white/85

                sm:order-1
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
                order-1
                text-[15px]
                font-medium
                uppercase
                leading-none
                tracking-wide
                text-white/85
                transition-opacity
                duration-300
                hover:opacity-60

                max-sm:hidden
                sm:order-2
                xl:text-[16px]
              "
            >
              <span className="inline-block border-b border-current text-white/85 pb-1">
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
              z-40
              max-w-120

              lg:left-(--wellness-column)
            "
          >
            <h1
              className="
                max-w-120
                text-[34px]
                font-normal
                leading-[1.045]
                tracking-[-0.045em]

                sm:text-[46px]
                lg:text-[50px]
                xl:text-[54px]
              "
            >
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
                <Crown size={16} fill="currentColor" strokeWidth={1.2} />
              </motion.span>

              <p
                className="
                  text-[14px]
                  font-normal
                  tracking-[-0.02em]
                  text-white/95
                  
                  sm:text-[15px]
                "
              >
                Improve your health — performance well
              </p>
            </motion.div>
          </div>

          {/* Get in touch — mobile only, centered above Granger */}
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
              bottom-[15%]
              left-0
              right-0
              z-40
              block
              text-center
              text-[15px]
              font-medium
              uppercase
              leading-none
              tracking-wide
              text-white/85
              transition-opacity
              duration-300
              hover:opacity-60

              sm:hidden
            "
          >
            <span className="inline-block border-b border-current text-white/85 pb-1">
              Get in touch
            </span>
          </motion.a>

          {/* Giant Granger */}
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
              
              w-full
              font-medium
            "
          >
            <svg
              viewBox="0 0 1000 280"
              preserveAspectRatio="none"
              className="block aspect-1000/240 w-full"
            >
              <text
                x="0"
                y="205"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                fill="currentColor"
                fontSize={280}
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
              right-[-1.8%]
              top-[16%]
              z-20
              aspect-square
              w-[clamp(280px,52vw,830px)]

              sm:right-[-1.8%]
              max-sm:left-1/2
              max-sm:top-[48%]
              max-sm:-translate-x-1/2
              max-sm:w-[clamp(280px,70vw,450px)]
            "
          >
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
              {/* Single clean oval shadow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  z-0
                  rounded-[50%]
                "
                style={{
                  // 1. ANCRAGE SOUS LE BALLON (Remplace 'left' par 'right')
                  right: "43%",
                  top: "34%",
                  height: "56%",

                  // 2. LONGUEUR PRÉCISE (Ajuste cette valeur pour définir la portée exacte)
                  // Exemples : "100%" (très courte), "120%" (moyenne), "150%" (longue)
                  width: "130%",

                  // 3. ROTATION (Garde la forme exacte sans déformation)
                  transformOrigin: "100% 50%",
                  transform: "rotate(28deg)",

                  // 4. RENDU VISUEL
                  background: "rgba(0, 27, 50, 0.42)",
                  filter: "blur(9px)",

                  // Fondu propre sur la fin de l'ombre
                  WebkitMaskImage:
                    "linear-gradient(to left, black 0%, black 60%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to left, black 0%, black 60%, transparent 100%)",
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
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 52vw, 830px"
                  className="object-contain"
                  style={{
                    filter: "drop-shadow(-8px 10px 12px rgba(0,0,0,0.10))",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
