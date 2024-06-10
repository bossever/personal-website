import { boska, switzer } from "@/app/ui/fonts";
import React, { CSSProperties } from "react";

type TypographyProps = {
  level: "heading" | "subheading" | "paragraph" | "other";
  children: string;
  extra?: CSSProperties;
};

export default function Typography({
  level,
  children,
  extra,
}: TypographyProps) {
  if (level == "heading") {
    return (
      <h2
        className={`${boska.className} antialiased font-medium text-4xl tablet:text-5xl laptop:text-[56px] dark:text-[#ebf0fa]`}
        style={extra}
      >
        {children}
      </h2>
    );
  }
  if (level == "subheading") {
    return (
      <h3
        className={`${switzer.className} antialiased font-light text-xl tablet:text-2xl laptop:text-3xl dark:text-[#ebf0fa]`}
        style={extra}
      >
        {children}
      </h3>
    );
  }
  if (level == "paragraph") {
    return (
      <p
        className={`${switzer.className} antialiased font-extralight text-base tablet:text-lg laptop:text-xl dark:text-[#ebf0fa]`}
        style={extra}
      >
        {children}
      </p>
    );
  }
  return (
    <span
      className={`${switzer.className} antialiased  dark:text-[#ebf0fa]`}
      style={extra}
    >
      {children}
    </span>
  );
}
