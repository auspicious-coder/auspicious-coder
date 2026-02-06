import { ArrowRight, Code, Users, Zap, Target } from 'lucide-react';
import Button from '../UI/Button';

const Hero = () => {
  // REAL stats for new company
  const stats = [
    { 
      icon: <Target />, 
      label: 'Expert Developers', 
      value: '6 Specialists',
      description: 'No juniors, only experienced devs'
    },
    { 
      icon: <Zap />, 
      label: 'Tech Stacks', 
      value: '5+',
      description: 'Java, Python, React, Flutter, Laravel'
    },
    { 
      icon: <Code />, 
      label: 'Projects', 
      value: 'Building',
      description: 'Ready for your first project'
    },
    { 
      icon: <Users />, 
      label: 'Approach', 
      value: 'Direct',
      description: 'Work directly with developers'
    },
  ];

  // Handle button clicks
  const handleMeetTeam = () => {
    // Smooth scroll to Team section
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeeTechStack = () => {
    // Smooth scroll to Tech Stack section
    const techSection = document.getElementById('tech-stack');
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    // Scroll to Contact section OR open WhatsApp
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Alternative: Direct WhatsApp
    // window.open('https://wa.me/919472971255?text=Hi%20Auspicious%20Coders,%20I%20need%20a%20quote%20for%20a%20project.', '_blank');
  };

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
            {/* BADGE - Honest Version */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
              🚀 New Agency, Old Expertise
            </div>
            
            {/* MAIN HEADLINE - Realistic */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Small Team,</span>
              <span className="gradient-text">Big Impact</span>
            </h1>
            
            {/* SUBTITLE - Real Value Proposition */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              <span className="font-bold">6 expert developers. 5+ tech stacks. Zero outsourcing.</span><br/>
              Get full-stack solutions directly from the people who write the code.
            </p>
            
            {/* TECH STACK BADGES - Show Actual Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Java', 'React', 'Python', 'Flutter', 'PostgreSQL', 'Laravel','Ssms','Jasper'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA BUTTONS - REAL FUNCTIONALITY */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary Button - Main Action */}
              <Button onClick={handleGetQuote}>
                Get Free Consultation <ArrowRight className="ml-2 inline" size={20} />
              </Button>
              
              {/* Secondary Buttons */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={handleMeetTeam}
                  className="flex-1"
                >
                  Meet Team
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleSeeTechStack}
                  className="flex-1"
                >
                  Tech Stack
                </Button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Quick response guaranteed</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - REAL Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-effect p-6 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={index === 0 ? handleMeetTeam : index === 1 ? handleSeeTechStack : undefined}
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;