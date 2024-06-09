import { boska } from "@/app/ui/fonts";
import Typography from "./Typography";
import Link from "next/link";
import ThemeSelect from "../select/ThemeSelect";

export default function Navbar() {
  return (
    <>
      <header
        className={`
          fixed z-20 w-full top-0 left-0 flex justify-between bg-[#fbf6eb] dark:bg-[#202020]
          items-center py-4 px-8 tablet:p-6 laptop:p-6 laptop:px-14 desktop:px-16 border-0
          border-b border-[#202020] border-opacity-15 dark:border-white dark:border-opacity-15
        `}
      >
        <span
          className={`
            ${boska.className} antialiased font-bold cursor-default dark:text-[#ebf0fa]
            text-[32px] tablet:text-[36px] laptop:text-[40px]
          `}
        >
          AS
        </span>
        <div className="flex items-center gap-8 laptop:gap-10 desktop:gap-12">
          <nav className="hidden gap-8 laptop:gap-10 desktop:gap-12 min-[700px]:flex">
            <Link href="#section-home">
              <Typography level="paragraph">Home</Typography>
            </Link>
            <Link href="#section-about">
              <Typography level="paragraph">About Me</Typography>
            </Link>
            <Link href="#section-projects">
              <Typography level="paragraph">Projects</Typography>
            </Link>
            <Link href="#section-skills">
              <Typography level="paragraph">Skills</Typography>
            </Link>
            <Link href="#section-work">
              <Typography level="paragraph">Work</Typography>
            </Link>
          </nav>
          <ThemeSelect />
        </div>
      </header>
    </>
  );
}
