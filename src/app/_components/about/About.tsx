import Image from "next/image";
import Section from "../shared/Section";
import Typography from "../shared/Typography";
import pic from "../../../../public/images/ayushman-picture.jpeg";
import glyphHeadshot from "../../../../public/images/headshot-glyph.svg";
import glyphThick from "./../../../../public/images/glyph-thick.svg";

export default function About() {
  return (
    <Section title="About me" id="about-me">
      <div className="flex flex-col gap-6 tablet:flex-row-reverse laptop:gap-12 desktop:gap-44">
        <div className="p-10 relative tablet:p-0 tablet:float-right laptop:float-none tablet:hidden laptop:block">
          <Image
            className="absolute top-0 left-0 w-full -z-10 tablet:hidden invert-0 dark:invert-[100]"
            src={glyphHeadshot}
            alt=""
          />
          <Image
            src={pic}
            alt="A picture of Ayushman Sachan, such a handsome lad!"
            quality={100}
          />
        </div>
        <div>
          <Image
            className="hidden tablet:block tablet:float-right laptop:hidden px-4 pb-2"
            width={300}
            height={300}
            src={pic}
            alt="A picture of Ayushman Sachan, such a handsome lad!"
            quality={100}
          />
          <Typography
            level="paragraph"
            extra={{
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            rutrum porttitor enim viverra dignissim. Duis placerat massa non
            eleifend porttitor. Duis rhoncus tempor mollis. Quisque iaculis
            sodales vestibulum. Vivamus at placerat massa, et blandit leo.
          </Typography>
          <br />
          <Typography
            level="paragraph"
            extra={{
              textAlign: "justify",
            }}
          >
            Nunc pretium elementum risus, sit amet facilisis justo congue eu.
            Quisque eu ligula ac quam pulvinar rutrum. Mauris id volutpat ipsum.
            Nullam efficitur lectus nec nunc blandit tincidunt.
          </Typography>
        </div>
      </div>
    </Section>
  );
}
