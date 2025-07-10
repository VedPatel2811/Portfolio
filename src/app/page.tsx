"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
};

const skills = {
  "Programming Languages": [
    { name: "Java", docs: "https://docs.oracle.com/javase/" },
    { name: "Python", docs: "https://docs.python.org/3/" },
    { name: "C", docs: "https://devdocs.io/c/" },
    { name: "C#", docs: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    {
      name: "JavaScript",
      docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "TypeScript", docs: "https://www.typescriptlang.org/docs/" },
    { name: "SQL", docs: "https://www.w3schools.com/sql/" },
  ],
  "Web Technologies and Frameworks": [
    { name: "React", docs: "https://react.dev/learn" },
    { name: "Next.js", docs: "https://nextjs.org/docs" },
    { name: "Node.js", docs: "https://nodejs.org/en/docs/" },
    { name: "Express.js", docs: "https://expressjs.com/en/5x/api.html" },
    { name: "Tailwind CSS", docs: "https://tailwindcss.com/docs/" },
    { name: "HTML", docs: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", docs: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "ASP.NET", docs: "https://learn.microsoft.com/en-us/aspnet/core/" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", docs: "https://docs.docker.com/" },
    { name: "Kubernetes", docs: "https://kubernetes.io/docs/home/" },
    { name: "AWS", docs: "https://docs.aws.amazon.com/" },
    { name: "Azure", docs: "https://learn.microsoft.com/en-us/azure/" },
    {
      name: "CI/CD",
      docs: "https://www.redhat.com/en/topics/devops/what-cicd-pipeline",
    },
  ],
  "Database & Tools": [
    { name: "PostgreSQL", docs: "https://www.postgresql.org/docs/" },
    { name: "MySQL", docs: "https://dev.mysql.com/doc/" },
    { name: "MongoDB", docs: "https://www.mongodb.com/docs/" },
    { name: "Postman", docs: "https://learning.postman.com/docs/" },
    { name: "Jira", docs: "https://www.atlassian.com/software/jira/guides" },
    { name: "Git", docs: "https://git-scm.com/doc" },
    { name: "GitHub", docs: "https://docs.github.com/en" },
    { name: "QNX Momentics", docs: "https://www.qnx.com/developers/docs/7.1/" },
    { name: "Power BI", docs: "https://learn.microsoft.com/en-us/power-bi/" },
    { name: "RapidMiner", docs: "https://rapidminer.com/docs/" },
  ],
};

const experience = [
  {
  title: "Security Access Administrator",
  company: "Allied Universal – Ottawa, ON",
  period: "May 2024 - Present",
  responsibilities: [
    "Managed internal access control systems, key audits, and surveillance feeds using 10+ proprietary web tools.",
    "Developed a Python automation script for key audits, reducing manual effort by 60% and improving data accuracy.",
    "Built an internal web portal to streamline access management workflows and enhance inter-team communication.",
    ],
  },
  {
    title: "Software Developer",
    company: "Communications Security Establishment Canada",
    period: "September 2024 - April 2025",
    responsibilities: [
      "Developed an internal CSE Marketplace to securely store confidential processes, reducing search time by 50%.",
      "Designed a responsive, user-centric UI aligned with CSE-theme using React, JavaScript, HTML/CSS, and Figma.",
      "Secured site with Auth0, containerized via Docker/Kubernetes, and deployed to AWS EKS for scalable access.",
      "Led a team of 3, used Jira to deliver a platform used by 10+ CSE teams, and wrote detailed documentation.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: " Geek Squad Best Buy",
    period: "October 2023 - January 2024",
    responsibilities: [
      "Resolved 150+ tech issues for PCs, phones, and tablets, delivering fast in-store diagnostics and troubleshooting.",
      "Assisted 20+ daily customers via walk-ins and calls, providing solutions, setup, and connectivity problems.",
      "Achieved 90% customer satisfaction by addressing concerns and escalating complex cases when needed.",
      "Performed diagnostics using Geek Squad tools, accurately identifying hardware/software issues for repairs.",
    ],
  },
  {
    title: "Frontend Designer",
    company: "Hitech Digital Solutions",
    period: "May 2022 - November 2022",
    responsibilities: [
      "Created interactive UI prototypes in Figma to modernize container tracking, replacing Excel-based workflows.",
      "Built and tested responsive frontend with Angular 13, Angular Material, and CSS to ensure consistent UX.",
      "Collaborated with stakeholders to gather feedback and refine design and documentation during development.",
      "Supported process improvements that reduced manual data entry workload by approximately 70%.",
    ],
  },
];

const education = [
  {
    degree:
      "Computer Engineering Technology - Computing Science Advanced Diploma",
    degreeLink:
      "https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/",
    institution: "Algonquin College",
    institutionLink: "https://www.algonquincollege.com/",
    period: "January 2023 - April 2025",
    details: [
      "Major in Computer Science",
      "Relevant Coursework: BI and Data Analytics, Network Programming, Java Application Programming, ASP.NET Core, C++ Programming, Software Design and Testing, Real-time Programming",
      "GPA: 3.54/4.0",
    ],
  },
];

const projects: Project[] = [
  {
    title: "SageMedic AI",
    description:
      "Developed an AI healthcare platform to reduce diagnosis wait times by 40% in the medical system.Designed the platform and selected a top Hugging Face model from 20+ options for symptom analysis.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind",
      "Python FastAPI",
      "Hugging Face",
      "TensorFlow",
      "Google Cloud Run",
      "GitHub",
    ],
    githubLink: "https://github.com/VedPatel2811/SageMedic-AI",
  },
  {
    title: "Deals Finder",
    description:
      "Led a team of four to build a full-stack learning platform for Algonquin College students focused on RESTful APIs using React for the frontend and Java for the backend. Implemented user authentication, interactive API testing, and real-time feedback features. Developed companion mobile and desktop applications using Kotlin and Java Swing. Ensured code quality by creating over 10 JUnit and 5 Selenium tests for robust unit and UI testing.",
    technologies: [
      "React",
      "Java",
      "Kotlin",
      "Java Swing",
      "JUnit",
      "Selenium",
    ],
    githubLink: "https://github.com/VedPatel2811/Deals-Finder-Web-App",
    demoLink: "https://vedpatel-lab5.azurewebsites.net/",
  },
  {
    title: "Slider App",
    description:
      "Developed a full-stack ASP.NET Core MVC admin portal for companies to manage over 10 subscription tiers and 100+ daily deals, supporting the tracking of 1,000+ customer-deal relationships. Built the backend using C# and Entity Framework, and designed a responsive frontend with Razor Views and custom CSS. Deployed to the cloud using Azure Blob Storage and Azure SQL Database for scalability and reliability, with source control managed via GitHub.",
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework",
      "Razor Views",
      "CSS",
      "Azure Blob Storage",
      "Azure SQL Database",
      "GitHub",
    ],
    githubLink: "https://github.com/VedPatel2811/Slider",
  },
  {
    title: "NYPD Complaint Data Analysis",
    description:
      "A data analytics project leveraging machine learning and Power BI to uncover crime patterns in NYPD complaint records.",
    technologies: ["Power BI", "RapidMiner", "Python", "Weka", "Word", "Excel"],
    githubLink: "https://github.com/VedPatel2811/NYPD-Complaint-Data-Analysis",
  },
];

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-600">Ved Patel</span>
          </motion.h1>
          <div className="text-2xl md:text-3xl font-semibold mb-4 h-12 flex justify-center md:justify-start">
            <Typewriter
              words={[
                "Software Developer",
                "Web Developer",
                "Creative Strategist",
                "Innovation Seeker",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
            I'm a passionate developer with a keen interest in building modern
            web applications and solving complex problems. With expertise in
            full-stack development, I create efficient and scalable solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/Ved_Patel_CV.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div
            className="relative w-64 h-64 cursor-pointer transition-all duration-300"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front Side (Profile Image) */}
            <div
              className={`absolute inset-0 transition-all duration-500 transform ${
                isFlipped ? "rotate-y-180 opacity-0" : "rotate-y-0 opacity-100"
              } rounded-full p-1`}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/profile-image.png"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Back Side (Avatar) */}
            <div
              className={`absolute inset-0 transition-all duration-500 transform ${
                isFlipped ? "rotate-y-0 opacity-100" : "rotate-y-180 opacity-0"
              } rounded-full p-1`}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/avatar-image.png"
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5F5F5] dark:bg-[#141414] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl border-b-2 p-2 font-semibold mb-4 ">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    <a
                      href={skill.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      {skill.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="grid grid-cols-1 gap-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5F5F5] dark:bg-[#141414] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl border-b-2 p-2 font-semibold mb-4">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.company}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5F5F5] dark:bg-[#141414] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-800 dark:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-gray-700 dark:hover:bg-gray-600"
                >
                  View on GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid grid-cols-1 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5F5F5] dark:bg-[#141414] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl border-b-2 p-2 font-semibold mb-4">
                <a
                  href={edu.degreeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {edu.degree}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <a
                  href={edu.institutionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {edu.institution}
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {edu.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
