import React from 'react';
import { Terminal } from 'lucide-react';
import HeroBackground from './HeroBackground';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <HeroBackground />

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="mb-8 inline-block">
            <Terminal className="w-16 h-16 text-blue-400 animate-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Anandu K C
            {/* <span className="block text-3xl md:text-4xl mt-4 text-white opacity-90">
              Infrastructure Specialist
            </span> */}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          A DevOps Engineer With a Passion for Automating Infrastructure and Optimizing Performance.
          </p>
          
          <SocialLinks />
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