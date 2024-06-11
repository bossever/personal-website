import { FaGithub } from "react-icons/fa6";
import Typography from "../shared/Typography";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  techStack: string[];
  description: string;
  github: string;
};

export default function ProjectCard({
  title,
  techStack,
  description,
  github,
}: ProjectCardProps) {
  return (
    <>
      <div
        className={`
          h-full flex gap-4 border border-[#202020] border-opacity-15 dark:border-white
          dark:border-opacity-15 flex-col p-2 tablet:p-4 rounded-md hover:shadow-md transition-all
          duration-200
        `}
      >
        <Typography level="subheading">{title}</Typography>
        <Typography level="emphasis">{techStack.join(", ")}</Typography>
        <Typography
          level="paragraph"
          extra={{
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>
        <div className="flex justify-end">
          <Link href={github}>
            <FaGithub className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </>
  );
}
