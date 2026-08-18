"use client";

import Image, { type StaticImageData } from "next/image";

import { ArrowUpRight, Medal, ShoppingBag } from "lucide-react";

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

        h-full
        min-h-96

        overflow-hidden
        rounded-3xl

        bg-[#73B5D5]

        text-white
      "
    >
      {/* Image */}
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
        viewport={{ once: true }}
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
          alt="Skate street session"
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
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          bg-linear-to-t
          from-black/35
          via-black/5
          to-black/10
        "
      />

      {/* Tags */}
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
        viewport={{ once: true }}
        transition={{
          duration: 0.65,
          delay: 0.3,
          ease: premiumEase,
        }}
        className="
          absolute
          left-4
          top-4
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
            h-9
            items-center
            gap-2

            rounded-full

            bg-white

            px-3

            text-xs
            font-medium
            leading-none
            text-[#111216]

            shadow-sm

            sm:h-10
            sm:px-4
            sm:text-sm
          "
        >
          <Medal size={17} strokeWidth={1.7} />
          Pro Skate Coach
        </span>

        <span
          className="
            flex
            h-9
            items-center
            gap-2

            rounded-full

            bg-white

            px-3

            text-xs
            font-medium
            leading-none
            text-[#111216]

            shadow-sm

            sm:h-10
            sm:px-4
            sm:text-sm
          "
        >
          <ShoppingBag size={17} strokeWidth={1.7} />
          Skate Gear
        </span>
      </motion.div>

      {/* Date */}
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
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: premiumEase,
        }}
        className="
          absolute
          right-4
          top-5
          z-20

          text-xs
          font-medium
          uppercase
          leading-none
          tracking-wide
          text-white

          sm:right-6
          sm:top-7
          sm:text-sm

          lg:right-8
          lg:top-9
          lg:text-base
        "
      >
        {date}
      </motion.span>

      {/* Main content */}
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
          delay: 0.42,
          ease: premiumEase,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20

          w-11/12

          -translate-x-1/2
          -translate-y-1/2

          text-center
        "
      >
        <h3
          className="
            text-4xl
            font-medium
            leading-none
            tracking-tighter
            text-white

            sm:text-5xl

            xl:text-6xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mx-auto
            mt-3
            max-w-sm

            text-sm
            font-normal
            leading-snug
            text-white/90

            sm:text-base

            lg:text-lg
          "
        >
          {subtitle}
        </p>

        {/* Price */}
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
            h-14
            w-fit
            items-center

            rounded-full

            bg-white

            px-5

            text-[#101114]

            shadow-sm

            sm:h-16
            sm:px-7
          "
        >
          <span
            className="
              text-2xl
              font-medium
              leading-none
              tracking-tight

              sm:text-3xl
            "
          >
            {price}
          </span>

          <span
            className="
              ml-2

              text-sm
              font-normal
              leading-none
              text-[#676A70]

              sm:text-base
            "
          >
            {priceLabel}
          </span>
        </motion.div>
      </motion.div>

      {/* Status */}
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
        viewport={{ once: true }}
        transition={{
          duration: 0.65,
          delay: 0.52,
          ease: premiumEase,
        }}
        className="
          absolute
          bottom-5
          left-5
          z-20

          flex
          items-center
          gap-2

          text-xs
          font-medium
          uppercase
          leading-none
          tracking-wide
          text-white

          sm:bottom-6
          sm:left-6
          sm:text-sm

          lg:bottom-8
          lg:left-8
        "
      >
        <span
          className="
            size-2
            rounded-full
            bg-white
          "
        />

        {status}
      </motion.div>

      {/* CTA */}
      <motion.button
        type="button"
        aria-label="View skate session"
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
          bottom-4
          right-4
          z-30

          grid
          size-12
          place-items-center

          rounded-full

          bg-white
          text-[#111216]

          shadow-sm

          sm:bottom-6
          sm:right-6
          sm:size-14

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
