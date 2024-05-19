import localFont from "next/font/local";

export const boska = localFont({
  src: [
    {
      path: "../../../public/fonts/Boska-Variable.ttf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/Boska-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/Boska-Variable.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-boska",
});

export const switzer = localFont({
  src: [
    {
      path: "../../../public/fonts/Switzer-Variable.ttf",
      weight: "200",
    },
    {
      path: "../../../public/fonts/Switzer-Variable.ttf",
      weight: "300",
    },
  ],
  variable: "--font-switzer",
});
