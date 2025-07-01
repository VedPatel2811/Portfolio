"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
};

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
    title: "Taskify Cloud",
    description:
      "Developing a cloud-based task management application for SMEs using Spring Boot, Angular, and MongoDB, hosted on AWS EC2 with S3 for file storage. The app supports secure user authentication, task assignment workflows, file uploads, and automated notifications. It follows Agile methodologies with version control on GitHub, and incorporates a CI/CD pipeline using Jenkins to reduce deployment time by 40%.",
    technologies: [
      "Spring Boot",
      "Angular",
      "MongoDB",
      "AWS (EC2, S3)",
      "Jenkins",
      "GitHub",
      "Agile",
    ],
    githubLink: "https://github.com/VedPatel2811/Taskify-Cloud",
  },
  {
    title: "Deals Finder",
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
    title: "Book Tracking Web App",
    description:
      "Built a full-stack inventory management system for a local book library to manage over 1,000 books and customer loan records. Implemented advanced search and sort functionality to streamline book retrieval based on user queries. The system supports managing customer profiles, loan statuses, and book availability. Developed using PHP, JavaScript, HTML/CSS, and MySQL, delivering a responsive and functional web interface.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    githubLink: "https://github.com/VedPatel2811/NYPD-Complaint-Data-Analysis",
  },
  {
    title: "NYPD Complaint Data Analysis",
    description:
      "A data analytics project leveraging machine learning and Power BI to uncover crime patterns in NYPD complaint records.",
    technologies: ["Power BI", "RapidMiner", "Python", "Weka", "Word", "Excel"],
    githubLink: "https://github.com/VedPatel2811/NYPD-Complaint-Data-Analysis",
  },
  {
    title: "Linux Administrative Menu",
    description:
      "Created an interactive Bash script on Ubuntu to streamline user and group management for IT administrators at Algonquin College. The tool supports secure sudo-based operations, automated logging, and input validation, enhancing efficiency for core system administration tasks. Achieved a 30% improvement in workflow efficiency using advanced scripting features such as case statements, I/O redirection, and process control.",
    technologies: [
      "Bash",
      "Ubuntu",
      "Linux Shell Scripting",
      "Sudo",
      "Logging",
      "Process Control",
    ],
    githubLink: "https://github.com/VedPatel2811/NYPD-Complaint-Data-Analysis",
  },
];

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#F5F5F5] dark:bg-[#141414] p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
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
    </div>
  );
}
