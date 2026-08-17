"use client";

import { useEffect, useState } from "react";

import { Menu, Moon, Sun, X } from "lucide-react";

import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { navigation } from "@/lib/data/navigation";
import { premiumEase } from "@/lib/motion";

export function Header() {
  const { setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="
          absolute
          inset-x-0
          top-0
          z-50
          w-full
          text-white
        "
      >
        <Container>
          <div
            className="
              flex
              h-16
              w-full
              items-center

              border-b
              border-white/30

              sm:h-20
            "
          >
            <a
              href="#hero"
              aria-label="Granger home"
              className="
                shrink-0

                text-xl
                font-medium
                leading-none
                tracking-wide

                sm:text-2xl

                lg:w-40
              "
            >
              granger
            </a>

            <nav
              aria-label="Main navigation"
              className="
                hidden
                items-center
                gap-10

                lg:flex
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative

                    flex
                    items-center
                    gap-1.5

                    text-sm
                    font-medium
                    leading-none
                    tracking-wide

                    text-white/95

                    transition-colors
                    duration-300

                    hover:text-white

                    xl:text-base
                  "
                >
                  <span>{item.label}</span>

                  {"badge" in item && item.badge && (
                    <span
                      className="
                          rounded-full
                          bg-[#ff5b14]

                          px-2
                          py-0.5

                          text-xs
                          font-semibold
                          uppercase
                          leading-none
                          text-white
                        "
                    >
                      {item.badge}
                    </span>
                  )}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0

                      h-px
                      w-0

                      bg-white

                      transition-all
                      duration-300

                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </nav>

            <div
              className="
                ml-auto
                flex
                items-center
                gap-2
              "
            >
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen((current) => !current)}
                className="
                  grid
                  size-10
                  place-items-center

                  rounded-full

                  text-white

                  transition-colors
                  duration-200

                  hover:bg-white/10

                  lg:hidden
                "
              >
                <AnimatePresence initial={false} mode="wait">
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -45,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 45,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <X size={20} strokeWidth={1.7} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 45,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -45,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      <Menu size={20} strokeWidth={1.7} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <div
                className="
                  hidden
                  items-center

                  lg:flex
                "
              >
                <div
                  className="
                    flex
                    h-10
                    items-center

                    rounded-full

                    bg-white/10
                    p-1

                    backdrop-blur-md
                  "
                >
                  <button
                    type="button"
                    aria-label="Use dark mode"
                    onClick={() => setTheme("dark")}
                    className="
                      grid
                      size-8
                      place-items-center

                      rounded-full

                      text-white/70

                      transition-all
                      duration-300

                      hover:bg-white/10
                      hover:text-white

                      dark:bg-white
                      dark:text-[#111111]
                      dark:shadow-sm

                      dark:hover:bg-white
                      dark:hover:text-[#111111]
                    "
                  >
                    <Moon size={15} strokeWidth={1.7} />
                  </button>

                  <button
                    type="button"
                    aria-label="Use light mode"
                    onClick={() => setTheme("light")}
                    className="
                      grid
                      size-8
                      place-items-center

                      rounded-full

                      bg-white
                      text-[#111111]

                      shadow-sm

                      transition-all
                      duration-300

                      dark:bg-transparent
                      dark:text-white/70
                      dark:shadow-none

                      dark:hover:bg-white/10
                      dark:hover:text-white
                    "
                  >
                    <Sun size={15} strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
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
              duration: 0.25,
              ease: premiumEase,
            }}
            onClick={() => setMenuOpen(false)}
            className="
              fixed
              inset-0
              z-40

              bg-black/60

              px-4
              pt-16

              backdrop-blur-sm

              sm:px-6
              sm:pt-20

              lg:hidden
            "
          >
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -16,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: premiumEase,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                mx-auto
                mt-3
                w-full
                max-w-lg

                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-[#0c4f68]/95

                p-4

                shadow-2xl
                backdrop-blur-xl

                sm:p-5
              "
            >
              <nav
                aria-label="Mobile navigation"
                className="
                  flex
                  flex-col
                  gap-1
                "
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + index * 0.04,
                      ease: premiumEase,
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="
                        flex
                        items-center
                        justify-between

                        rounded-2xl

                        px-4
                        py-4

                        text-lg
                        font-medium
                        tracking-wide
                        text-white/95

                        transition-colors
                        duration-200

                        hover:bg-white/10
                      "
                  >
                    <span>{item.label}</span>

                    {"badge" in item && item.badge && (
                      <span
                        className="
                              rounded-full
                              bg-[#ff5b14]

                              px-2
                              py-1

                              text-xs
                              font-semibold
                              uppercase
                              leading-none
                              text-white
                            "
                      >
                        {item.badge}
                      </span>
                    )}
                  </motion.a>
                ))}
              </nav>

              <div
                className="
                  mt-3

                  flex
                  items-center

                  border-t
                  border-white/10

                  px-2
                  pt-4
                "
              >
                <span
                  className="
                    text-sm
                    font-medium
                    text-white/60
                  "
                >
                  Theme
                </span>

                <div
                  className="
                    ml-auto
                    flex
                    items-center
                    gap-2
                  "
                >
                  <button
                    type="button"
                    aria-label="Use dark mode"
                    onClick={() => setTheme("dark")}
                    className="
                      grid
                      size-10
                      place-items-center

                      rounded-full

                      bg-white/10
                      text-white/70

                      transition-all
                      duration-200

                      hover:bg-white/20
                      hover:text-white

                      dark:bg-white
                      dark:text-[#111111]
                    "
                  >
                    <Moon size={16} strokeWidth={1.7} />
                  </button>

                  <button
                    type="button"
                    aria-label="Use light mode"
                    onClick={() => setTheme("light")}
                    className="
                      grid
                      size-10
                      place-items-center

                      rounded-full

                      bg-white/10
                      text-white/70

                      transition-all
                      duration-200

                      hover:bg-white/20
                      hover:text-white

                      dark:bg-white/5
                      dark:text-white/50
                    "
                  >
                    <Sun size={16} strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
