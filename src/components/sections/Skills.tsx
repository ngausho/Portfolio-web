import React from 'react';
import { Skill } from '../../types';

const Skills = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', category: 'Frontend', proficiency: 90, icon: '⚡' },
    { name: 'React', category: 'Frontend', proficiency: 85, icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', proficiency: 80, icon: '🚀' },
    { name: 'Python', category: 'Backend', proficiency: 75, icon: '🐍' },
    { name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: '📘' },
    { name: 'SQL', category: 'Database', proficiency: 80, icon: '💾' },
    { name: 'UI/UX Design', category: 'Design', proficiency: 75, icon: '🎨' },
    { name: 'DevOps', category: 'Infrastructure', proficiency: 70, icon: '🔧' }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 dark:text-indigo-300 dark:bg-indigo-900">
                              Proficiency
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-300">
                              {skill.proficiency}%
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200 dark:bg-indigo-900">
                          <div
                            style={{ width: `${skill.proficiency}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;