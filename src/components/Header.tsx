"use client";

import Link from "next/link";
import { useTheme } from "@/app/providers";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0A0A0A] shadow-md dark:shadow-[#696969]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 dark:text-[#CED4DA]"
            prefetch={true}
          >
            Ved's Portfolio
          </Link>

          {isMobile ? (
            <div className="mobile-controls">
              <button
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div
                  className={`bar1 ${
                    theme === "light" ? "bar-light" : "bar-dark"
                  }`}
                ></div>
                <div
                  className={`bar2 ${
                    theme === "light" ? "bar-light" : "bar-dark"
                  }`}
                ></div>
                <div
                  className={`bar3 ${
                    theme === "light" ? "bar-light" : "bar-dark"
                  }`}
                ></div>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
                className="btn-custom"
              >
                Home
              </button>
              <button
                onClick={() => {
                  window.location.href = "/projects";
                }}
                className="btn-custom"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="btn-custom"
              >
                Contact
              </button>

              <button
                onClick={toggleTheme}
                className="bg-[#F5F5F5] dark:bg-[#1C1C21] border-2 border-[#D0D0D0] dark:border-[#696969] rounded-full p-2 transition-colors duration-200 hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A]"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <MoonIcon className="h-6 w-6 text-gray-600" />
                ) : (
                  <SunIcon className="h-6 w-6 text-yellow-400" />
                )}
              </button>
            </div>
          )}
        </div>

        {isMobile && (
          <div
            className={`mobile-menu-content ${
              isMenuOpen ? "show" : ""
            } mt-8 pb-8`}
          >
            <div className="flex flex-col space-y-4 border-t-2">
              <Link
                href="/"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] py-2 px-8 transition-colors duration-200 mt-4 "
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] py-2 px-8 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] py-2 px-8 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                prefetch={true}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:bg-[#E0E0E0] dark:hover:bg-[#2A2A2A] dark:hover:text-white py-2 px-8"
              >
                {theme === "light" ? (
                  <>
                    <MoonIcon className="h-8 w-8" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <SunIcon className="h-8 w-8" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
