"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ArrowUpRight, Shirt, Sparkles, Zap } from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import skateLeft from "@/public/images/program/skate-left.png";

import { Container } from "@/components/ui/container";

import { currentEvents } from "@/lib/data/events";
import { premiumEase } from "@/lib/motion";

function FlowerPotIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 11.5V6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M11.8 8.2C8.8 8.2 7 6.5 7 4.3c2.9-.2 4.8 1.2 4.8 3.9Z"
        fill="currentColor"
      />

      <path
        d="M12.2 8.4c3 0 4.8-1.7 4.8-3.9-2.9-.2-4.8 1.2-4.8 3.9Z"
        fill="currentColor"
      />

      <circle cx="12" cy="4" r="1.35" fill="currentColor" />

      <path d="M7.3 11.2h9.4l-.7 2.3H8l-.7-2.3Z" fill="currentColor" />

      <path d="M8.5 14h7L14.4 20H9.6L8.5 14Z" fill="currentColor" />
    </svg>
  );
}

export function CurrentEvents() {
  const reduceMotion = useReducedMotion();

  const [activeEvent, setActiveEvent] = useState<string>("youth");

  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentEvent =
    currentEvents.find((event) => event.id === activeEvent) ?? currentEvents[1];

  function handleEventEnter(eventId: string) {
    if (eventId === activeEvent) {
      return;
    }

    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }

    hoverTimer.current = setTimeout(() => {
      setActiveEvent(eventId);
      hoverTimer.current = null;
    }, 120);
  }

  function handleEventLeave() {
    if (!hoverTimer.current) {
      return;
    }

    clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }

  useEffect(() => {
    return () => {
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);

  return (
    <section
      id="events"
      className="
        w-full
        bg-[#F1F3F8]

        pb-14
        pt-6

        dark:bg-[#17191e]

        sm:pb-16
        sm:pt-10

        lg:pb-16
        lg:pt-8
      "
    >
      <Container>
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 38,
                  scale: 0.99,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.9,
            ease: premiumEase,
          }}
          className="
            overflow-hidden
            rounded-3xl

            bg-[#050505]

            px-5
            pb-8
            pt-7

            text-white

            sm:px-8
            sm:pb-10
            sm:pt-10

            lg:px-10
            lg:pb-10
            lg:pt-9

            xl:px-12
            xl:pt-10
          "
        >
          {/* Heading */}
          <div
            className="
              grid
              gap-8

              lg:grid-cols-12
              lg:gap-10
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -14,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: premiumEase,
              }}
              className="
                flex
                items-start
                justify-center
                gap-2

                text-sm
                font-semibold
                uppercase
                tracking-wide

                sm:text-base

                lg:col-span-4
                lg:justify-start
              "
            >
              <span
                className="
                  mt-1.5
                  size-2
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>Current Events</span>
            </motion.div>

            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.82,
                delay: 0.14,
                ease: premiumEase,
              }}
              className="
                mx-auto
                max-w-4xl

                text-center
                text-3xl
                font-normal
                leading-none
                tracking-tighter

                sm:text-4xl

                md:text-5xl

                lg:col-span-8
                lg:mx-0
                lg:text-left

                xl:text-6xl
              "
            >
              <span
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-2

                  lg:justify-start
                "
              >
                <span>Made for riders</span>

                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.85,
                          rotate: -4,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.28,
                    ease: premiumEase,
                  }}
                  className="
                    relative

                    inline-block

                    h-8
                    w-14
                    shrink-0

                    overflow-hidden
                    rounded-xl

                    sm:h-9
                    sm:w-16

                    md:h-10
                    md:w-20
                  "
                >
                  <Image
                    src={skateLeft}
                    alt=""
                    fill
                    quality={100}
                    sizes="80px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.span>

                <span>who</span>
              </span>

              <span
                className="
                  mt-1

                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-2

                  lg:justify-start
                "
              >
                <span>turn every street into</span>

                <span
                  className="
                    inline-grid
                    size-9
                    shrink-0
                    place-items-center

                    text-[#FF5B14]
                  "
                >
                  <Sparkles size={32} strokeWidth={1.5} />
                </span>

                <span>a place</span>
              </span>

              <span className="mt-1 block">to move, connect and progress.</span>
            </motion.h2>
          </div>

          {/* Mobile / tablet image */}
          <div
            className="
              relative

              mt-10
              h-64

              overflow-hidden
              rounded-3xl

              sm:h-80

              lg:hidden
            "
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentEvent.image}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 1.03,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.99,
                      }
                }
                transition={{
                  duration: 0.3,
                  ease: premiumEase,
                }}
                className="
                  absolute
                  inset-0
                "
              >
                <Image
                  src={currentEvent.image}
                  alt=""
                  fill
                  quality={100}
                  sizes="100vw"
                  className="
                    object-cover
                    object-center
                  "
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Events */}
          <div
            className="
              relative

              mt-10

              sm:mt-14

              lg:mt-20

              xl:mt-24
            "
          >
            {/* One fixed image */}
            <div
              className="
                pointer-events-none

                absolute
                right-24
                top-8
                z-30

                hidden

                h-80
                w-72

                rotate-3

                overflow-hidden
                rounded-3xl

                shadow-2xl

                lg:block

                xl:right-28
                xl:h-96
                xl:w-80
              "
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentEvent.image}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 1.03,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          scale: 0.99,
                        }
                  }
                  transition={{
                    duration: 0.28,
                    ease: premiumEase,
                  }}
                  className="
                    absolute
                    inset-0
                  "
                >
                  <Image
                    src={currentEvent.image}
                    alt=""
                    fill
                    quality={100}
                    sizes="320px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {currentEvents.map((event) => {
              const isActive = activeEvent === event.id;

              return (
                <div
                  key={event.id}
                  className="
                    relative
                    border-b
                    border-white/15
                  "
                >
                  {/* Single row: no DOM swap */}
                  <motion.button
                    type="button"
                    onMouseEnter={() =>
                      handleEventEnter(event.id)
                    }
                    onMouseLeave={handleEventLeave}
                    onFocus={() =>
                      setActiveEvent(event.id)
                    }
                    onClick={() =>
                      setActiveEvent(event.id)
                    }
                    animate={{
                      backgroundColor: isActive
                        ? "#E94C09"
                        : "rgba(0,0,0,0)",
                      borderColor: isActive
                        ? "rgba(255,255,255,0.20)"
                        : "rgba(255,255,255,0)",
                    }}
                    transition={{
                      duration: 0.24,
                      ease: premiumEase,
                    }}
                    className="
                      group
                      relative

                      flex
                      min-h-20
                      w-full
                      items-center

                      overflow-hidden
                      rounded-2xl

                      border

                      px-4
                      py-4

                      text-left
                      text-white

                      sm:min-h-24
                      sm:px-6

                      lg:h-24
                      lg:px-8
                      lg:py-0

                      xl:h-28
                    "
                  >
                    {/* Content */}
                    <div
                      className="
                        flex
                        min-w-0
                        flex-1
                        flex-col
                        items-start
                        justify-center
                        gap-2

                        pr-14

                        sm:pr-16

                        lg:max-w-2xl
                        lg:pr-0
                      "
                    >
                      <span
                        className={`
                          font-normal
                          leading-tight
                          tracking-wide

                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-white"
                              : "text-white/80 group-hover:text-white"
                          }

                          text-lg
                          sm:text-xl
                          lg:text-2xl
                          xl:text-3xl
                        `}
                      >
                        {event.label}
                      </span>

                      <div
                        className="
                          hidden
                          flex-wrap
                          items-center
                          gap-2

                          sm:flex
                        "
                      >
                        <span
                          className={`
                            flex
                            items-center
                            gap-1.5

                            rounded-full
                            border

                            px-3
                            py-1

                            text-xs

                            ${
                              isActive
                                ? "border-white/60 text-white/80"
                                : "border-white/25 text-white/55"
                            }
                          `}
                        >
                          {isActive && (
                            <Zap
                              size={12}
                              strokeWidth={1.4}
                              fill="currentColor"
                            />
                          )}

                          Riders & Mentors
                        </span>

                        <span
                          className={`
                            flex
                            items-center
                            gap-1.5

                            rounded-full
                            border

                            px-3
                            py-1

                            text-xs

                            ${
                              isActive
                                ? "border-white/60 text-white/80"
                                : "border-white/25 text-white/55"
                            }
                          `}
                        >
                          {isActive && (
                            <FlowerPotIcon className="size-3.5" />
                          )}

                          Skate Community
                        </span>

                        <span
                          className={`
                            flex
                            items-center
                            gap-1.5

                            rounded-full
                            border

                            px-3
                            py-1

                            text-xs

                            ${
                              isActive
                                ? "border-white/60 text-white/80"
                                : "border-white/25 text-white/55"
                            }
                          `}
                        >
                          {isActive && (
                            <Shirt
                              size={12}
                              strokeWidth={1.5}
                            />
                          )}

                          Street Gear
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        backgroundColor: isActive
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0)",
                        color: isActive
                          ? "#111111"
                          : "rgba(255,255,255,0.60)",
                      }}
                      transition={{
                        duration: 0.22,
                        ease: premiumEase,
                      }}
                      className={`
                        absolute
                        right-2
                        top-1/2
                        z-40

                        grid
                        -translate-y-1/2
                        place-items-center

                        rounded-full

                        sm:right-4

                        lg:right-6

                        xl:right-8

                        ${
                          isActive
                            ? "size-11 lg:size-12"
                            : "size-9"
                        }
                      `}
                    >
                      <ArrowUpRight
                        size={isActive ? 21 : 23}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </motion.span>
                  </motion.button>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
