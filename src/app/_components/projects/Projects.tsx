import Section from "../shared/Section";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import { projects } from "./projects";

export default function Projects() {
  return (
    <>
      <Section title="Projects" id="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            github={project.github}
          />
        ))}
      </Section>
    </>
  );
}
