import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDownIcon } from 'lucide-react';
import profileImg from '../../assets/profileImg.jpg';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
           Eliud Kamau
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting beautiful, user-centric digital experiences with cutting-edge technologies
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <GithubIcon className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <LinkedinIcon className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <MailIcon className="w-8 h-8" />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#projects"
               className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              View My Work
            </a>
            <a href="#contact"
               className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <ChevronDownIcon className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;