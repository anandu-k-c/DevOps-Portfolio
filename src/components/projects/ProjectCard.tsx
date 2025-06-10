import { Project } from './projectsData';
import ProjectTag from './ProjectTag';
import ProjectLinks from './ProjectLinks';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, color, icon: Icon, links } = project;
  
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
      <div className="relative">
        <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${color} mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <ProjectTag key={idx} tag={tag} color={color} />
          ))}
        </div>

        <ProjectLinks {...links} />
      </div>
    </div>
  );
}