"use client";

import { useState } from "react";
import Typography from "../shared/Typography";
import Image from "next/image";
import lightIcon from "../../../../public/images/light.svg";
import darkIcon from "../../../../public/images/dark.svg";

export default function ThemeSelect() {
  const [open, setOpen] = useState<boolean>(false);
  const items = ["System", "Light", "Dark"] as const;
  const [selected, setSelected] = useState<(typeof items)[number]>("System");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (item: (typeof items)[number]) => {
    setSelected(item);
  };

  return (
    <>
      <button
        className="flex relative justify-center items-center p-2"
        onClick={handleOpen}
      >
        <Image src={lightIcon} width={24} height={24} alt="Light Mode Icon" />
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-14 right-0 border p-1 border-gray-600 rounded-lg flex flex-col items-start z-20`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-2 tablet:px-4 w-full rounded-md hover:backdrop-invert-[0.05]"
              onClick={() => handleSelect(item)}
            >
              <span className={`${selected == item ? "visible" : "invisible"}`}>
                •
              </span>
              <Typography
                level="other"
                extra={{
                  fontWeight: "200",
                }}
              >
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </button>
      <div
        className={`${
          open ? "absolute" : "hidden"
        } top-0 right-0 w-screen h-screen z-10`}
        onClick={handleOpen}
      />
    </>
  );
}
