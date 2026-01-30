import ServiceCard from './ServiceCard';
import servicesData from '../../data/services.json';
import SectionTitle from '../common/SectionTitle';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-bg">
      <div className="container-custom">
        <SectionTitle 
          subtitle="What We Offer"
          title="Our Premium Services"
          description="Comprehensive digital solutions tailored to your business needs"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            Need a custom solution?{' '}
            <a href="#contact" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Let's discuss your project →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;