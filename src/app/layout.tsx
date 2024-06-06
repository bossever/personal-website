import "@/app/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#fbf6eb] dark:bg-[#202020]">
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
