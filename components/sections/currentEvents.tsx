"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ArrowUpRight, Leaf, Shirt, Zap } from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import basketballLeft from "@/public/images/program/basketball-left.png";

import { Container } from "@/components/ui/container";
import { currentEvents } from "@/lib/data/events";
import { premiumEase } from "@/lib/motion";

// Icône maison pour garder le même style que le reste de la section.
/* =========================================================
   SOLID COMMUNITY ICON
========================================================= */

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

  // Sert à savoir quelle carte doit être mise en avant à l'écran.
  const [activeEvent, setActiveEvent] = useState<string>("youth");

  // On attend un peu avant de basculer pour éviter les changements trop nerveux.
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // On récupère l'objet complet de l'événement actif pour l'image et les labels.
  const currentEvent =
    currentEvents.find((event) => event.id === activeEvent) ?? currentEvents[1];

  // Démarre un changement différé quand on entre sur une ligne.
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

  // Annule le changement si la souris quitte la ligne trop vite.
  function handleEventLeave() {
    if (!hoverTimer.current) {
      return;
    }

    clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }

  useEffect(() => {
    // Nettoyage simple pour ne pas laisser de timeout actif.
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
        bg-[#F4F6FC]
        pt-6
        pb-14

        dark:bg-[#17191e]

        sm:pt-10
        sm:pb-18

        lg:pt-8
        lg:pb-16
      "
    >
      <Container>
        {/* Bloc principal : il contient toute la carte sombre de la section. */}
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
            rounded-[26px]
            bg-[#050505]
            px-6
            pt-8
            pb-9
            text-white

            sm:px-8
            sm:pt-10
            sm:pb-10

            lg:px-10
            lg:pt-9
            lg:pb-10

            xl:px-12
            xl:pt-10
            xl:pb-11
          "
        >
          {/* En haut : label à gauche, titre large à droite. */}
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[0.31fr_0.69fr]
              lg:gap-10
            "
          >
            {/* Petit label de section. */}
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
                gap-2.5
                pt-1

                text-[16px]
                font-semibold
                uppercase
                tracking-[-0.02em]

                lg:text-[17px]
                xl:text-[18px]
              "
            >
              <span
                className="
                  mt-1.5
                  size-1.75
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span>Current Events</span>
            </motion.div>

            {/* Titre éditorial en plusieurs morceaux pour mixer texte et visuels. */}
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
                max-w-230

                text-[30px]
                font-normal
                leading-[1.01]
                tracking-[-0.045em]

                sm:text-[38px]
                md:text-[43px]
                lg:text-[50px]
                xl:text-[55px]
              "
            >
              {/* Première ligne du titre principal. */}
              <span
                className="
                  flex
                  flex-wrap
                  items-center
                "
              >
                <span>To win over</span>

                <span
                  className="
                    relative
                    mx-2.5
                    inline-block
                    h-7.75
                    w-13.5
                    shrink-0
                    overflow-hidden
                    rounded-[10px]

                    lg:h-8.75
                    lg:w-15.25

                    xl:h-9.5
                    xl:w-16.5
                  "
                >
                  <Image
                    src={basketballLeft}
                    alt=""
                    fill
                    quality={100}
                    sizes="70px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </span>

                <span>sports-minded</span>
              </span>

              {/* Deuxième ligne du titre principal. */}
              <span
                className="
                  mt-1
                  flex
                  flex-wrap
                  items-center
                "
              >
                <span>consumers with</span>

                <span
                  className="
                    mx-2.5
                    inline-grid
                    size-8.5
                    shrink-0
                    place-items-center
                    rounded-full
                    text-[#35B96E]
                    

                    xl:size-9.5
                  "
                >
                  <Leaf size={40} strokeWidth={1.8} fill="currentColor" />
                </span>

                <span>products own</span>
              </span>

              <span className="mt-1 block">technology and excellent.</span>
            </motion.h2>
          </div>

            {/* Partie interactive : liste des événements et image flottante. */}
          <div
          className="
            relative

            mt-18

            sm:mt-22

            lg:mt-22

            xl:mt-24.5
          "
          >
            {/* Aperçu visuel lié à l'événement actif, visible surtout sur desktop. */}
            <div
              className="
                pointer-events-none
                absolute

                right-[12%]
                top-9

                z-30

                hidden

                h-71.25
                w-61.25

                rotate-[4deg]

                overflow-hidden
                rounded-[22px]

                shadow-[0_18px_40px_rgba(0,0,0,0.28)]

                lg:block
            
                xl:right-[12.5%]
                xl:top-7.5
                xl:h-81.25
                xl:w-70

                2xl:right-[13%]
                2xl:h-100
                2xl:w-73.75
              "
            >
              <AnimatePresence initial={false} mode="wait">
                {/* Le key force le remplacement propre quand l'image change. */}
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
                          scale: 0.985,
                        }
                  }
                  transition={{
                    duration: 0.32,
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
                    sizes="300px"
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* On affiche chaque événement comme une ligne cliquable. */}
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
                  <AnimatePresence initial={false} mode="wait">
                    {!isActive ? (
                      /* État normal : ligne simple avec titre + badges + flèche. */
                      <motion.button
                        key={`${event.id}-normal`}
                        type="button"
                        onMouseEnter={() => handleEventEnter(event.id)}
                        onMouseLeave={handleEventLeave}
                        onFocus={() => setActiveEvent(event.id)}
                        onClick={() => setActiveEvent(event.id)}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.18,
                        }}
                        className="
                          group

                          flex
                          min-h-18
                          w-full
                          items-center
                          justify-between

                          px-5

                          text-left
                          text-white

                          sm:h-23
                          sm:px-6

                          lg:h-24
                          lg:px-8

                          xl:h-25.5
                          xl:px-9
                        "
                      >
                        <div className="flex flex-1 flex-col items-start gap-1.5">
                          {/* Le libellé reste léger et un peu transparent. */}
                          <span
                            className="
                            text-[20px]
                            font-normal
                            leading-none
                            tracking-wide

                            text-white/85

                            transition-colors
                            duration-300

                            group-hover:text-white

                            sm:text-[22px]
                            md:text-[24px]
                            lg:text-[25px]

                            xl:text-[27px]
                            "
                          >
                            {event.label}
                          </span>

                          {/* Badges — toujours visibles. */}
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
                              className="
                                flex
                                h-6
                                items-center
                                gap-1
                                rounded-full
                                border
                                border-white/25
                                px-2.5
                                text-[10px]
                                font-normal
                                text-white/65

                                xl:h-6.5
                                xl:px-3
                                xl:text-[11px]
                              "
                            >
                              Coach & Trainer
                            </span>

                            <span
                              className="
                                flex
                                h-6
                                items-center
                                gap-1
                                rounded-full
                                border
                                border-white/25
                                px-2.5
                                text-[10px]
                                font-normal
                                text-white/65

                                xl:h-6.5
                                xl:px-3
                                xl:text-[11px]
                              "
                            >
                              Solid Community
                            </span>

                            <span
                              className="
                                flex
                                h-6
                                items-center
                                gap-1
                                rounded-full
                                border
                                border-white/25
                                px-2.5
                                text-[10px]
                                font-normal
                                text-white/65

                                xl:h-6.5
                                xl:px-3
                                xl:text-[11px]
                              "
                            >
                              Team Uniform
                            </span>
                          </div>
                        </div>

                        {/* Indique qu'on peut interagir avec cette ligne. */}
                        <ArrowUpRight
                          size={25}
                          strokeWidth={1.4}
                          className="
                            shrink-0
                            text-white/60

                            transition-all
                            duration-300

                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-white
                          "
                        />
                      </motion.button>
                    ) : (
                      /* État actif : la ligne se transforme en vraie carte. */
                      <motion.div
                        key={`${event.id}-active`}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          relative

                          min-h-18
                          w-full

                          overflow-visible

                          sm:h-23

                          lg:h-24

                          xl:h-25.5
                        "
                      >
                        {/* Fond orange pour signaler clairement la sélection. */}
                        <div
                          className="
                            relative

                            h-full
                            w-full

                            rounded-[18px]

                            border
                            border-white/20

                            bg-[#e94c09]

                            text-white
                          "
                        >
                            {/* Contenu principal de la carte active. */}
                          <div
                            className="
                              relative
                              z-20

                              flex
                              h-full
                              flex-col
                              justify-center

                              px-5
                              pr-16

                              text-white

                              sm:px-6
                              sm:pr-20

                              lg:px-8
                              lg:pr-125

                              xl:px-9
                              xl:pr-142.5
                            "
                            style={{
                              color: "#ffffff",
                            }}
                          >
                            {/* Titre principal de l'événement sélectionné. */}
                            <h3
                              className="
                                text-[20px]
                                font-medium
                                leading-none
                                tracking-wide

                                text-white
                                opacity-100

                                sm:text-[23px]
                                md:text-[25px]
                                lg:text-[27px]

                                xl:text-[29px]
                              "
                              style={{
                                color: "#ffffff",
                              }}
                            >
                              {event.label}
                            </h3>

                            {/* Petits badges pour résumer l'offre d'un coup d'œil. */}
                            <div
                              className="
                                mt-2.5

                                flex
                                flex-wrap
                                items-center
                                gap-2.5

                                text-white
                              "
                            >
                              {/* Badge Coach & Trainer. */}
                              <span
                                className="
                                  flex
                                  h-7
                                  items-center
                                  gap-1.5

                                  rounded-full

                                  border
                                  border-white/65

                                  px-3.5

                                  text-[10px]
                                  font-normal
                                  leading-none
                                  text-white

                                  xl:h-7.5
                                  xl:px-4
                                  xl:text-[11px]
                                "
                              >
                                <Zap
                                  size={13}
                                  strokeWidth={1.35}
                                  fill="currentColor"
                                  className="
                                    shrink-0
                                    text-white/65
                                  "
                                />

                                <span
                                  className="
                                    whitespace-nowrap
                                    text-white/75
                                    text-sm
                                  "
                                >
                                  Coach & Trainer
                                </span>
                              </span>

                              {/* Badge Solid Community. */}
                              <span
                                className="
                                  flex
                                  h-7
                                  items-center
                                  gap-1.5

                                  rounded-full

                                  border
                                  border-white/75

                                  px-3.5

                                  text-[10px]
                                  font-normal
                                  leading-none
                                  text-white

                                  xl:h-7.5
                                  xl:px-4
                                  xl:text-[11px]
                                "
                              >
                                <FlowerPotIcon
                                  className="
                                    size-3.5
                                    shrink-0
                                    text-white/75
                                  "
                                />

                                <span
                                  className="
                                    whitespace-nowrap
                                    text-white/75
                                    text-sm
                                  "
                                >
                                  Solid Community
                                </span>
                              </span>

                              {/* Badge Team Uniform. */}
                              <span
                                className="
                                  hidden
                                  h-7
                                  items-center
                                  gap-1.5

                                  rounded-full

                                  border
                                  border-white/75

                                  px-3.5

                                  text-[10px]
                                  font-normal
                                  leading-none
                                  text-white

                                  sm:flex

                                  xl:h-7.5
                                  xl:px-4
                                  xl:text-[11px]
                                "
                              >
                                <Shirt
                                  size={13}
                                  strokeWidth={1.6}
                                  className="
                                    shrink-0
                                    text-white/75
                                  "
                                />

                                <span
                                  className="
                                    whitespace-nowrap
                                    text-white/75
                                    text-sm
                                  "
                                >
                                  Team Uniform
                                </span>
                              </span>
                            </div>
                          </div>

                            {/* Bouton rond à droite, surtout là pour le signal visuel. */}
                          <motion.button
                            type="button"
                            aria-label={`View ${event.label}`}
                            whileHover={
                              reduceMotion
                                ? undefined
                                : {
                                    scale: 1.07,
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

                              right-5
                              top-1/2

                              z-40

                              grid
                              size-11
                              -translate-y-1/2
                              place-items-center

                              rounded-full

                              bg-white
                              text-[#111111]

                              lg:right-6
                              lg:size-12

                              xl:right-7
                              xl:size-12.5
                            "
                          >
                            <ArrowUpRight
                              size={21}
                              strokeWidth={1.6}
                              className="
                                text-[#111111]
                              "
                            />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
