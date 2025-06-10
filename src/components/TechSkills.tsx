import React from 'react';
import { Cloud, Database, Server, GitBranch, Terminal, LineChart, Monitor, Shield } from 'lucide-react';

const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["Amazon Web Services (AWS)", "Linux", "Kubernetes", "Docker"],
    icon: <Cloud className="w-6 h-6" />,
    color: "from-blue-400 to-blue-600"
  },
  {
    category: "CI/CD & Automation",
    items: ["Jenkins", "GitHub Actions", "CI/CD Pipeline", "ArgoCD"],
    icon: <GitBranch className="w-6 h-6" />,
    color: "from-green-400 to-green-600"
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible"],
    icon: <Server className="w-6 h-6" />,
    color: "from-purple-400 to-purple-600"
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
    icon: <Database className="w-6 h-6" />,
    color: "from-orange-400 to-orange-600"
  },
  {
    category: "Development",
    items: ["Python", "Bash Scripting"],
    icon: <Terminal className="w-6 h-6" />,
    color: "from-red-400 to-red-600"
  },
  {
    category: "Monitoring",
    items: ["Prometheus", "Grafana"],
    icon: <LineChart className="w-6 h-6" />,
    color: "from-teal-400 to-teal-600"
  }
];

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
            <div 
              key={index}
              className="group relative bg-gray-800 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${skill.color} mb-4`}>
                  {React.cloneElement(skill.icon, { className: "w-6 h-6 text-white" })}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {skill.category}
                </h3>
                
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-br ${skill.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}