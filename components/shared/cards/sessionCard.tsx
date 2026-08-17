"use client";

import Image, { type StaticImageData } from "next/image";

import { ArrowUpRight, Gift, Medal } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import { premiumEase } from "@/lib/motion";

interface SessionCardProps {
  image: StaticImageData;
  date: string;
  title: string;
  subtitle: string;
  price: string;
  priceLabel: string;
  status: string;
}

export function SessionCard({
  image,
  date,
  title,
  subtitle,
  price,
  priceLabel,
  status,
}: SessionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 65,
              scale: 0.975,
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
        delay: 0.12,
        ease: premiumEase,
      }}
      className="
        relative
        min-h-85
        overflow-hidden
        rounded-[30px]
        bg-[#73B5D5]
        text-white

        sm:min-h-125

        lg:min-h-140
        lg:rounded-[34px]

        xl:min-h-147.5
      "
    >
      {/* =================================================
          REAL BACKGROUND IMAGE
      ================================================= */}
      <motion.div
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
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.25,
          ease: premiumEase,
        }}
        className="
          absolute
          inset-0
        "
      >
        <Image
          src={image}
          alt="Single training session"
          fill
          quality={100}
          sizes="
            (max-width: 1024px) 100vw,
            680px
          "
          className="
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =================================================
          VERY LIGHT IMAGE OVERLAY

          We keep the actual image visible.
      ================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          bg-linear-to-t
          from-black/20
          via-black/2
          to-black/4
        "
      />

      {/* =================================================
          TOP LEFT TAGS
      ================================================= */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: -14,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.65,
          delay: 0.3,
          ease: premiumEase,
        }}
        className="
          absolute
          left-5
          top-5
          z-20

          flex
          flex-col
          items-start
          gap-2

          sm:left-6
          sm:top-6

          lg:left-8
          lg:top-8
        "
      >
        <span
          className="
            flex
            h-10
            items-center
            gap-2.5

            rounded-full
            bg-white
            px-4

            text-[14px]
            font-medium
            leading-none
            text-[#111216]

            shadow-sm

            lg:text-[15px]
          "
        >
          <Medal size={18} strokeWidth={1.7} />
          Professional Trainer
        </span>

        <span
          className="
            flex
            h-10
            items-center
            gap-2.5

            rounded-full
            bg-white
            px-4

            text-[14px]
            font-medium
            leading-none
            text-[#111216]

            shadow-sm

            lg:text-[15px]
          "
        >
          <Gift size={18} strokeWidth={1.7} />
          Merchandise
        </span>
      </motion.div>

      {/* =================================================
          DATE
      ================================================= */}
      <motion.span
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 12,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: premiumEase,
        }}
        className="
          absolute
          right-5
          top-7
          z-20

          text-[15px]
          font-medium
          leading-none
          tracking-[-0.02em]
          text-white

          sm:right-6

          lg:right-8
          lg:top-9
          lg:text-[17px]
        "
      >
        {date}
      </motion.span>

      {/* =================================================
          CENTER
      ================================================= */}
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
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.42,
          ease: premiumEase,
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          z-20

          w-[92%]

          -translate-x-1/2
          -translate-y-1/2

          text-center
        "
      >
        <h3
          className="
            text-[39px]
            font-medium
            leading-[0.96]
            tracking-tighter
            text-white

            sm:text-[44px]

            lg:text-[48px]

            xl:text-[52px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            text-[14px]
            font-normal
            leading-none
            text-white/95

            sm:text-[15px]

            lg:text-[17px]
          "
        >
          {subtitle}
        </p>

        {/* PRICE */}
        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.03,
                }
          }
          className="
            mx-auto
            mt-7

            flex
            h-15.5
            w-fit
            items-center

            rounded-full
            bg-white
            px-6

            text-[#101114]

            shadow-sm

            lg:h-17
            lg:px-8
          "
        >
          <span
            className="
              text-[28px]
              font-medium
              leading-none
              tracking-[-0.045em]

              lg:text-[32px]
            "
          >
            {price}
          </span>

          <span
            className="
              ml-2

              text-[14px]
              font-normal
              leading-none
              text-[#676A70]

              lg:text-[16px]
            "
          >
            {priceLabel}
          </span>
        </motion.div>
      </motion.div>

      {/* =================================================
          BOTTOM LEFT
      ================================================= */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: -12,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.65,
          delay: 0.52,
          ease: premiumEase,
        }}
        className="
          absolute
          bottom-6
          left-6
          z-20

          flex
          items-center
          gap-2

          text-[14px]
          font-medium
          uppercase
          leading-none
          text-white

          lg:bottom-8
          lg:left-8
          lg:text-[15px]
        "
      >
        <span
          className="
            size-2.25
            rounded-full
            bg-white
          "
        />

        {status}
      </motion.div>

      {/* =================================================
          BOTTOM RIGHT CTA
      ================================================= */}
      <motion.button
        type="button"
        aria-label="View session"
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.07,
                rotate: 3,
              }
        }
        whileTap={
          reduceMotion
            ? undefined
            : {
                scale: 0.96,
              }
        }
        className="
          absolute
          bottom-5
          right-5
          z-30

          grid
          size-14.5
          place-items-center

          rounded-full
          bg-white
          text-[#111216]

          shadow-sm

          sm:bottom-6
          sm:right-6

          lg:bottom-8
          lg:right-8
          lg:size-16
        "
      >
        <ArrowUpRight size={23} strokeWidth={1.6} />
      </motion.button>
    </motion.article>
  );
}
