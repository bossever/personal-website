import { boska } from "@/app/ui/fonts";
import Typography from "./Typography";
import Link from "next/link";
import ThemeSelect from "../select/ThemeSelect";

export default function Navbar() {
  return (
    <>
      <header className="absolute w-full top-0 left-0 flex justify-between items-center p-6 tablet:p-8 laptop:p-10 laptop:px-14 desktop:px-16">
        <span
          className={`${boska.className} antialiased font-bold dark:text-[#ebf0fa] text-[32px] tablet:text-[36px] laptop:text-[40px]`}
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
