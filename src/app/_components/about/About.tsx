import Image from "next/image";
import Section from "../shared/Section";
import Typography from "../shared/Typography";
import pic from "../../../../public/images/ayushman-picture.jpeg";
import glyph from "../../../../public/images/headshot-glyph.svg";

export default function About() {
  return (
    <Section title="About me" id="about-me">
      <div className="flex flex-col gap-6 tablet:flex-row-reverse">
        <div className="p-10 relative tablet:p-0">
          <Image
            className="absolute top-0 left-0 w-full -z-10 tablet:hidden"
            src={glyph}
            alt=""
          />
          <Image
            className="w-full"
            src={pic}
            alt="A picture of Ayushman Sachan, such a handsome lad!"
          />
        </div>
        <Typography level="paragraph" extra={{
          textAlign: 'justify'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum porttitor enim viverra dignissim.
          Duis placerat massa non eleifend porttitor. Duis rhoncus tempor mollis. Quisque iaculis sodales vestibulum.
          Vivamus at placerat massa, et blandit leo. Nunc pretium elementum risus, sit amet facilisis justo congue eu.
          Quisque eu ligula ac quam pulvinar rutrum. Mauris id volutpat ipsum. Nullam efficitur lectus nec nunc blandit tincidunt.
        </Typography>
      </div>
    </Section>
  );
}
