import React from 'react';
import { Experience } from '../../types';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Tech Innovators Inc.',
      role: 'Senior Full Stack Developer',
      period: '2021 - Present',
      description: 'Leading development of enterprise-scale applications, mentoring junior developers, and implementing best practices.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      id: '2',
      company: 'Digital Solutions Ltd.',
      role: 'Full Stack Developer',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      id: '3',
      company: 'StartUp Vision',
      role: 'Frontend Developer',
      period: '2018 - 2019',
      description: "Built responsive web applications and contributed to the company's design system.",
      technologies: ['React', 'TypeScript', 'SASS', 'Redux']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-6">
                  <div className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;