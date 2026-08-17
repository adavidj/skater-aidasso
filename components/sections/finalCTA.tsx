"use client";

import Image from "next/image";
import { ArrowUpRight, Badge, Bike, Zap } from "lucide-react";
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
        bg-[#F4F6FC]
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
            px-6
            pt-8
            pb-10
            text-black

            dark:bg-[#202228]
            dark:text-white

            sm:px-8
            sm:pt-10
            sm:pb-12

            lg:px-12
            lg:pt-12
            lg:pb-12
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
            {/* Explore card */}
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
                h-64
                overflow-hidden
                rounded-3xl

                sm:h-96

                lg:col-span-3
                lg:h-80
              "
            >
              <Image
                src={exploreImage}
                alt=""
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 20rem"
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
                  bg-black/15
                "
              />

              <div
                className="
                  absolute
                  left-6
                  top-6
                  z-10

                  flex
                  items-center
                  gap-2

                  text-sm
                  font-medium
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
                NEW EXPERIENCE
              </div>

              <div
                className="
                  absolute
                  bottom-12
                  left-6
                  z-10

                  text-4xl
                  font-normal
                  leading-none
                  tracking-tighter
                  text-white

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
                  bottom-6
                  right-6
                  z-20

                  grid
                  size-14
                  place-items-center

                  rounded-full
                  bg-white
                  text-black

                  sm:size-16
                "
              >
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </motion.span>
            </motion.a>

            {/* Main message */}
            <div
              className="
                text-center

                lg:col-span-6
                lg:text-left
                lg:pt-2
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

                  text-[32px]
                  font-normal
                  leading-none
                  tracking-tighter

                  sm:text-5xl
                  md:text-6xl

                  lg:text-7xl
                "
              >
                We’re doing everything
                <br className="hidden sm:block" /> for future healthiness.
              </motion.h2>

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
                  delay: 0.25,
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
                    font-medium
                    rounded-full

                    border
                    border-black/10

                    bg-white
                    px-4

                    text-sm

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Bike
                    size={17}
                    strokeWidth={1.7}
                    className="text-emerald-400"
                  />
                  Trainer & Coach Access
                </span>

                <span
                  className="
                    flex
                    h-10
                    items-center
                    gap-2
                    font-medium

                    rounded-full

                    border
                    border-black/10

                    bg-white
                    px-4

                    text-sm

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Zap size={17} strokeWidth={1.7} className="text-[#FF5B14]" />
                  Priority Event
                </span>

                <span
                  className="
                    flex
                    h-10
                    items-center
                    gap-2

                    rounded-full
                    font-medium
                    border
                    border-black/10

                    bg-white
                    px-4

                    text-sm

                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <Badge
                    size={17}
                    strokeWidth={1.7}
                    className="text-cyan-400"
                  />
                  Badges
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
                  gap-6

                  text-center

                  lg:text-left
                "
              >
                <nav
                  className="
                    flex
                    flex-col

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
                    Event
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
                      gap-1

                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    X (Twitter)
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>

                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      gap-1

                      transition-opacity
                      duration-300

                      hover:opacity-50
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
                      gap-1

                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    Linkedin
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </a>
                </nav>
              </div>

              {/* Le cercle reste au bas de cette colonne */}
              <div
                className="
                  mt-auto

                  flex
                  justify-center
                  pt-8

                  lg:justify-start
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

          {/* Contact information */}
          <div
            className="
              mt-12

              grid
              grid-cols-1
              gap-8
              font-medium
              sm:grid-cols-2

              lg:mt-16
              lg:grid-cols-12
              lg:items-end
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
                font-medium
                sm:items-end

                lg:col-span-9
                lg:flex-row
                lg:items-center
                lg:justify-end
                lg:gap-10
              "
            >
              <a
                href="mailto:hello@granger.com"
                className="
                  transition-opacity
                  duration-300

                  hover:opacity-50
                "
              >
                hello@granger.com
              </a>

              <span>©2025 Design by Granger</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
