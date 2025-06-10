import React from 'react';
import Hero from './components/hero/Hero';
import TechSkills from './components/skills/TechSkills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TechSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;