import SectionTitle from '../common/SectionTitle';

const About = () => {
  const features = [
    { number: "01", title: "Innovation", description: "We stay ahead of technology trends" },
    { number: "02", title: "Quality", description: "Code quality and best practices" },
    { number: "03", title: "Support", description: "24/7 technical support" },
    { number: "04", title: "Growth", description: "Scalable solutions for your growth" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <SectionTitle
              subtitle="About Us"
              title="Why Choose"
              highlight="Auspicious Coders"
              description=""
            />
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                At <span className="font-bold text-primary-600 dark:text-primary-400">Auspicious Coders</span>, we believe in transforming businesses through innovative digital solutions. With over a decade of experience, we've helped startups and enterprises alike achieve their digital goals.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our team of passionate developers, designers, and strategists work together to deliver exceptional results that drive growth and innovation.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.number} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{feature.number}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-primary-600 to-accent rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">150+</div>
                <div className="text-primary-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-primary-100">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth in the digital era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;