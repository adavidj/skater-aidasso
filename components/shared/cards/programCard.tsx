/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Flower, Radio } from "lucide-react";
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
  const dimensions = size === "small" ? "size-[25px]" : "size-[28px]";

  return (
    <div className="flex shrink-0 items-center">
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

            ${index > 0 ? "-ml-2.5" : ""}
          `}
          style={{
            zIndex: profiles.length - index,
          }}
        >
          <img src={profile} alt="" className="h-full w-full object-cover" />
        </span>
      ))}
    </div>
  );
}

export function ProgramCard({ variant, delay = 0 }: ProgramCardProps) {
  const reduceMotion = useReducedMotion();

  /* =========================================================
     COACH CARD
  ========================================================= */
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
          min-h-81.25
          flex-col
          overflow-hidden
          rounded-[27px]
          bg-[#050505]
          p-6
          text-white

          xl:min-h-87.5
          xl:p-7
        "
      >
        {/* TEXT + PROFILES */}
        <div
          className="
            max-w-87.5
            text-[28px]
            font-normal
            leading-[1.06]
            tracking-[-0.045em]

            xl:text-[31px]
          "
        >
          <span className="block">The coach experts</span>

          {/* Profiles + text */}
          <span className="my-1 flex items-center gap-2">
            <ProfileStack />

            <span>and simple</span>
          </span>

          
          <span
            className="
              flex
              items-center
              gap-1.5
              whitespace-nowrap
            "
          >
            <span>software</span>

            <Flower size={28} strokeWidth={1.8} className="shrink-0" />

            <span>for better</span>
          </span>

          <span className="block">sportainment.</span>
        </div>

        {/* FOOTER */}
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
          className="mt-auto flex items-center justify-between"
        >
          {/* LIVE */}
          <div
            className="
              flex
              items-center
              gap-2
              text-[15px]
              font-medium

              xl:text-[16px]
            "
          >
            <Radio size={20} strokeWidth={1.8} />

            <span>Live</span>
          </div>

          {/* GRANGER.COM */}
          <span
            className="
              rounded-full
              border
              border-white/55
              px-3.5
              py-1.5
              text-[14px]
              font-medium
              leading-none

              xl:text-[15px]
            "
          >
            granger.com
          </span>
        </motion.div>
      </motion.article>
    );
  }

  /* chemistry */

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
        min-h-81.25
        overflow-hidden
        rounded-[27px]
        bg-[#5f7e48]

        xl:min-h-87.5
      "
    >
      {/* PHOTO */}
      <motion.div
        className="absolute inset-0"
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
          sizes="(max-width: 768px) 100vw, 430px"
          className="object-cover object-center"
        />
      </motion.div>

      {/* GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/50
          via-black/5
          to-transparent
        "
      />

      {/* SPORTCENTER */}
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
          px-3.5
          py-2
          text-[13px]
          font-medium
          leading-none
          text-white
          backdrop-blur-md

          xl:text-[14px]
        "
      >
        Sportcenter
      </motion.div>

      {/* TOP RIGHT INFO CARD */}
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
          rounded-[20px]
          bg-white/24
          px-3
          py-3
          text-center
          text-white
          backdrop-blur-lg
        "
      >
        {/* Coloured sport icon */}
        <div
          className="
            relative
            grid
            size-8
            place-items-center
            rounded-full
            bg-white
            shadow-sm
          "
        >
          <span
            className="
              absolute
              size-3.25
              rounded-full
              bg-[#FF5B14]
            "
          />

          <span
            className="
              absolute
              left-2
              top-2
              size-1.25
              rounded-full
              bg-[#56C2D8]
            "
          />
        </div>

        <span
          className="
            mt-2
            text-[18px]
            font-medium
            leading-none
            tracking-[-0.03em]
          "
        >
          2.88k
        </span>

        <span
          className="
            mt-1
            text-[11px]
            font-medium
            leading-none
            text-white/80
          "
        >
          Membership
        </span>
      </motion.div>

      {/* BOTTOM CONTENT */}
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
          p-5

          xl:p-6
        "
      >
        {/* MEMBERS */}
        <div className="flex items-center gap-2.5">
          <ProfileStack size="small" />

          <span
            className="
              whitespace-nowrap
              text-[16px]
              font-medium
              leading-none
              tracking-[-0.02em]
              text-white

              xl:text-[17px]
            "
          >
            1.20K Membership
          </span>
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-3
            max-w-67.5
            text-[30px]
            font-normal
            leading-[0.96]
            tracking-[-0.045em]
            text-white

            xl:text-[33px]
          "
        >
          Chemistry
          <br />
          Sports Partner
        </h3>

        {/* LOCATION */}
        <div
          className="
            mt-3
            flex
            items-center
            gap-1.5
            font-semibold
            uppercase
            tracking-wide
            text-white/85
          "
        >
          
          <span
            className="
              flex
              size-3.5
              shrink-0
              items-center
              justify-center
              
              border
              border-white/75
              text-[8px]
              font-semibold
              leading-none

              xl:size-3.75
              xl:text-[9px]
            "
          >
            ©
          </span>

          <span
            className="
              text-[14px]
              leading-none

              xl:text-[15px]
            "
          >
            NEW YORK, US
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}
