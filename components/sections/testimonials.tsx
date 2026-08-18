"use client";

import { useState } from "react";

import { MessageCircleMore, Sparkles } from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import sessionImage from "@/public/images/testimonials/session.jpg";

import { Container } from "@/components/ui/container";

import { TestimonialCard } from "@/components/shared/cards/testimonialCard";
import { SessionCard } from "@/components/shared/cards/sessionCard";

import { sessionHighlight, testimonials } from "@/lib/data/testimonials";

import { premiumEase } from "@/lib/motion";

function SkateWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 500 360"
      fill="none"
      className="
        pointer-events-none

        absolute
        -left-32
        -top-16

        w-96

        text-[#E6E9F1]

        dark:text-white/5

        sm:w-full
        sm:max-w-xl

        lg:-left-24
        lg:-top-20
      "
    >
      <path
        d="M75 175C110 175 119 132 156 132H344C381 132 390 175 425 175"
        stroke="currentColor"
        strokeWidth="34"
        strokeLinecap="round"
      />

      <circle cx="145" cy="218" r="30" stroke="currentColor" strokeWidth="22" />

      <circle cx="355" cy="218" r="30" stroke="currentColor" strokeWidth="22" />

      <path
        d="M160 184H340"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
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

        bg-[#F1F3F8]

        pb-14
        pt-10

        dark:bg-[#17191e]

        sm:pb-16
        sm:pt-14

        lg:pb-16
        lg:pt-12
      "
    >
      <Container>
        <div className="relative">
          <SkateWatermark />

          {/* Heading */}
          <div
            className="
              relative
              z-10

              grid
              gap-7

              lg:grid-cols-12
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
                mx-auto
                max-w-4xl

                text-center
                text-4xl
                font-normal
                leading-none
                tracking-tighter
                text-[#101114]

                dark:text-white

                sm:text-5xl

                lg:col-span-9
                lg:mx-0
                lg:text-left
                lg:text-6xl

                xl:text-7xl
              "
            >
              What riders are
              <span className="hidden sm:inline">
                <br />
              </span>{" "}
              saying right now.
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
              viewport={{ once: true }}
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

                lg:col-span-3
                lg:flex-col
                lg:items-end
              "
            >
              <span
                className="
                  flex
                  h-10
                  items-center
                  gap-2

                  rounded-full

                  bg-white

                  px-4

                  text-sm
                  font-medium
                  leading-none
                  text-[#111216]

                  dark:bg-[#24262C]
                  dark:text-white

                  lg:h-11
                "
              >
                <Sparkles size={16} strokeWidth={1.6} />
                Rider Stories
              </span>

              <span
                className="
                  flex
                  h-10
                  items-center
                  gap-2

                  rounded-full

                  bg-white

                  px-4

                  text-sm
                  font-medium
                  leading-none
                  text-[#111216]

                  dark:bg-[#24262C]
                  dark:text-white

                  lg:h-11
                "
              >
                <MessageCircleMore size={17} strokeWidth={1.7} />
                Skate Community
              </span>
            </motion.div>
          </div>

          {/* Cards */}
          <div
            className="
              relative
              z-10

              mt-10

              grid
              items-stretch
              gap-4

              sm:mt-14

              lg:mt-14
              lg:grid-cols-2

              xl:mt-16
            "
          >
            <div className="relative h-full">
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
