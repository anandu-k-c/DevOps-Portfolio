import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/anandu-k-c", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anandukc/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aanandu97@gmail.com", label: "Email" }
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-8 mb-12">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="group relative p-4 glass-effect rounded-xl hover:scale-110 transition-all duration-300"
          aria-label={social.label}
        >
          <social.icon className="w-8 h-8 text-green-500 group-hover:text-green-500" />
        </a>
      ))}
    </div>
  );
}