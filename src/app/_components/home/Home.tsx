import { boska } from "@/app/ui/fonts";
import Typography from "../shared/Typography";
import styles from "./home.module.css";
import Image from "next/image";
import glyphThick from "./../../../../public/images/glyph-thick.svg";
import glyphThin from "./../../../../public/images/glyph-thin.svg";

export default function Home() {
  return (
    <main className="w-full h-lvh flex justify-center items-center px-12">
      <div className="relative flex flex-col gap-4 max-w-2/3 p-2 tablet:p-6 laptop:p-8 desktop:p-10">
        <h1
          className={`${boska.className} ${styles.title} antialiased text-center font-medium text-6xl tablet:text-6xl laptop:text-7xl desktop:text-8xl`}
        >
          Ayushman Sachan
        </h1>
        <Typography
          level="paragraph"
          extra={{
            textAlign: "center",
          }}
        >
          Software Engineer with a knack for good design
        </Typography>
        <Image
          className={`${styles.glyph} ${styles.glyphThick}`}
          src={glyphThick}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Glyph graphic"
        />
        <Image
          className={`${styles.glyph} ${styles.glyphThin}`}
          src={glyphThin}
          alt="Glyph graphic"
        />
      </div>
    </main>
  );
}
