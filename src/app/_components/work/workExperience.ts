import { Work } from "@/app/types/work";

export const WorkExperience: Work[] = [
  {
    company: "Grid Dynamics",
    location: "Hyderabad, India",
    roles: [
      {
        designation: "Junior Software Engineer",
        from: "Jul 2023",
        to: "Current",
        description: [
          "Spearheaded the UI development for GenAI delivery accelerators for Fortune 500 companies and worked closely with AI Engineers to build and deploy scalable and secure GenAI solutions to AWS cloud in the insurance, social, and e-commerce space.",
          "Designed and built the frontend of a GenAI (LLM-based) chat system for an AI based social listening project for a major sports shoe manufacturer, in React, Redux & TypeScript, also conducted code reviews and writing unit tests.",
          "Orchestrated the development of an enterprise scraping solution for scraping 10,000+ comments and posts using BrightData, Playwright & Python for brands relying on customer data and opinion.",
          "Engineered a browser extension enabling real-time AI inference for movement actions in an online car-racing game; showcased at Google Cloud Next 2024 event, Las Vegas, garnering 30,000 attendees.",
        ],
      },
      {
        designation: "Software Engineer Intern",
        from: "Jan 2023",
        to: "Jul 2023",
        description: [
          "Created 5+ Figma wireframes and mockups and developed a React webapp for an R&D social listening delivery accelerator that mimics user behavior by leveraging social media scraped user data and predicts user sentiments on AI generated comments.",
          "Implemented UI mockups of product landing pages in React and achieved >95% similarity score.",
          "Presented 2 technical talks on JavaScript and Web which was attended by 20+ people.",
        ],
      },
    ],
  },
  {
    company: "Expound Technivo",
    location: "Remote",
    roles: [
      {
        designation: "Web Developer Intern",
        from: "May 2021",
        to: "Jul 2021",
        description: [
          "Integrated the Stripe Payment Infrastructure in an e-commerce website using a Django REST Framework backend.",
          "Increased customer satisfaction score by 40% by solving a payment gateway bug using Stripe's event notifications with a webhook endpoint.",
          "Implemented a client-side LocalStorage based product cart using Vanilla JavaScript and improved loading times by 10%.",
        ],
      },
    ],
  },
];
