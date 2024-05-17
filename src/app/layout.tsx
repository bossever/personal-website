import { Metadata } from "next";
import "@/app/globals.css";
import { boska } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Ayushman Sachan",
  description: "Portfolio website of Ayushman Sachan",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.svg",
        href: "/images/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.svg",
        href: "/images/favicon-dark.svg",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.ico",
        href: "/images/favicon-light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.ico",
        href: "/images/favicon-dark.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
