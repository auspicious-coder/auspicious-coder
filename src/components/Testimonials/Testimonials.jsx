import TestimonialCard from './TestimonialCard';
import testimonialsData from '../../data/testimonials.json';
import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-gray-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Client Feedback"
          title="What Our"
          highlight="Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about working with us."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span className="w-3 h-3 bg-primary-600 rounded-full"></span>
            <span>Trusted by 80+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;