import React from 'react';

export default function HeroBackground() {
  return (
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
  );
}