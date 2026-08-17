"use client";

import { useState } from "react";

import sessionImage from "@/public/images/testimonials/session.jpg";

import { MessageCircleMore } from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";

import { TestimonialCard } from "@/components/shared/cards/testimonialCard";
import { SessionCard } from "@/components/shared/cards/sessionCard";

import { sessionHighlight, testimonials } from "@/lib/data/testimonials";

import { premiumEase } from "@/lib/motion";

function TestimonialWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 420"
      fill="none"
      className="
        absolute
        -left-37.5
        -top-16.25

        size-120

        text-[#E8EBF3]

        dark:text-white/2.5

        sm:-left-31.25

        lg:-left-26.25
        lg:-top-21.25
        lg:size-140
      "
    >
      <circle
        cx="210"
        cy="210"
        r="150"
        stroke="currentColor"
        strokeWidth="46"
      />

      <circle cx="210" cy="210" r="72" stroke="currentColor" strokeWidth="42" />

      <path
        d="M70 263L349 203"
        stroke="currentColor"
        strokeWidth="45"
        strokeLinecap="square"
      />

      <path d="M185 270L225 405" stroke="currentColor" strokeWidth="44" />
    </svg>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = testimonials[activeIndex];

  function handleNext() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  }

  function handlePrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }

  return (
    <section
      id="testimonials"
      className="
        w-full
        overflow-hidden
        bg-[#F4F6FC]
        pt-10
        pb-14

        dark:bg-[#17191e]

        lg:pt-12
        lg:pb-16
      "
    >
      <Container>
        <div className="relative">
          <TestimonialWatermark />

          <div
            className="
              relative
              z-10

              grid
              gap-7

              lg:grid-cols-[1fr_auto]
              lg:items-start
              lg:gap-10
            "
          >
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.85,
                ease: premiumEase,
              }}
              className="
                max-w-225

                text-center
                text-[30px]
                font-normal
                leading-[0.96]
                tracking-[-0.055em]

                text-[#101114]

                dark:text-white

                sm:text-[44px]
                md:text-[52px]

                lg:text-left
                lg:text-[60px]

                xl:text-[66px]
              "
            >
              What people are
              <span className="hidden sm:inline"><br /></span>{" "}
              honestly saying right now
            </motion.h2>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 25,
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
                duration: 0.7,
                delay: 0.12,
                ease: premiumEase,
              }}
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-2

                lg:flex-col
                lg:items-end
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

                  text-[13px]
                  font-medium
                  leading-none
                  text-[#111216]

                  dark:bg-[#24262C]
                  dark:text-white

                  lg:h-11
                  lg:text-[14px]
                "
              >
                <span
                  className="
                    size-2
                    rounded-full
                    bg-[#37AED3]
                  "
                />
                Testimonial
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

                  text-[13px]
                  font-medium
                  leading-none
                  text-[#111216]

                  dark:bg-[#24262C]
                  dark:text-white

                  lg:h-11
                  lg:text-[14px]
                "
              >
                <MessageCircleMore size={17} strokeWidth={1.7} />
                Customer Says
              </span>
            </motion.div>
          </div>

          <div
            className="
              relative
              z-10

              mt-12

              grid
              gap-3

              lg:mt-14
              lg:grid-cols-[1.02fr_0.98fr]

              xl:mt-16
            "
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 18,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          x: -18,
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease: premiumEase,
                  }}
                  className="h-full"
                >
                  <TestimonialCard
                    index={activeIndex + 1}
                    total={testimonials.length}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                    name={testimonial.name}
                    role={testimonial.role}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <SessionCard
              image={sessionImage}
              date={sessionHighlight.date}
              title={sessionHighlight.title}
              subtitle={sessionHighlight.subtitle}
              price={sessionHighlight.price}
              priceLabel={sessionHighlight.priceLabel}
              status={sessionHighlight.status}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
