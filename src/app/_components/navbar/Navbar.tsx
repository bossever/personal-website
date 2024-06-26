"use client";

import { boska } from "@/app/ui/fonts";
import Typography from "../shared/Typography";
import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";
import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";
import navbarGlyph from "../../../../public/images/navbar-glyph.svg";

export const navMenuItems: {
  href: string;
  label: string;
}[] = [
  {
    href: "home",
    label: "Home",
  },
  {
    href: "about",
    label: "About Me",
  },
  {
    href: "work",
    label: "Work",
  },
  {
    href: "projects",
    label: "Projects",
  },
  // {
  //   href: "skills",
  //   label: "Skills",
  // },
];

export default function Navbar() {
  const [{ y: yScroll }] = useWindowScroll();

  return (
    <>
      <header
        className={`
          fixed z-20 w-full top-0 left-0 flex justify-between bg-[#fbf6ebdc]
          dark:bg-[#202020d9] tablet:bg-[#fbf6eb] tablet:dark:bg-[#202020]
          backdrop-blur-md tablet:backdrop-blur-0 items-center h-20 tablet:h-24
          desktop:h-28 px-8 laptop:px-14 desktop:px-16 border-0 border-[#202020]
          dark:border-white transition-[border] duration-200 border-b
          ${
            yScroll && yScroll >= 150
              ? "border-opacity-15 dark:border-opacity-15"
              : "border-opacity-0 dark:border-opacity-0"
          }
        `}
        style={{
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className={`${styles.flip} w-12 h-full`}>
          <Link href="#home">
            <div
              className={`
            ${yScroll && yScroll >= 500 && `${styles.flipped} flipped`}
            ${styles.flipInner} w-full h-full
          `}
            >
              <Image
                className={`
                ${styles.flipFront}
                dark:invert aspect-square w-8 tablet:w-9 laptop:w-10
              `}
                src={navbarGlyph}
                alt=""
              />
              <span
                className={`
                ${styles.flipBack}
                ${boska.className} antialiased font-bold cursor-default dark:text-[#ebf0fa]
                text-[32px] tablet:text-[36px] laptop:text-[40px] select-none
              `}
                style={{
                  WebkitUserSelect: "none",
                }}
              >
                AS
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-8 laptop:gap-10 desktop:gap-12">
          <nav className="hidden gap-8 laptop:gap-10 desktop:gap-12 min-[700px]:flex">
            {navMenuItems.map((item) => (
              <Link
                className={`${styles.navItem} after:bg-black dark:after:bg-[#ebf0fa]`}
                key={item.href}
                href={`#${item.href}`}
              >
                <Typography level="paragraph">{item.label}</Typography>
              </Link>
            ))}
          </nav>
          <ThemeSelect />
          <NavbarMenu />
        </div>
      </header>
    </>
  );
}
