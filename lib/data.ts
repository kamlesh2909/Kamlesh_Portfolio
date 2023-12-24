import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Associate Consultant",
    location: "Atos Syntel, Pune",
    description:
      "Monitored project progress and milestones, proactively identifying potential risks and implementing mitigation strategies to ensure project success. Provided technical support and assistance to users of the Stellantis Mefisto Project. Responded to and resolved incidents reported by users, ensuring timely resolution and minimizing downtime.",
    icon: React.createElement(CgWorkAlt),
    date: " Sept 2022 -  Oct 2023",
  },
  {
    title: "ServiceNow Consultant",
    location: "Hadron GBS, Pune",
    description:
      "IT Service Management (ITSM): Implemented ITSM best practices on the ServiceNow platform to enhance incident, problem, change, and request management processes. Service Catalog Development: Designed and implemented service catalogs to streamline service request processes, improving user experience and efficiency. Integration Management: Integrated ServiceNow with third-party applications and systems to ensure seamless data flow and communication.",
    icon: React.createElement(CgWorkAlt),
    date: " Nov 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Core Java",
  "Spring Boot",
  
  "ServiceNow",
  "Ivanti",
  "ITSM",
  "ITIL"
] as const;
