import React from 'react';
import SkillCard from './SkillCard';
import { skills } from './skillsData';

export default function TechSkills() {
  return (
    <section className="py-20 bg-gray-900 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Expertise in modern DevOps tools and practices, enabling seamless automation and deployment
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              category={skill.category}
              items={skill.items}
              icon={<skill.icon className="w-6 h-6 text-white" />}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}