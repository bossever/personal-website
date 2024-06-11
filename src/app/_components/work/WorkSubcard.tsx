import { Role } from "@/app/types/work";
import Typography from "../shared/Typography";
import styles from "./WorkSubcard.module.css";

type WorkSubcardProps = {
  role: Role;
};

export default function WorkSubcard({ role }: WorkSubcardProps) {
  const descriptionIsArray = Array.isArray(role.description);

  return (
    <>
      <div
        className={`
          ${styles.timeline} w-full flex flex-col pt-3 pl-10 gap-2 before:bg-black
          after:bg-black dark:before:bg-[#ebf0fa] dark:after:bg-[#ebf0fa]
        `}
      >
        <div className="w-full flex justify-between items-center">
          <Typography level="emphasis">{role.designation}</Typography>
          <Typography level="emphasis">{`${role.from} - ${role.to}`}</Typography>
        </div>
        <div className="w-full px-2">
          {descriptionIsArray ? (
            <ul className="list-disc ml-6">
              {(role.description as string[]).map((item, index) => (
                <li key={index}>
                  <Typography level="paragraph">{item}</Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Typography level="paragraph">role.description</Typography>
          )}
        </div>
      </div>
    </>
  );
}
