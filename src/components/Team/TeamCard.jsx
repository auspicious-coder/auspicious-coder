import { Linkedin, Twitter, Github } from 'lucide-react';

const TeamCard = ({ member }) => {
  return (
    <div className="group relative">
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
        {/* Image placeholder */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden 
                ring-2 ring-gray-200 dark:ring-gray-700 
                bg-gray-100 dark:bg-gray-800 
                flex items-center justify-center
                transition-transform duration-300 group-hover:scale-105">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
              {member.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </span>
          )}
        </div>



        <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
        <p className="text-primary-600 dark:text-primary-400 text-center font-medium mb-4">
          {member.role}
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-6">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;