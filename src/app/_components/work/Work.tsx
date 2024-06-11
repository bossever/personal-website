import Section from "../shared/Section";
import WorkCard from "./WorkCard";
import { WorkExperience } from "./workExperience";

export default function Work() {
  return (
    <>
      <Section id="work" title="Work Experience">
        <div className="flex flex-col gap-10">
          {WorkExperience.map((item, index) => (
            <WorkCard key={index} work={item} collapsed={index > 0} />
          ))}
        </div>
      </Section>
    </>
  );
}
