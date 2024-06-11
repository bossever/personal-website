"use client";

import { Work } from "@/app/types/work";
import Typography from "../shared/Typography";
import WorkSubcard from "./WorkSubcard";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

type WorkCardProps = {
  work: Work;
  collapsed: boolean;
};

export default function WorkCard({ work, collapsed }: WorkCardProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div
          className="w-full flex justify-between items-center cursor-pointer select-none"
          onClick={toggleCollapse}
        >
          <div className="flex items-center gap-4">
            {isCollapsed ? <FaChevronRight /> : <FaChevronDown />}
            <Typography level="subheading">{work.company}</Typography>
          </div>
          <Typography level="subheading">{work.location}</Typography>
        </div>
        {!isCollapsed && (
          <div>
            {work.roles.map((role, index) => (
              <WorkSubcard key={index} role={role} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
