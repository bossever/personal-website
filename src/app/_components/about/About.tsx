import Image from "next/image";
import Section from "../shared/Section";
import Typography from "../shared/Typography";
import pic from "../../../../public/images/ayushman-picture.jpeg";
import glyphHeadshot from "../../../../public/images/headshot-glyph.svg";
import glyphThick from "./../../../../public/images/glyph-thick.svg";

export default function About() {
  return (
    <Section title="About me" id="about">
      <div className="flex flex-col gap-6 overflow-hidden tablet:flex-row-reverse laptop:gap-20 desktop:gap-56">
        <div className="p-10 relative max-h-[500px] tablet:p-0 tablet:float-right laptop:float-none tablet:hidden laptop:block">
          <Image
            className="absolute w-full top-0 left-0 -z-10 tablet:hidden invert-0 dark:invert-[100]"
            src={glyphHeadshot}
            alt=""
          />
          <Image
            className="h-full object-contain"
            src={pic}
            alt="A picture of Ayushman Sachan, such a handsome lad!"
            quality={100}
          />
        </div>
        <div>
          <Image
            className="hidden tablet:block tablet:float-right laptop:hidden pl-4 py-2 w-[40vw]"
            width={300}
            height={300}
            src={pic}
            alt="A picture of Ayushman Sachan, such a handsome lad!"
            quality={100}
          />
          <Typography
            level="paragraph"
          >
            Hi there! I&apos;m Ayushman Sachan, a Software Engineer based out of India.
            I love building software, and I am technically well versed with the software
            development lifecycle - including ideation, design, development, testing & deployment.

            My framework of choice for the client side is React.js or Next.js, and for the server side,
            I use Node.js + Express.js, or the Django REST Framework. I&apos;m well experienced in tools like
            Figma for design and prototyping, Docker for containerization, and AWS Cloud infra for deployment.
          </Typography>
          <br />
          <Typography
            level="paragraph"
            extra={{
              textAlign: "justify",
            }}
          >
            While I&apos;m not coding, I like to hit the gym, play badminton and swim. I&apos;m a sucker for cafe
            racers and I enjoy bike rides on a cloudy day. 
          </Typography>
        </div>
      </div>
      <Image
        className={`
          -z-10 absolute hidden laptop:hidden tablet:block tablet:bottom-20 tablet:left-1/2
          tablet:-translate-x-1/2 tablet:-translate-y-1/2 desktop:block desktop:top-1/2
          desktop:left-1/2 desktop:-translate-x-1/2 desktop:-translate-y-1/2 invert-0 dark:invert-[100]
        `}
        src={glyphThick}
        alt=""
      />
    </Section>
  );
}
