"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { navigation } from "@/lib/data/navigation";

export function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full text-white">
      <div className="w-full px-5 sm:px-7 lg:px-10 xl:px-12">
        <div
          className="
            flex
            h-18.5
            w-full
            items-center
            border-b
            border-white/30
            [--program-column:7.75rem]
          "
        >
          {/* Logo */}
          <a
            href="#"
            className="
              w-(--wellness-column)
              shrink-0
              text-[22px]
              font-semibold
              leading-none
              tracking-[-0.045em]
              xl:text-[24px]
            "
          >
            granger
          </a>

          {/* Navigation */}
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
                  font-semibold
                  leading-none
                  text-white/95
                  transition-colors
                  duration-300
                  hover:text-white
                  xl:text-[15px]
                "
              >
                <span>{item.label}</span>

                {"badge" in item && item.badge && (
                  <span className="rounded-full bg-[#ff5b14] px-1.5 py-0.5 text-[8px] font-semibold uppercase leading-none text-white">
                    {item.badge}
                  </span>
                )}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-[width] duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Theme switch */}
          <div className="ml-auto flex items-center">
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
    </header>
  );
}