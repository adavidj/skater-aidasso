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
    <span className="relative block h-6.25 w-6.25 lg:h-6.75 lg:w-6.75">
      {/* étoile vide */}
      <Star
        className="absolute inset-0 h-full w-full text-[#FF9D00]"
        strokeWidth={1.6}
        fill="none"
      />

      {/* partie remplie */}
      <span
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${fillAmount * 100}%` }}
      >
        <Star
          className="absolute inset-0 h-full w-full text-[#FF9D00]"
          strokeWidth={1.6}
          fill="currentColor"
        />
      </span>
    </span>
  );
}


function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.75">
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
        min-h-[auto]
        flex-col
        rounded-[30px]
        bg-white
        p-6
        text-[#101114]

        dark:bg-[#202228]
        dark:text-white

        sm:min-h-125
        sm:p-8

        lg:min-h-140
        lg:rounded-[34px]
        lg:p-10

        xl:min-h-147.5
        xl:p-11
      "
    >
      {/* Numéro du témoignage */}
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

            text-[15px]
            font-medium
            leading-none

            lg:text-[16px]
          "
        >
          <span
            className="
              size-2.25
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

      {/* Témoignage */}
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
          max-w-140

          text-[25px]
          font-normal
          leading-[1.18]
          tracking-[-0.04em]

          sm:text-[28px]

          lg:mt-10
          lg:text-[30px]

          xl:text-[32px]
        "
      >
        “{quote}”
      </motion.blockquote>

      {/* Note */}
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
          mt-8
          flex
          items-center
          gap-4
        "
      >
        <RatingStars rating={rating} />

        <span
          className="
            text-[18px]
            font-medium
            leading-none

            lg:text-[20px]
          "
        >
          {rating.toFixed(1)}
        </span>
      </motion.div>

      <div
        className="
          mt-auto
          flex
          items-end
          justify-between
          gap-6
        "
      >
        {/* Auteur */}
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
        >
          <div
            className="
              text-[20px]
              font-medium
              leading-none
              tracking-[-0.03em]

              lg:text-[23px]
            "
          >
            {name}
          </div>

          <div
            className="
              mt-1.5
              text-[12px]
              font-normal
              leading-none
              text-[#73757B]

              dark:text-white/55

              lg:text-[13px]
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
            h-14
            w-23.5
            shrink-0
            items-center
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
              size-14
              place-items-center

              rounded-full
              border
              border-[#D4D6DC]

              bg-white
              text-[#111216]

              dark:border-white/20
              dark:bg-[#202228]
              dark:text-white
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
              size-14
              place-items-center

              rounded-full

              bg-[#FF5B14]
              text-white

              shadow-[0_8px_20px_rgba(255,91,20,0.18)]
            "
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
