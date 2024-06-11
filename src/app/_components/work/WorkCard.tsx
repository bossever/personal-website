import { Work } from "@/app/types/work";
import Typography from "../shared/Typography";
import WorkSubcard from "./WorkSubcard";

type WorkCardProps = {
  work: Work;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center">
          <Typography level="subheading">{work.company}</Typography>
          <Typography level="subheading">{work.location}</Typography>
        </div>
        {work.roles.map((role, index) => (
          <WorkSubcard key={index} role={role} />
        ))}
      </div>
    </>
  );
}
