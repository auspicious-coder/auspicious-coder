import TestimonialCard from './TestimonialCard';
import testimonialsData from '../../data/testimonials.json';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-gray-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Developer References"
          title="Professional"
          highlight="Feedback"
          description="What colleagues and clients say about our developers' technical skills and work ethic."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* REMOVE: "Trusted by 80+ companies" */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            Want to see our code quality?{' '}
            <a 
              href="https://github.com/auspicious-coder" 
              target="_blank"
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              Check our GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;