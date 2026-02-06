import TeamCard from './TeamCard';
import teamData from '../../data/team.json';
import SectionTitle from '../common/SectionTitle';

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container-custom">
        <SectionTitle
          subtitle="Meet Our Experts"
          title="The Brilliant Minds Behind"
          highlight="Auspicious Coder"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-primary-600 to-accent rounded-full">
            <div className="bg-white dark:bg-dark-bg px-6 py-3 rounded-full">
              <span className="font-semibold">We're hiring! </span>
              <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                Join our team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;