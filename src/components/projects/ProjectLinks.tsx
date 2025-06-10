import { Github, ExternalLink } from 'lucide-react';

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

export default function ProjectLinks({ github, demo }: ProjectLinksProps) {
  return (
    <div className="flex gap-4">
      {github && (
        <a 
          href={github}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          <span>Code</span>
        </a>
      )}
      {demo && (
        <a 
          href={demo}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={20} />
          <span>Demo</span>
        </a>
      )}
    </div>
  );
}