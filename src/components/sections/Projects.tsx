import React, { useState } from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';
import { Project } from '../../types';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2089&h=1200',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&h=1200',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '3',
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool using DALL-E API',
      tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070&h=1200',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all'
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full ${
                filter === tag
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <GithubIcon className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;