"use client";

import { useContext, useState } from "react";
import Typography from "../shared/Typography";
import Image from "next/image";
import lightIcon from "../../../../public/images/light.svg";
import darkIcon from "../../../../public/images/dark.svg";
import { useMediaQuery } from "usehooks-ts";
import { themes } from "@/app/types/themes";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSelect() {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, saveTheme, removeThemePreference } = useContext(ThemeContext);
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (theme: (typeof themes)[number]) => {
    saveTheme(theme);
  };

  return (
    <>
      <button
        className="flex relative justify-center items-center p-2"
        onClick={handleOpen}
      >
        <Image
          src={
            theme == "dark" || (theme == "system" && prefersDark)
              ? lightIcon
              : darkIcon
          }
          width={24}
          height={24}
          alt="Light Mode Icon"
          suppressHydrationWarning
        />
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-14 right-0 border p-1 border-gray-600 rounded-lg flex flex-col items-start z-20 shadow-[]]`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {themes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-2 tablet:px-4 w-full rounded-md hover:backdrop-invert-[0.05]"
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
        onClick={handleOpen}
      />
    </>
  );
}
