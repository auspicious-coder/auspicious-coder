import { Star, Quote, User, Linkedin, Github } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  // Reference type based colors
  const typeColors = {
    'Previous Work': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Professional Reference': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    'Code Review': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'GitHub': 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    'Default': 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
  };

  // Icon for different reference types
  const getTypeIcon = (type) => {
    switch(type) {
      case 'Previous Work': return <User className="w-3 h-3" />;
      case 'Professional Reference': return <Linkedin className="w-3 h-3" />;
      case 'Code Review': return <Github className="w-3 h-3" />;
      default: return <Quote className="w-3 h-3" />;
    }
  };

  return (
    <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 h-full flex flex-col">
      
      {/* Reference Type Badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full ${typeColors[testimonial.type] || typeColors.Default}`}>
          {getTypeIcon(testimonial.type)}
          {testimonial.type}
        </span>
        
        {/* Project Duration if available */}
        {testimonial.duration && (
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
            {testimonial.duration}
          </span>
        )}
      </div>
      
      {/* Quote Icon - Subtle */}
      <div className="absolute top-10 right-8 text-primary-100 dark:text-primary-900/30">
        <Quote size={32} />
      </div>
      
      {/* Rating - Only show if rating exists */}
      {testimonial.rating && (
        <div className="flex mb-4">
          {[...Array(Math.min(testimonial.rating, 5))].map((_, i) => (
            <Star 
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
            />
          ))}
          {testimonial.rating < 5 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
              ({testimonial.rating}/5)
            </span>
          )}
        </div>
      )}
      
      {/* Testimonial Text */}
      <div className="flex-grow mb-6">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
          "{testimonial.feedback}"
        </p>
        
        {/* Specific praise for skills */}
        {testimonial.skills && (
          <div className="mt-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              <strong>Praised skills:</strong>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {testimonial.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Client Info */}
      <div className="flex items-center pt-6 border-t border-gray-100 dark:border-gray-800">
        {/* Avatar/Initials */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent flex items-center justify-center mr-4 flex-shrink-0">
          {testimonial.avatar ? (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-bold">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        
        {/* Info */}
        <div className="min-w-0 flex-1">
          <h4 className="font-bold truncate">{testimonial.name}</h4>
          
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-0.5">
            {testimonial.role && (
              <p className="truncate">{testimonial.role}</p>
            )}
            
            {testimonial.company && testimonial.company !== "Freelance Project" && (
              <p className="truncate">at {testimonial.company}</p>
            )}
            
            {/* Project reference if available */}
            {testimonial.project && testimonial.project !== "Various" && (
              <div className="flex items-center mt-1">
                <span className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded truncate">
                  {testimonial.project}
                </span>
              </div>
            )}
          </div>
          
          {/* Social/Contact links if available */}
          <div className="flex gap-2 mt-2">
            {testimonial.linkedin && (
              <a 
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`${testimonial.name}'s LinkedIn`}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            
            {testimonial.github && (
              <a 
                href={testimonial.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label={`${testimonial.name}'s GitHub`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent rounded-b-2xl"></div>
    </div>
  );
};

export default TestimonialCard;