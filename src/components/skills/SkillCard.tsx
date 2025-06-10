import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}

export default function SkillCard({ category, items, icon, color }: SkillCardProps) {
  return (
    <div className="group relative bg-gray-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
      
      <div className="relative">
        <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${color} mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-white">
          {category}
        </h3>
        
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
              <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-br ${color}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}