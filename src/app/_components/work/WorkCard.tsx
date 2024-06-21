"use client";

import { Work } from "@/app/types/work";
import Typography from "../shared/Typography";
import WorkSubcard from "./WorkSubcard";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";

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
            <motion.span
              animate={{
                rotateZ: isCollapsed ? 0 : 90,
              }}
            >
              <FaChevronRight />
            </motion.span>
            <Typography level="subheading">{work.company}</Typography>
          </div>
          <Typography level="subheading">{work.location}</Typography>
        </div>
        <motion.div
          className="overflow-y-clip"
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: isCollapsed ? 0 : "auto",
            opacity: isCollapsed ? 0 : 1,
          }}
        >
          {work.roles.map((role, index) => (
            <WorkSubcard key={index} role={role} />
          ))}
        </motion.div>
      </div>
    </>
  );
}
