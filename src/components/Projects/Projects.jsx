import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects.json';
import SectionTitle from '../common/SectionTitle';

const Projects = () => {
  const INITIAL_COUNT = 4;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_COUNT);

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
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show button only if projects > 4 */}
        {projectsData.length > INITIAL_COUNT && !showAll && (
          <div className="text-center mt-12">
            <button
              className="btn-primary"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
