"use client";

import { themes } from "@/app/types/themes";
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
      <button
        className="flex relative justify-center items-center p-2"
        onClick={toggleOpen}
      >
        <Image
          src={resolvedTheme === "dark" ? lightIcon : darkIcon}
          width={24}
          height={24}
          alt="Light Mode Icon"
          suppressHydrationWarning
        />
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-12 right-0 border p-1 border-[#202020] border-opacity-15
            dark:border-white dark:border-opacity-15 rounded-lg flex flex-col items-start
            z-20 bg-[#fbf6eb] dark:bg-[#202020] shadow-lg
          `}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {themes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-2 tablet:px-4 min-w-28 w-full rounded-md hover:backdrop-invert-[0.05]"
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
                  fontSize: '1.1rem',
                  fontWeight: "200",
                }}
              >
                {item.slice(0, 1).toUpperCase() + item.slice(1)}
              </Typography>
            </div>
          ))}
        </div>
      </button>
      <div
        className={`${
          open ? "absolute" : "hidden"
        } top-0 right-0 w-screen h-screen z-10`}
        onClick={toggleOpen}
      />
    </>
  );
}
