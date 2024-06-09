import Section from "../shared/Section";
import ProjectCard from "./ProjectCard";
import { projectList } from "./projectList";

export default function Projects() {
  return (
    <>
      <Section title="Projects" id="projects">
        <div className="grid gap-4 grid-rows-3 laptop:grid-cols-7 laptop:grid-rows-2">
          {projectList.map((project, index) => (
            <div
              key={project.title}
              className={
                index === 0
                  ? "laptop:col-span-3 laptop:row-span-2"
                  : "laptop:col-span-4"
              }
            >
              <ProjectCard
                title={project.title}
                techStack={project.techStack}
                description={project.description}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
