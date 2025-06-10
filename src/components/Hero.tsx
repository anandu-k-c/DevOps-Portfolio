import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: 'linear-gradient(45deg, #60A5FA, #3B82F6)',
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="mb-8 inline-block">
            <Terminal className="w-16 h-16 text-blue-400 animate-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            DevOps Engineer
            <span className="block text-3xl md:text-4xl mt-4 text-white opacity-90">
              Infrastructure Specialist
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Crafting robust, scalable, and automated cloud infrastructure solutions
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group relative p-4 glass-effect rounded-xl hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
              </a>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
}