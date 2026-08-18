"use client";

import Image from "next/image";

import { Radio, Zap } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import chemistryImage from "@/public/images/program/chemistry.jpg";

import { premiumEase } from "@/lib/motion";

interface ProgramCardProps {
  variant: "coach" | "chemistry";
  delay?: number;
}

const profiles = [
  "/images/program/profile-1.jpg",
  "/images/program/profile-2.jpg",
  "/images/program/profile-3.jpg",
];

function ProfileStack({ size = "normal" }: { size?: "normal" | "small" }) {
  const dimensions = size === "small" ? "size-6" : "size-7";

  return (
    <div
      className="
        flex
        shrink-0
        items-center
      "
    >
      {profiles.map((profile, index) => (
        <span
          key={profile}
          className={`
            relative
            ${dimensions}

            overflow-hidden
            rounded-full

            border-2
            border-white

            bg-[#dedede]

            ${index > 0 ? "-ml-2" : ""}
          `}
          style={{
            zIndex: profiles.length - index,
          }}
        >
          <Image
            src={profile}
            alt=""
            fill
            sizes="32px"
            className="object-cover"
          />
        </span>
      ))}
    </div>
  );
}

export function ProgramCard({ variant, delay = 0 }: ProgramCardProps) {
  const reduceMotion = useReducedMotion();

  if (variant === "coach") {
    return (
      <motion.article
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 75,
                scale: 0.96,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.85,
          delay,
          ease: premiumEase,
        }}
        className="
          relative

          flex
          min-h-80
          w-full
          flex-col

          overflow-hidden
          rounded-3xl

          bg-[#050505]

          p-5

          text-white

          sm:min-h-96
          sm:p-7

          lg:min-h-80
          lg:p-6

          xl:min-h-96
          xl:p-7
        "
      >
        {/* Main copy */}
        <div
          className="
            mx-auto
            w-full
            max-w-xl

            text-center
            text-2xl
            font-normal
            leading-tight
            tracking-tighter

            sm:text-3xl

            md:text-4xl

            lg:mx-0
            lg:max-w-sm
            lg:text-left
            lg:text-3xl

            xl:text-4xl
          "
        >
          <span className="block">Meet the skate crew</span>

          <span
            className="
              my-1

              flex
              flex-wrap
              items-center
              justify-center
              gap-2

              lg:justify-start
            "
          >
            <ProfileStack />

            <span>and riders</span>
          </span>

          <span
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-2

              lg:justify-start
            "
          >
            <span>built to push</span>

            <Zap
              size={26}
              strokeWidth={1.8}
              className="
                shrink-0
                text-[#FF5B14]
              "
            />

            <span>your limits</span>
          </span>

          <span className="block">every session.</span>
        </div>

        {/* Footer */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: delay + 0.32,
            ease: premiumEase,
          }}
          className="
            mt-auto

            flex
            items-center
            justify-between
            gap-4

            pt-10
          "
        >
          <div
            className="
              flex
              items-center
              gap-2

              text-sm
              font-medium

              sm:text-base
            "
          >
            <Radio size={20} strokeWidth={1.8} />

            <span>Live</span>
          </div>

          <span
            className="
              rounded-full

              border
              border-white/55

              px-4
              py-2

              text-sm
              font-medium
              leading-none

              sm:text-base
            "
          >
            skater.com
          </span>
        </motion.div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 95,
              scale: 0.965,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: premiumEase,
      }}
      className="
        relative

        min-h-96
        w-full

        overflow-hidden
        rounded-3xl

        bg-[#5f7e48]

        lg:min-h-80

        xl:min-h-96
      "
    >
      {/* Image */}
      <motion.div
        className="
          absolute
          inset-0
        "
        initial={
          reduceMotion
            ? false
            : {
                scale: 1.07,
              }
        }
        whileInView={{
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.35,
          delay,
          ease: premiumEase,
        }}
      >
        <Image
          src={chemistryImage}
          alt=""
          fill
          quality={100}
          sizes="
            (max-width: 1024px) 100vw,
            50vw
          "
          className="
            object-cover
            object-center
          "
        />
      </motion.div>

      <div
        className="
          absolute
          inset-0

          bg-linear-to-t
          from-black/65
          via-black/10
          to-transparent
        "
      />

      {/* Spot */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: -8,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: delay + 0.2,
          ease: premiumEase,
        }}
        className="
          absolute
          left-4
          top-4
          z-20

          rounded-full

          bg-white/25

          px-3
          py-2

          text-xs
          font-medium
          leading-none
          text-white

          backdrop-blur-md

          sm:left-5
          sm:top-5
          sm:px-4
          sm:text-sm
        "
      >
        Street Spot
      </motion.div>

      {/* Riders */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: -14,
                scale: 0.92,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.65,
          delay: delay + 0.3,
          ease: premiumEase,
        }}
        className="
          absolute
          right-4
          top-4
          z-20

          flex
          min-w-24
          flex-col
          items-center

          rounded-2xl

          bg-white/25

          px-3
          py-3

          text-center
          text-white

          backdrop-blur-lg

          sm:right-5
          sm:top-5
          sm:min-w-28
        "
      >
        <div
          className="
            relative

            grid
            size-8
            place-items-center

            rounded-full

            bg-white

            shadow-sm

            sm:size-9
          "
        >
          <span
            className="
              absolute

              size-3

              rounded-full

              bg-[#FF5B14]
            "
          />

          <span
            className="
              absolute
              left-2
              top-2

              size-1.5

              rounded-full

              bg-[#56C2D8]
            "
          />
        </div>

        <span
          className="
            mt-2

            text-lg
            font-medium
            leading-none
            tracking-tight

            sm:text-xl
          "
        >
          5.55k
        </span>

        <span
          className="
            mt-1

            text-xs
            font-medium
            leading-none
            text-white/80
          "
        >
          Riders
        </span>
      </motion.div>

      {/* Bottom */}
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
          delay: delay + 0.37,
          ease: premiumEase,
        }}
        className="
          absolute
          inset-x-0
          bottom-0
          z-20

          flex
          flex-col
          items-center

          p-5

          text-center

          sm:p-7

          lg:items-start
          lg:p-5
          lg:text-left

          xl:p-6
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2

            lg:justify-start
          "
        >
          <ProfileStack size="small" />

          <span
            className="
              text-sm
              font-medium
              leading-none
              tracking-tight
              text-white

              sm:text-base
            "
          >
            2.50K Riders
          </span>
        </div>

        <h3
          className="
            mt-3

            text-3xl
            font-normal
            leading-none
            tracking-tighter
            text-white

            sm:text-4xl

            lg:text-3xl

            xl:text-4xl
          "
        >
          Street Skills
          <br />
          Skate Session
        </h3>

        <div
          className="
            mt-4

            flex
            items-center
            justify-center
            gap-2

            font-semibold
            uppercase
            tracking-wide
            text-white/85

            lg:justify-start
          "
        >
          <span
            className="
              flex
              size-4
              shrink-0
              items-center
              justify-center

              border
              border-white/75

              text-xs
              font-semibold
              leading-none
            "
          >
            ©
          </span>

          <span
            className="
              text-sm
              leading-none

              sm:text-base
            "
          >
            NEW YORK, US
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}
