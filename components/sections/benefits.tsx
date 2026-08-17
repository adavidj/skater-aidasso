"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus, Salad, Shirt } from "lucide-react";
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
        pt-20
        pb-10
        text-[#111216]

        dark:bg-[#17191e]
        dark:text-white

        lg:pt-24
        lg:pb-12
      "
    >
      <Container>
        <div
          className="
            grid
            items-stretch
            gap-10

            lg:grid-cols-[440px_minmax(0,1fr)]
            lg:gap-8

            xl:grid-cols-[500px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          {/* LEFT */}
          <div className="flex flex-col">
            {/* Eyebrow */}
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
              className="flex items-center justify-center gap-2.5 lg:justify-start"
            >
              <span className="size-2 rounded-full bg-[#49BDD7]" />

              <span className="text-normal font-semibold tracking-tight uppercase">
                The benefit
              </span>
            </motion.div>

            {/* Heading */}
            <h2
              className="
                mt-6
                text-center
                text-[34px]
                font-normal
                leading-[1.02]
                tracking-[-0.055em]

                sm:text-[48px]
                lg:text-left
                lg:text-[52px]
                xl:text-[58px]
              "
            >
              {/* First line */}
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
                className="flex items-center flex-wrap justify-center lg:justify-start"
              >
                <span>Explore</span>

                {/* Explore image */}
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
                    mx-2.5
                    inline-block
                    h-10
                    w-17.5
                    shrink-0
                    overflow-hidden
                    rounded-[14px]

                    xl:h-11.25
                    xl:w-19.5
                    xl:rounded-2xl
                  "
                >
                  <Image
                    src={exploreImage}
                    alt=""
                    fill
                    quality={100}
                    sizes="80px"
                    className="object-cover"
                  />
                </motion.span>

                <span>our</span>
              </motion.span>

              {/* Second line */}
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
                className="mt-1 block pb-1"
              >
                flexible of activity.
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
              className="mt-8 flex flex-wrap items-center gap-3"
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
                  text-[14px]
                  font-medium
                  tracking-[-0.02em]
                  shadow-[0_5px_18px_rgba(25,40,70,0.07)]

                  dark:bg-white/10
                  dark:shadow-none
                "
              >
                <Salad size={16} strokeWidth={1.8} />

                <span>Eating After the Game</span>
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
                  text-[14px]
                  font-medium
                  tracking-[-0.02em]
                  shadow-[0_5px_18px_rgba(25,40,70,0.07)]

                  dark:bg-white/10
                  dark:shadow-none
                "
              >
                <Shirt size={16} strokeWidth={1.8} />

                <span>Game Jersey</span>
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
              className="mt-16 space-y-2 xl:mt-20"
            >
              {benefitItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    className={`
                      overflow-hidden
                      rounded-[20px]
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "bg-white shadow-[0_5px_20px_rgba(25,40,70,0.035)] dark:bg-white/10 dark:shadow-none"
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
                        px-5
                        py-4
                        text-left
                      "
                    >
                      <span className="text-[18px] font-medium tracking-[-0.03em] xl:text-[19px]">
                        {item.title}
                      </span>

                      {isActive ? (
                        <Minus size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
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
                              max-w-102.5
                              px-5
                              pb-5
                              text-[15px]
                              font-normal
                              leading-normal
                              tracking-[-0.015em]
                              text-black/55

                              dark:text-white/55
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

          {/* RIGHT */}
          <BenefitCard />
        </div>
      </Container>
    </section>
  );
}
