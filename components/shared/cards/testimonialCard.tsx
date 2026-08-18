"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import { premiumEase } from "@/lib/motion";

interface TestimonialCardProps {
  index: number;
  total: number;
  quote: string;
  rating: number;
  name: string;
  role: string;
  onNext: () => void;
  onPrevious: () => void;
}

function RatingStar({ fillAmount }: { fillAmount: number }) {
  return (
    <span className="relative block size-6 lg:size-7">
      <Star
        className="
          absolute
          inset-0
          h-full
          w-full
          text-[#FF9D00]
        "
        strokeWidth={1.6}
        fill="none"
      />

      <span
        className="
          absolute
          inset-0
          overflow-hidden
        "
        style={{
          width: `${fillAmount * 100}%`,
        }}
      >
        <Star
          className="
            absolute
            inset-0
            h-full
            w-full
            text-[#FF9D00]
          "
          strokeWidth={1.6}
          fill="currentColor"
        />
      </span>
    </span>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const fillAmount = Math.min(Math.max(rating - index, 0), 1);

        return <RatingStar key={index} fillAmount={fillAmount} />;
      })}
    </div>
  );
}

export function TestimonialCard({
  index,
  total,
  quote,
  rating,
  name,
  role,
  onNext,
  onPrevious,
}: TestimonialCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -35,
              scale: 0.985,
            }
      }
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.65,
        ease: premiumEase,
      }}
      className="
        relative

        flex
        h-full
        min-h-96
        flex-col

        rounded-3xl

        bg-white

        p-5

        text-[#101114]

        dark:bg-[#202228]
        dark:text-white

        sm:p-8

        lg:p-10

        xl:p-12
      "
    >
      {/* Counter */}
      <div
        className="
          flex
          items-center
          gap-5

          lg:gap-7
        "
      >
        <div
          className="
            flex
            shrink-0
            items-center
            gap-2

            text-sm
            font-medium
            leading-none

            sm:text-base
          "
        >
          <span
            className="
              size-2
              rounded-full
              bg-[#36ACD3]
            "
          />

          <span>
            {index}/{total}
          </span>
        </div>

        <div
          className="
            h-px
            flex-1

            bg-[#DADCE1]

            dark:bg-white/15
          "
        />
      </div>

      {/* Quote */}
      <motion.blockquote
        key={quote}
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 16,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: premiumEase,
        }}
        className="
          mt-8
          max-w-xl

          text-2xl
          font-normal
          leading-tight
          tracking-tight

          sm:text-3xl

          lg:mt-10
          lg:text-3xl

          xl:text-4xl
        "
      >
        “{quote}”
      </motion.blockquote>

      {/* Rating */}
      <motion.div
        key={`rating-${rating}-${index}`}
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 8,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.08,
          ease: premiumEase,
        }}
        className="
          mt-7

          flex
          items-center
          gap-4
        "
      >
        <RatingStars rating={rating} />

        <span
          className="
            text-lg
            font-medium
            leading-none

            lg:text-xl
          "
        >
          {rating.toFixed(1)}
        </span>
      </motion.div>

      {/* Footer */}
      <div
        className="
          mt-auto

          flex
          items-end
          justify-between
          gap-5

          pt-10
        "
      >
        <motion.div
          key={`${name}-${role}`}
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.08,
            ease: premiumEase,
          }}
          className="min-w-0"
        >
          <div
            className="
              text-lg
              font-medium
              leading-none
              tracking-tight

              sm:text-xl

              lg:text-2xl
            "
          >
            {name}
          </div>

          <div
            className="
              mt-2

              text-xs
              font-normal
              leading-snug
              text-[#73757B]

              dark:text-white/55

              sm:text-sm
            "
          >
            {role}
          </div>
        </motion.div>

        {/* Navigation */}
        <div
          className="
            relative

            flex
            h-12
            w-20
            shrink-0
            items-center

            sm:h-14
            sm:w-24
          "
        >
          <motion.button
            type="button"
            aria-label="Previous testimonial"
            onClick={onPrevious}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.05,
                  }
            }
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.95,
                  }
            }
            className="
              absolute
              left-0

              grid
              size-12
              place-items-center

              rounded-full

              border
              border-[#D4D6DC]

              bg-white
              text-[#111216]

              dark:border-white/20
              dark:bg-[#202228]
              dark:text-white

              sm:size-14
            "
          >
            <ArrowLeft size={19} strokeWidth={1.5} />
          </motion.button>

          <motion.button
            type="button"
            aria-label="Next testimonial"
            onClick={onNext}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.06,
                    x: 2,
                  }
            }
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.95,
                  }
            }
            className="
              absolute
              right-0

              grid
              size-12
              place-items-center

              rounded-full

              bg-[#FF5B14]
              text-white

              shadow-lg
              shadow-[#FF5B14]/20

              sm:size-14
            "
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
