"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product listings, shopping cart, and secure checkout.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Stripe",
    ],
    githubLink: "https://github.com/yourusername/ecommerce",
    demoLink: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    githubLink: "https://github.com/yourusername/task-manager",
    demoLink: "https://task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data with interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    demoLink: "https://weather-dashboard-demo.com",
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
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
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
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-blue-700"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
