"use client";

import Image from "next/image";
import { useState } from "react";

import { Footprints, Minus, Plus, Shirt } from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import exploreImage from "@/public/images/benefits/explore.png";

import { Container } from "@/components/ui/container";
import { BenefitCard } from "@/components/shared/cards/benefitCard";

import { benefitItems } from "@/lib/data/features";
import { premiumEase } from "@/lib/motion";

export function Benefits() {
  const [activeItem, setActiveItem] = useState<string>("connections");

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="product"
      className="
        w-full
        bg-[#F4F6FC]

        pb-10
        pt-16

        text-[#111216]

        dark:bg-[#17191e]
        dark:text-white

        sm:pb-14
        sm:pt-20

        lg:pb-12
        lg:pt-24
      "
    >
      <Container>
        <div
          className="
            grid
            items-stretch
            gap-10

            sm:gap-12

            lg:grid-cols-5
            lg:gap-8

            xl:gap-10
          "
        >
          {/* Left */}
          <div
            className="
              flex
              flex-col

              lg:col-span-2
            "
          >
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
                ease: premiumEase,
              }}
              className="
                flex
                items-center
                justify-center
                gap-2

                lg:justify-start
              "
            >
              <span
                className="
                  size-2
                  rounded-full
                  bg-[#FF5B14]
                "
              />

              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide

                  sm:text-base
                "
              >
                The benefit
              </span>
            </motion.div>

            {/* Heading */}
            <h2
              className="
                mt-6

                text-center
                text-4xl
                font-normal
                leading-none
                tracking-tighter

                sm:text-5xl

                lg:text-left

                xl:text-6xl
              "
            >
              <motion.span
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  ease: premiumEase,
                }}
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center

                  lg:justify-start
                "
              >
                <span>Explore</span>

                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.82,
                          rotate: -5,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.25,
                    ease: premiumEase,
                  }}
                  className="
                    relative
                    mx-2

                    inline-block

                    h-9
                    w-16
                    shrink-0

                    overflow-hidden
                    rounded-xl

                    sm:h-10
                    sm:w-20

                    xl:h-12
                    xl:w-24
                    xl:rounded-2xl
                  "
                >
                  <Image
                    src={exploreImage}
                    alt=""
                    fill
                    quality={100}
                    sizes="96px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.span>

                <span>your</span>
              </motion.span>

              <motion.span
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.12,
                  ease: premiumEase,
                }}
                className="
                  mt-1
                  block
                  pb-1
                "
              >
                freedom to ride.
              </motion.span>
            </h2>

            {/* Pills */}
            <motion.div
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
                delay: 0.35,
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
              <div
                className="
                  flex
                  h-10
                  items-center
                  gap-2

                  rounded-full
                  bg-white

                  px-4

                  text-sm
                  font-medium
                  tracking-tight

                  shadow-lg
                  shadow-black/5

                  dark:bg-white/10
                  dark:shadow-none

                  sm:text-base
                "
              >
                <Footprints size={16} strokeWidth={1.8} />

                <span>Street Sessions</span>
              </div>

              <div
                className="
                  flex
                  h-10
                  items-center
                  gap-2

                  rounded-full
                  bg-white

                  px-4

                  text-sm
                  font-medium
                  tracking-tight

                  shadow-lg
                  shadow-black/5

                  dark:bg-white/10
                  dark:shadow-none

                  sm:text-base
                "
              >
                <Shirt size={16} strokeWidth={1.8} />

                <span>Skate Gear</span>
              </div>
            </motion.div>

            {/* Accordion */}
            <motion.div
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
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: premiumEase,
              }}
              className="
                mt-12

                space-y-2

                sm:mt-16

                lg:mt-auto
                lg:pt-16
              "
            >
              {benefitItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    className={`
                      overflow-hidden
                      rounded-2xl

                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "bg-white shadow-lg shadow-black/5 dark:bg-white/10 dark:shadow-none"
                          : "bg-transparent"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveItem((current) =>
                          current === item.id ? "" : item.id,
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4

                        px-5
                        py-4

                        text-left
                      "
                    >
                      <span
                        className="
                          text-lg
                          font-medium
                          tracking-tight

                          sm:text-xl
                        "
                      >
                        {item.title}
                      </span>

                      <span className="shrink-0">
                        {isActive ? (
                          <Minus size={18} strokeWidth={1.5} />
                        ) : (
                          <Plus size={18} strokeWidth={1.5} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: premiumEase,
                          }}
                          className="overflow-hidden"
                        >
                          <p
                            className="
                              max-w-md

                              px-5
                              pb-5

                              text-sm
                              font-normal
                              leading-relaxed
                              tracking-tight
                              text-black/55

                              dark:text-white/55

                              sm:text-base
                            "
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right */}
          <div
            className="
              min-w-0

              lg:col-span-3
            "
          >
            <BenefitCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
