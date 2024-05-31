"use client";

import { themes } from "@/app/types/themes";
import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
  theme: (typeof themes)[number];
  saveTheme: Dispatch<SetStateAction<(typeof themes)[number]>>;
  removeThemePreference: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);
