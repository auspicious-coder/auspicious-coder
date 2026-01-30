import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';
import SectionTitle from '../common/SectionTitle';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Featured"
          highlight="Projects"
          description="Explore our recent work that showcases our expertise and innovation"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;