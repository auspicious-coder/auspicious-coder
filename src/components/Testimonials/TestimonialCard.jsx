import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
        <Quote size={40} />
      </div>
      
      {/* Rating */}
      <div className="flex mb-6">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star 
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-600 dark:text-gray-400 text-lg italic mb-8 relative z-10">
        "{testimonial.feedback}"
      </p>
      
      {/* Client Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent flex items-center justify-center mr-4">
          <span className="text-white font-bold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.role}, {testimonial.company}
          </p>
          <div className="flex items-center mt-1">
            <span className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">
              {testimonial.project}
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent rounded-b-2xl"></div>
    </div>
  );
};

export default TestimonialCard;