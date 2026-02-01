import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Project Header with Demo Badge */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500 to-accent">
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
            {project.status || "Live Project"}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-white/20 font-bold">{project.title.charAt(0)}</div>
        </div>
        
        {/* Action Buttons - REAL LINKS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
              {project.category}
            </span>
            {project.client === "Demo Project" && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                Showcase
              </span>
            )}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="block">{project.duration}</span>
            {project.client && (
              <span className="text-xs">For: {project.client}</span>
            )}
          </div>
          {/* <button className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
            View Code →
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;