"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa6";
import Typography from "../shared/Typography";
import { navMenuItems } from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center tablet:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence mode="popLayout" initial={false}>
            {isOpen ? (
              <motion.div
                key={`${isOpen}`}
                initial={{
                  rotateZ: -90,
                  opacity: 0,
                }}
                animate={{
                  rotateZ: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateZ: 90,
                  opacity: 0,
                }}
              >
                <FaArrowLeft className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key={`${isOpen}`}
                initial={{
                  rotateZ: -90,
                  opacity: 0,
                }}
                animate={{
                  rotateZ: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateZ: 90,
                  opacity: 0,
                }}
              >
                <FaBars className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              className={`
                absolute top-20 bottom-0 left-0 w-screen h-[calc(100vh-5rem)] bg-[#fbf6eb]
              dark:bg-[#202020] p-16
              `}
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: 100,
                opacity: 0,
              }}
              transition={{
                type: "tween",
                bounce: false,
              }}
            >
              <nav className="h-full flex flex-col gap-8 laptop:gap-10 desktop:gap-12">
                {navMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    className="py-4"
                    href={`#${item.href}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Typography
                      level="other"
                      extra={{
                        fontWeight: "200",
                        fontSize: "1.3rem",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
