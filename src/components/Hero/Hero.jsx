import { ArrowRight, Code, Users, Rocket, Trophy } from 'lucide-react';
import Button from '../UI/Button';

const Hero = () => {
  const stats = [
    { icon: <Code />, label: 'Projects', value: '150+' },
    { icon: <Users />, label: 'Clients', value: '80+' },
    { icon: <Rocket />, label: 'Launch Speed', value: '2x Faster' },
    { icon: <Trophy />, label: 'Satisfaction', value: '98%' },
  ];

  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent/10 dark:from-primary-900/10 dark:to-accent/5 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 80+ Companies Worldwide
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Building{' '}
              <span className="gradient-text">Digital Excellence</span>{' '}
              for Your Business
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We transform ideas into powerful digital solutions. From startups to enterprises, 
              we deliver cutting-edge software that drives growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button>
                Start Your Project <ArrowRight className="ml-2 inline" size={20} />
              </Button>
              <Button variant="outline">
                View Our Work
              </Button>
            </div>
          </div>
          
          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;