"use client";

import Image from "next/image";

import { ArrowRight, Gauge, Target, Zap } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import rightSkate from "@/public/images/benefits/right-skate.jpg";

import { CountUp } from "@/components/shared/motion/countUp";
import { premiumEase } from "@/lib/motion";

export function BenefitCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 45,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.95,
        ease: premiumEase,
      }}
      className="
        grid
        h-full
        w-full

        gap-6

        overflow-hidden
        rounded-3xl

        bg-white

        p-5

        text-[#111216]

        dark:bg-[#202228]
        dark:text-white

        sm:p-6

        md:grid-cols-5
        md:gap-6
        md:p-8

        lg:gap-8

        xl:gap-10
        xl:p-10
      "
    >
      {/* Content */}
      <div
        className="
          flex
          flex-col
          items-center

          text-center

          md:col-span-3
          md:items-start
          md:text-left
        "
      >
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
            duration: 0.65,
            delay: 0.15,
            ease: premiumEase,
          }}
          className="
            flex
            items-center
            gap-2
          "
        >
          <Target size={18} strokeWidth={2} className="text-[#FF5B14]" />

          <span
            className="
              text-sm
              font-semibold
              tracking-wide

              sm:text-base
            "
          >
            WEST — 1997
          </span>
        </motion.div>

        <motion.p
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
            delay: 0.25,
            ease: premiumEase,
          }}
          className="
            mt-4
            max-w-sm

            text-base
            font-normal
            leading-relaxed
            tracking-tight
            text-black/60

            dark:text-white/60

            sm:text-lg

            md:max-w-xs

            xl:mt-7
          "
        >
          Built for every ride — discover new spots, track your progress and
          keep pushing your style further.
        </motion.p>

        <div
          className="
            mt-10
            w-full

            sm:mt-12

            md:mt-auto
          "
        >
          <motion.h3
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
              duration: 0.75,
              delay: 0.32,
              ease: premiumEase,
            }}
            className="
              text-3xl
              font-normal
              leading-none
              tracking-tighter

              sm:text-4xl
            "
          >
            Push Limits
            <br />
            Own Your Line
          </motion.h3>

          <motion.a
            href="#program"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.015,
                  }
            }
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.985,
                  }
            }
            className="
              group
              relative

              mx-auto
              mt-6

              flex
              h-12
              w-full
              max-w-xs

              items-center
              justify-between

              overflow-hidden
              rounded-full

              bg-[#050505]

              px-4

              no-underline

              md:mx-0
            "
          >
            <span
              className="
                relative
                z-20

                block

                text-sm
                font-semibold
                leading-none
                text-white
              "
            >
              Start Riding
            </span>

            <span
              className="
                relative
                z-20

                grid
                size-8
                shrink-0
                place-items-center

                rounded-full

                bg-white/10
                text-white
              "
            >
              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="
                  text-white

                  transition-transform
                  duration-300

                  group-hover:translate-x-0.5
                "
              />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Skate visual */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 30,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.85,
          delay: 0.1,
          ease: premiumEase,
        }}
        className="
          relative

          h-72
          w-full

          overflow-hidden
          rounded-3xl

          sm:h-80

          md:col-span-2
          md:h-auto
          md:min-h-96
        "
      >
        <Image
          src={rightSkate}
          alt=""
          fill
          quality={100}
          sizes="
            (max-width: 768px) 100vw,
            40vw
          "
          className="
            object-cover
            object-center
          "
        />

        {/* Session badge */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -10,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.45,
            ease: premiumEase,
          }}
          className="
            absolute
            right-3
            top-3
            z-20

            flex
            h-8
            items-center
            gap-2

            rounded-full

            bg-white

            px-3

            text-xs
            font-medium
            text-black

            sm:h-9
            sm:px-4
            sm:text-sm
          "
        >
          <Gauge size={14} strokeWidth={1.8} />
          Street Session
        </motion.div>

        {/* Progress card */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 34,
                  scale: 0.96,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            delay: 0.55,
            ease: premiumEase,
          }}
          className="
            absolute
            bottom-4
            left-4
            z-30

            w-40

            overflow-hidden
            rounded-2xl

            text-black

            shadow-xl

            sm:w-44
          "
        >
          <div
            className="
              rounded-t-2xl
              bg-white

              px-4
              pb-3
              pt-4
            "
          >
            <div
              className="
                text-center

                text-xs
                font-medium
                text-black/55
              "
            >
              Trick Progress
            </div>

            <div
              className="
                mt-2

                flex
                items-end
                justify-between
              "
            >
              <CountUp
                from={0}
                to={86}
                duration={2}
                suffix="%"
                className="
                  text-3xl
                  font-medium
                  leading-none
                  tracking-tighter
                "
              />

              <span
                className="
                  pb-0.5

                  text-xs
                  font-medium
                  text-black/65
                "
              >
                Level
              </span>
            </div>
          </div>

          <div
            className="
              relative

              h-8

              overflow-hidden
              rounded-b-2xl

              bg-white/25

              backdrop-blur-md
            "
          >
            <div
              className="
                absolute
                inset-y-0
                right-0

                w-1/3

                bg-white/20

                backdrop-blur-lg
              "
            />

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      scaleX: 0,
                    }
              }
              whileInView={{
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: premiumEase,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="
                absolute
                inset-y-0
                left-0
                z-10

                flex
                w-2/3

                items-center
                justify-center
                gap-1.5

                bg-[#FF5B14]

                text-xs
                font-medium
                text-white
              "
            >
              <Zap size={14} fill="currentColor" strokeWidth={1.3} />

              <span>Boost</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
