"use client";

import Image from "next/image";
import { ArrowRight, Gift, Target, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import rightTennis from "@/public/images/benefits/right-tennis.jpg";

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
        min-h-127.5
        overflow-hidden
        rounded-4xl
        bg-white
        gap-5
        p-8
        text-[#111216]

        dark:bg-[#202228]
        dark:text-white

        lg:grid-cols-[minmax(0,1fr)_275px]
        lg:gap-8

        xl:grid-cols-[minmax(0,1fr)_310px]
        xl:gap-10
        xl:p-10
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex min-h-107.5 flex-col">
        {/* EST */}
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
          className="flex items-center gap-2.5"
        >
          <Target size={18} strokeWidth={2} className="text-[#F15A32]" />

          <span className="text-[15px] font-semibold tracking-[-0.02em] xl:text-[16px]">
            EST — 1997
          </span>
        </motion.div>

        {/* Description */}
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
            max-w-72.5
            text-[16px]
            font-normal
            leading-[1.45]
            tracking-[-0.018em]
            text-black/60

            dark:text-white/60

            xl:mt-7
            xl:text-[17px]
          "
        >
          Smart features designed to move with you — fast, flexible, and built
          for everyday action.
        </motion.p>

        {/* Bottom */}
        <div className="mt-auto max-lg:mt-0">
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
              text-[34px]
              font-normal
              leading-none
              tracking-tighter

              xl:text-[38px]
            "
          >
            Visionary
            <br />
            Precision Play
          </motion.h3>

          {/* Join Now */}
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
                max-lg:mx-auto
                lg:mx-0
                mt-6
                flex
                h-11
                w-full
                max-w-62.5
                items-center
                justify-between
                overflow-hidden
                rounded-full
                bg-[#050505]
                px-4
                no-underline
            "
            >
            <span
                className="
                relative
                z-20
                block
                text-[14px]
                font-semibold
                leading-none
                text-white
                "
                style={{
                color: "#ffffff",
                }}
            >
                Join Now!
            </span>

            <span
                className="
                relative
                z-20
                grid
                size-7
                shrink-0
                place-items-center
                rounded-full
                bg-white/10
                text-white
                "
                style={{
                color: "#ffffff",
                }}
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

      {/* TENNIS IMAGE */}
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
          min-h-107.5
          overflow-hidden
          rounded-[28px]
        "
      >
        <Image
          src={rightTennis}
          alt=""
          fill
          quality={100}
          sizes="310px"
          className="object-cover object-center"
        />

        {/* February */}
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
          "
        >
          <Gift size={13} strokeWidth={1.8} />
          February Sale
        </motion.div>

        {/* Stats */}
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
            w-41
            overflow-hidden
            rounded-[22px]
            text-black
            shadow-[0_12px_26px_rgba(0,0,0,0.10)]
          "
        >
          {/* White stats body */}
          <div
            className="
              rounded-t-[22px]
              bg-white
              px-4
              pb-3
              pt-4
            "
          >
            <div className="text-center text-[11px] text-black/55">
              Tenis Outdor
            </div>

            <div className="mt-2 flex items-end justify-between">
              <CountUp
                from={0}
                to={86}
                duration={2}
                suffix="%"
                className="
                  text-[31px]
                  font-medium
                  leading-none
                  tracking-tighter
                "
              />

              <span className="pb-0.5 text-[10px] font-medium text-black/65">
                Member
              </span>
            </div>
          </div>

          {/* Bottom translucent strip */}
          <div
            className="
              relative
              h-8
              overflow-hidden
              rounded-b-[22px]
              bg-white/25
              backdrop-blur-md
            "
          >
            {/* Subtle white blur on the remaining side */}
            <div
              className="
                absolute
                inset-y-0
                right-0
                w-[34%]
                bg-white/20
                backdrop-blur-lg
              "
            />

            {/* Boost */}
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
                w-[66%]
                items-center
                justify-center
                gap-1.5
                bg-[#48BBD4]
                text-[11px]
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
