import { ProjectCardProps } from "./ProjectCard";

export const projectList: ProjectCardProps[] = [
  {
    title: "Microservices application using Django & Flask",
    techStack: ["Python", "Django", "Flask", "RabbitMQ", "SQLite"],
    description: `
      Built a simple microservice application using Django and Flask for the microservice apps and React.js for the frontend webapp.
      Used RabbitMQ as the message queue service for messaging between microservices and MySQL for the database.
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
      "JUnit",
      "PIT Mutation Testing",
      "Maven",
      "Intellij",
      "Abstract Syntax Trees",
    ],
    description: `
      Authored static code analysis features using the Checkstyle API and abstract syntax trees.
      Performed mutation testing and killed surviving mutations using PIT Mutation Testing for Java.
      Collaborated with developers globally to make meaningful contributions by merging 20+ PRs to the Checkstyle Open Source Project.
    `,
    github:
      "https://github.com/search?q=is%3Apr+author%3Abossever+archived%3Afalse+is%3Amerged+repo%3Acheckstyle%2Fcheckstyle+sort%3Acomments-desc",
  },
];
