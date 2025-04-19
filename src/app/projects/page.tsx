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
    title: "CSE Marketplace",
    description:
      "A modern web application built with React and JavaScript, featuring Auth0 for secure authentication, containerized with Minikube for local Kubernetes deployment. The backend utilized Java to dynamically convert YAML configuration files to JSON, streamlining data processing and integration.",
    technologies: [
      "React",
      "JavaScript",
      "Java",
      "Auth0",
      "Minikube",
      "Kubernetes",
      "Docker",
    ],
    githubLink: "https://github.com/VedPatel2811/Kubernetes",
  },
  {
    title: "Full-Stack Slider App with Multi-Platform Support",
    description:
      "Led a 4-member team to build a Java-based application with role-based auth (Admin, REST API users, JSF users) across web (React/JSF), mobile (Kotlin), and desktop (Java Swing).",
    technologies: [
      "React (canvas animations)",
      "Java",
      "Java Swing",
      "Kotlin",
      "RESTful APIs",
      "MySQL",
      "Selenium",
      "JUnit",
    ],
    githubLink: "https://github.com/VedPatel2811/Slider",
  },
  {
    title: "Connect-4 Game",
    description:
      "Led a 2-member team to develop an object-oriented Java Swing application implementing core DSA principles for a cross-device Connect-4 game with socket-programmed multiplayer.",
    technologies: [
      "Java",
      "Java Swing",
      "Object-Oriented Programming",
      "Socket Programming",
      "DSA",
      "JUnit ",
    ],
    githubLink: "https://github.com/VedPatel2811/Connect4",
  },
  {
    title: "Deals Finder",
    description:
      "A dynamic web application that allows customers to subscribe/unsubscribe to food delivery services and browse exclusive deals. Implemented complex ViewModels to manage user subscriptions and deals with real-time database updates.",
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework",
      "LINQ Queries",
      "SQL Database",
      "Azure",
      "Razor Views",
      "CSS",
    ],
    githubLink: "https://github.com/VedPatel2811/Deals-Finder-Web-App",
    demoLink: "https://vedpatel-lab5.azurewebsites.net/",
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
