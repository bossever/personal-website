import { ProjectCardProps } from "./ProjectCard";

export const projects: ProjectCardProps[] = [
  {
    title: "Microservices application using Django & Flask",
    techStack: ["Python", "Django", "Flask", "RabbitMQ", "SQLite"],
    description: `
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
    `,
    github: "https://github.com/bossever/blockvote",
  },
  {
    title: "Secure Voting on Blockchain",
    techStack: ["Python", "Django", "Cryptography"],
    description: `
      Developed an e-voting system based on Blockchain technology, using a basic implementation of the Zero-Knowledge Proof.
      Created a website for the same using a Django backend and SQLite for the database. Used CSS for a visually pleasing frontend.
    `,
    github: "https://github.com/bossever/blockvote",
  },
  {
    title: "Checkstyle",
    techStack: [
      "Java",
      "Abstract Syntax Trees",
      "JUnit",
      "Maven",
      "Intellij",
      "PIT Testing",
    ],
    description: `
      Authored static code analysis features using the Checkstyle API and abstract syntax trees.
      Performed mutation testing and killed surviving mutations using PIT Mutation Testing for Java.
      Collaborated with developers globally to make meaningful contributions by merging 20+ PRs to the Checkstyle Open Source Project.
    `,
    github:
      "https://github.com/pulls?q=is%3Apr+author%3Abossever+archived%3Afalse+is%3Amerged+repo%3Acheckstyle%2Fcheckstyle+sort%3Acomments-desc",
  },
];
 