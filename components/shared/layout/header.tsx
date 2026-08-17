"use client";

import { useState } from "react";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { navigation } from "@/lib/data/navigation";

import { premiumEase } from "@/lib/motion";

export function Header() {
  const { setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full text-white">
        <Container>
          <div
            className="
              flex
              h-15
              w-full
              items-center
              border-b
              border-white/30

              sm:h-18.5
            "
          >
            {/* Logo */}
            <a
              href="#"
              className="
                w-(--wellness-column)
                shrink-0
                text-[20px]
                font-medium
                leading-none
                tracking-wide

                sm:text-[22px]
                xl:text-[24px]
              "
            >
              granger
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-10 lg:flex">
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
                    text-[14px]
                    font-medium
                    leading-none
                    text-white/95
                    transition-colors
                    duration-300
                    hover:text-white
                    tracking-wide
                    xl:text-[16px]
                  "
                >
                  <span>{item.label}</span>

                  {"badge" in item && item.badge && (
                    <span
                      className="
                        rounded-full
                        bg-[#ff5b14]
                        px-1.5
                        py-0.5
                        text-[8px]
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
                      transition-[width]
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </nav>

            {/* Right side: hamburger + theme */}
            <div className="ml-auto flex items-center gap-2">
              {/* Hamburger (mobile/tablet only) */}
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
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
                {menuOpen ? <X size={20} strokeWidth={1.7} /> : <Menu size={20} strokeWidth={1.7} />}
              </button>

              {/* Theme switch */}
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
                    bg-white/12
                    p-1
                    backdrop-blur-md
                  "
                >
                  {/* Dark */}
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

                  {/* Light */}
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: premiumEase }}
            className="
              fixed
              inset-0
              z-40
              flex
              items-start
              justify-center
              bg-black/60
              backdrop-blur-sm
              pt-[60px]

              sm:pt-[74px]
            "
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: premiumEase }}
              className="
                w-full
                max-w-sm
                rounded-2xl
                bg-[#0c4f68]
                p-5
                shadow-xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-[17px]
                      font-medium
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
                          py-0.5
                          text-[9px]
                          font-semibold
                          uppercase
                          leading-none
                          text-white
                        "
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </nav>

              {/* Theme toggle in mobile menu */}
              <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
                <span className="text-[13px] text-white/60">Theme</span>
                <div className="ml-auto flex gap-1.5">
                  <button
                    type="button"
                    aria-label="Use dark mode"
                    onClick={() => setTheme("dark")}
                    className="
                      grid
                      size-9
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
                      size-9
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
