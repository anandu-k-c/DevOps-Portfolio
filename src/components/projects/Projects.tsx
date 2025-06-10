import { projects } from './projectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-800 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Showcasing my expertise in DevOps practices and cloud infrastructure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}