import React from 'react';
import { Code2, Palette, Users, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Building scalable applications with modern technologies'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Leadership',
      description: 'Leading teams to deliver exceptional results'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with innovative solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience in creating digital solutions 
            that make a difference. My journey in tech has been driven by curiosity and a 
            commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Starting as a self-taught programmer, I've grown into a full-stack developer with 
              expertise in modern web technologies. I've worked with startups and enterprise 
              companies, helping them build scalable solutions and deliver exceptional user 
              experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you'll find me contributing to open-source projects, mentoring 
              aspiring developers, or exploring new technologies to stay ahead in this 
              ever-evolving field.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&h=1200" 
              alt="Workspace" 
              className="rounded-lg shadow-lg object-cover h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;