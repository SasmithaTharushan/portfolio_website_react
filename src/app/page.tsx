"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import profileImage from "../../public/p3.png";
import graphicsDesign from "../../public/design.jpg";
import codeImage from "../../public/code.jpg";
import project1Image from "../../public/project1.jpg";
import project2Image from "../../public/project2.jpg";
import project3Image from "../../public/project3.jpg";

// Icons
import { LuSun, LuMoon } from "react-icons/lu";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      console.log("Toggling to:", !prev); // Debug log
      return !prev;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header>
        <title>Sasmitha Tharushan | Developer Portfolio</title>
        <meta name="description" content="Portfolio of Sasmitha Tharushan, a Mobile App and Web Developer." />
      </header>

      <main className="px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Navigation */}
        <nav className="py-4 flex justify-between items-center sticky top-0 bg-opacity-95 backdrop-blur-md z-10">
          <Link href="/" className="text-gray-700 dark:text-gray-200 text-lg font-semibold hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
            Auxa
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              {isDarkMode ? (
                <LuSun
                  onClick={toggleDarkMode}
                  className="cursor-pointer text-xl text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                />
              ) : (
                <LuMoon
                  onClick={toggleDarkMode}
                  className="cursor-pointer text-xl text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                />
              )}
            </li>
            <li>
              <a
                href="/Sasmitha_Tharushan_Resume.pdf"
                download
                className="bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors shadow-sm"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-8 md:py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-4">
            Sasmitha Tharushan
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-6 font-medium">
            Mobile Apps & Web Developer
          </h3>
          <p className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A passionate Software Engineer crafting intuitive, high-quality solutions with Flutter and full-stack expertise.
          </p>
          <div className="flex justify-center gap-6 sm:gap-10 mt-6 text-gray-700 dark:text-gray-200">
            <a href="https://github.com/SasmithaTharushan" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithubAlt className="text-2xl hover:text-purple-500 dark:hover:text-purple-400 hover:scale-105 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/sasmitha-tharushan-29b332197/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-purple-500 dark:hover:text-purple-400 hover:scale-105 transition-transform" />
            </a>
            <a href="https://x.com/d3vilsash" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="text-2xl hover:text-purple-500 dark:hover:text-purple-400 hover:scale-105 transition-transform" />
            </a>
          </div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mt-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={profileImage}
              alt="Sasmitha Tharushan - Software Engineer"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
            What I Can Do For You
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center leading-relaxed mb-10">
            Tailored solutions to bring your ideas to life with creativity and precision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Image src={codeImage} alt="App Development" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">App Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Fast, responsive apps with Flutter and modern stacks.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Image src={graphicsDesign} alt="Graphic Design" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">Graphic Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Eye-catching visuals for UI/UX and branding.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Image src={graphicsDesign} alt="Social Media Management" width={80} height={80} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">Social Media</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Boost your online presence with smart strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
            My Projects
          </h2>
          <p className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center leading-relaxed mb-10">
            A glimpse into my work—crafted with passion and innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image src={project1Image} alt="Flutter E-Commerce App" width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Flutter E-Commerce App</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">A sleek shopping app built with Flutter.</p>
                <a href="https://github.com/SasmithaTharushan/flutter-ecommerce" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-500 dark:text-purple-400 text-sm font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image src={project2Image} alt="Portfolio Website" width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Portfolio Website</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">This responsive Next.js site.</p>
                <a href="https://github.com/SasmithaTharushan/portfolio" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-500 dark:text-purple-400 text-sm font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image src={project3Image} alt="Social Media Dashboard" width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Social Media Dashboard</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">A tool for managing social accounts.</p>
                <a href="https://github.com/SasmithaTharushan/social-dashboard" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-purple-500 dark:text-purple-400 text-sm font-medium hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Get in Touch</h2>
          <p className="text-sm sm:text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Got a project idea? Let’s make it happen together!
          </p>
          <a href="mailto:sasmitha@example.com" className="bg-purple-500 text-white px-6 py-3 rounded-full text-md font-medium hover:bg-purple-600 transition-colors shadow-sm">
            Contact Me
          </a>
        </section>
      </main>

      <footer className="py-4 text-center text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
        <p className="text-sm">© {new Date().getFullYear()} Sasmitha Tharushan. Built by Auxa.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="https://github.com/SasmithaTharushan" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithubAlt className="text-lg hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/sasmitha-tharushan-29b332197/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-lg hover:text-purple-400 transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
}