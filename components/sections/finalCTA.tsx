"use client";

import Image from "next/image";

import { ArrowUpRight, Badge, Route, UsersRound, Zap } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import exploreImage from "@/public/images/finalCTA/explore.jpg";

import { Container } from "@/components/ui/container";
import { premiumEase } from "@/lib/motion";

function DotBurst() {
  const dots = [
    [50, 20],
    [50, 32],
    [34, 38],
    [50, 44],
    [66, 38],
    [26, 50],
    [42, 50],
    [58, 50],
    [74, 50],
    [34, 62],
    [50, 56],
    [66, 62],
    [50, 68],
    [50, 80],
  ];

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="size-16">
      {dots.map(([cx, cy], index) => (
        <circle key={index} cx={cx} cy={cy} r="4" fill="currentColor" />
      ))}
    </svg>
  );
}

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="
        w-full
        bg-[#F1F3F8]
        pt-8

        dark:bg-[#17191e]

        sm:pt-12

        lg:pt-10
      "
    >
      <Container>
        <div
          className="
            rounded-t-3xl
            bg-white

            px-5
            pb-10
            pt-8

            text-black

            dark:bg-[#202228]
            dark:text-white

            sm:px-8
            sm:pb-12
            sm:pt-10

            lg:px-12
            lg:pb-12
            lg:pt-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-10

              sm:gap-12

              lg:grid-cols-12
              lg:gap-8
            "
          >
            {/* Explore */}
            <motion.a
              href="#program"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: premiumEase,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              className="
                group
                relative

                mx-auto
                h-72
                w-full
                max-w-md

                overflow-hidden
                rounded-3xl

                sm:h-96
                sm:max-w-xl

                lg:col-span-3
                lg:mx-0
                lg:h-80
                lg:max-w-none
              "
            >
              <Image
                src={exploreImage}
                alt=""
                fill
                quality={100}
                sizes="
                  (max-width: 1024px) 100vw,
                  25vw
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-black/25
                "
              />

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-10

                  flex
                  items-center
                  gap-2

                  text-xs
                  font-medium
                  uppercase
                  tracking-wide
                  text-white

                  sm:left-6
                  sm:top-6
                  sm:text-sm
                "
              >
                <span
                  className="
                    size-2
                    rounded-full
                    bg-white
                  "
                />
                Keep Riding
              </div>

              <div
                className="
                  absolute
                  bottom-12
                  left-5
                  z-10

                  text-4xl
                  font-normal
                  leading-none
                  tracking-tighter
                  text-white

                  sm:left-6

                  lg:text-5xl
                "
              >
                Explore
                <br />
                More
              </div>

              <motion.span
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 45,
                      }
                }
                className="
                  absolute
                  bottom-5
                  right-5
                  z-20

                  grid
                  size-14
                  place-items-center

                  rounded-full

                  bg-white
                  text-black

                  sm:bottom-6
                  sm:right-6
                  sm:size-16
                "
              >
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </motion.span>
            </motion.a>

            {/* Main */}
            <div
              className="
                flex
                flex-col
                items-center

                text-center

                lg:col-span-6
                lg:items-start
                lg:pt-2
                lg:text-left
              "
            >
              <motion.h2
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.1,
                  ease: premiumEase,
                }}
                className="
                  max-w-4xl

                  text-4xl
                  font-normal
                  leading-none
                  tracking-tighter

                  sm:text-5xl

                  md:text-6xl

                  lg:text-6xl

                  xl:text-7xl
                "
              >
                We’re shaping the
                <br className="hidden sm:block" /> future of skate culture.
              </motion.h2>

              <motion.p
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
                  delay: 0.2,
                  ease: premiumEase,
                }}
                className="
                  mt-6
                  max-w-xl

                  text-base
                  leading-relaxed
                  text-black/55

                  dark:text-white/55

                  sm:text-lg
                "
              >
                Discover sessions, connect with riders, track your progression
                and keep pushing every line further.
              </motion.p>

              {/* Pills */}
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
                  delay: 0.3,
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
                <span
                  className="
                    flex
                    h-10
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-black/10

                    bg-white

                    px-4

                    text-sm
                    font-medium

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <UsersRound
                    size={17}
                    strokeWidth={1.7}
                    className="text-emerald-400"
                  />
                  Skate Coach Access
                </span>

                <span
                  className="
                    flex
                    h-10
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-black/10

                    bg-white

                    px-4

                    text-sm
                    font-medium

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Zap size={17} strokeWidth={1.7} className="text-[#FF5B14]" />
                  Priority Sessions
                </span>

                <span
                  className="
                    flex
                    h-10
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-black/10

                    bg-white

                    px-4

                    text-sm
                    font-medium

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Badge
                    size={17}
                    strokeWidth={1.7}
                    className="text-cyan-400"
                  />
                  Progress Badges
                </span>

                <span
                  className="
                    flex
                    h-10
                    items-center
                    gap-2

                    rounded-full

                    border
                    border-black/10

                    bg-white

                    px-4

                    text-sm
                    font-medium

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Route
                    size={17}
                    strokeWidth={1.7}
                    className="text-[#8E966F]"
                  />
                  Street Spots
                </span>
              </motion.div>
            </div>

            {/* Navigation */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: premiumEase,
              }}
              className="
                flex
                flex-col
                items-center

                lg:col-span-3
                lg:items-start
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  gap-8

                  text-center

                  lg:w-full
                  lg:text-left
                "
              >
                <nav
                  className="
                    flex
                    flex-col
                    gap-2

                    text-base
                    leading-tight
                  "
                >
                  <a
                    href="#program"
                    className="
                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    Program
                  </a>

                  <a
                    href="#product"
                    className="
                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    Product
                  </a>

                  <a
                    href="#events"
                    className="
                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    Events
                  </a>

                  <a
                    href="#about"
                    className="
                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    About
                  </a>
                </nav>

                <nav
                  className="
                    flex
                    flex-col
                    gap-3

                    text-base
                  "
                >
                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1

                      transition-opacity
                      duration-300

                      hover:opacity-50

                      lg:justify-start
                    "
                  >
                    X
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>

                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1

                      transition-opacity
                      duration-300

                      hover:opacity-50

                      lg:justify-start
                    "
                  >
                    Instagram
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>

                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1

                      transition-opacity
                      duration-300

                      hover:opacity-50

                      lg:justify-start
                    "
                  >
                    Linkedin
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                </nav>
              </div>

              {/* Dot */}
              <div
                className="
                  mt-10

                  flex
                  justify-center

                  lg:mt-auto
                  lg:justify-start
                  lg:pt-8
                "
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [0, 8, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.05,
                          rotate: 12,
                        }
                  }
                  className="
                    grid
                    size-28
                    place-items-center

                    rounded-full

                    bg-[#FF4B0B]
                    text-white

                    sm:size-32
                  "
                >
                  <DotBurst />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: premiumEase,
            }}
            className="
              mt-12

              grid
              grid-cols-1
              gap-8

              border-t
              border-black/10

              pt-8

              text-center
              font-medium

              dark:border-white/10

              sm:grid-cols-2

              lg:mt-16
              lg:grid-cols-12
              lg:items-end
              lg:text-left
            "
          >
            <div
              className="
                text-base
                leading-tight

                lg:col-span-3
              "
            >
              <div>San Diego — California</div>

              <div>Paris — France</div>
            </div>

            <div
              className="
                flex
                flex-col
                gap-2

                text-base

                sm:items-end
                sm:text-right

                lg:col-span-9
                lg:flex-row
                lg:items-center
                lg:justify-end
                lg:gap-10
              "
            >
              <a
                href="mailto:hello@skater.com"
                className="
                  transition-opacity
                  duration-300

                  hover:opacity-50
                "
              >
                hello@skater.com
              </a>

              <span>©2026 Design by Skater</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
