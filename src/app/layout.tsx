"use client";

import "@/app/globals.css";
import { ThemeContext } from "./_components/context/ThemeContext";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";
import { themes } from "./types/themes";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, saveTheme, removeThemePreference] = useLocalStorage<
    (typeof themes)[number]
  >("theme", "system", { initializeWithValue: true });
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <html lang="en">
      <ThemeContext.Provider
        value={{ theme, saveTheme, removeThemePreference }}
      >
        <body
          className={`
            ${
              theme == "dark" || (theme == "system" && prefersDark)
                ? "dark"
                : ""
            }
            bg-[#fbf6eb] dark:bg-[#202020]
          `}
          suppressHydrationWarning
        >
          {children}
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
