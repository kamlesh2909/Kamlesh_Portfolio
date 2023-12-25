import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/expense_tracker.png";
import rmtdevImg from "@/public/exchange_Calci.png";
import wordanalyticsImg from "@/public/Loan_calci.png";

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
      "IT Service Management (ITSM): Implemented ITSM best practices on the ServiceNow platform to enhance incident, problem, change, and request management processes. Integration Management: Integrated ServiceNow with third-party applications and systems to ensure seamless data flow and communication.",
    icon: React.createElement(CgWorkAlt),
    date: " Nov 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Exchange Rate Calculator",
    description:
      "",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Loan Calculator",
    description:
      "",
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
