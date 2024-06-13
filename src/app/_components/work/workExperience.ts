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
          "Worked in R&D and led the UI development for multiple GenAI accelerators for Fortune 500 companies in the insurance, social, and e-commerce space, including prototyping, development & deployment to production.",
          "Worked on an enterprise scraping solution for scraping 10,000+ comments and posts using BrightData, Playwright & Python.",
          "Engineered a browser extension enabling real-time AI inference for movement actions in an online car-racing game; showcased at Google Cloud Next 2024 event, Las Vegas, garnering 30,000 attendees.",
        ],
      },
      {
        designation: "Software Engineer Intern",
        from: "Jan 2023",
        to: "Jul 2023",
        description: [
          "Designed & developed a React webapp for a social listening tool which uses GenAI and an intuitive chat interface for brand insights.",
          "Implemented UI mockups of product landing pages in React with close attention to detail",
          "Presented 2 technical talks on JavaScript.",
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
