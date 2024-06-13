"use client";

import { themes } from "@/app/types/themes";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import darkIcon from "../../../../public/images/dark.svg";
import lightIcon from "../../../../public/images/light.svg";
import Typography from "../shared/Typography";

export default function ThemeSelect() {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (theme: (typeof themes)[number]) => {
    setTheme(theme);
    toggleOpen();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="relative">
        <button
          className="flex justify-center items-center p-2 active:scale-90 transition-all duration-200"
          onClick={toggleOpen}
        >
          <AnimatePresence mode="popLayout">
            {resolvedTheme === "dark" ? (
              <motion.div
                key={resolvedTheme}
                initial={{
                  rotateZ: -90,
                  opacity: 0,
                }}
                animate={{
                  rotateZ: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateZ: 90,
                  opacity: 0,
                }}
              >
                <Image
                  src={resolvedTheme === "dark" ? lightIcon : darkIcon}
                  width={24}
                  height={24}
                  alt="Switch to light mode icon"
                  suppressHydrationWarning
                />
              </motion.div>
            ) : (
              <motion.div
                key={resolvedTheme}
                initial={{
                  rotateZ: -90,
                  opacity: 0,
                }}
                animate={{
                  rotateZ: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateZ: 90,
                  opacity: 0,
                }}
              >
                <Image
                  src={darkIcon}
                  width={24}
                  height={24}
                  alt="Switch to dark mode icon"
                  suppressHydrationWarning
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              className={`$
                absolute top-12 right-0 border p-1 border-[#202020] border-opacity-15
                dark:border-white dark:border-opacity-15 rounded-lg flex flex-col items-start
                z-20 bg-[#fbf6eb] dark:bg-[#202020] shadow-lg cursor-pointer
              `}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 20,
                opacity: 0,
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {themes.map((item) => (
                <div
                  key={item}
                  className={`
                    flex items-center gap-3 p-2 tablet:px-4 min-w-28 w-full rounded-md
                    hover:backdrop-invert-[0.05] transition-all duration-200
                  `}
                  onClick={() => handleSelect(item)}
                >
                  <span
                    className={`${
                      theme == item ? "visible" : "invisible"
                    } dark:text-[#ebf0fa]`}
                  >
                    •
                  </span>
                  <Typography
                    level="other"
                    extra={{
                      fontSize: "1.1rem",
                      fontWeight: "200",
                    }}
                  >
                    {item.slice(0, 1).toUpperCase() + item.slice(1)}
                  </Typography>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`${
            open ? "absolute" : "hidden"
          } top-0 right-0 w-screen h-screen z-10`}
          onClick={toggleOpen}
        />
      </div>
    </>
  );
}
