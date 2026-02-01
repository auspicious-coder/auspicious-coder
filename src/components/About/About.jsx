import SectionTitle from '../common/SectionTitle';
import { CheckCircle, Users, Code, Zap, MessageSquare, Shield } from 'lucide-react';

const About = () => {
  // REAL features for small expert team
  const features = [
    { 
      icon: <Users className="w-6 h-6" />,
      title: "Expert-Only Team", 
      description: "6 senior developers. No trainees. Every line of code by experts."
    },
    { 
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Diversity", 
      description: "Java, Python, React, Flutter, Laravel – all in one team."
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication", 
      description: "Talk directly to developers. No account managers in between."
    },
    { 
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Execution", 
      description: "Small team = Quick decisions. No corporate bureaucracy."
    },
    { 
      icon: <Shield className="w-6 h-6" />,
      title: "Code Ownership", 
      description: "We build it, we maintain it. Full transparency."
    },
    { 
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality First", 
      description: "Clean code, best practices, and proper documentation."
    },
  ];

  // REAL stats - Combined experience
  const realStats = [
    { label: "Combined Experience", value: "15+ Years" },
    { label: "Tech Stacks", value: "5+" },
    { label: "Team Size", value: "6 Experts" },
    { label: "Response Time", value: "< 4 Hours" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Our Story */}
          <div>
            <SectionTitle
              subtitle="Our Approach"
              title="Why Work With A"
              highlight="Small Expert Team"
              description=""
            />
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Most agencies have **20 juniors and 2 seniors**. We flipped that model.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400">
                **Auspicious Coders** is 6 experienced developers who've worked in the industry for years, 
                now building our own agency. We skip the corporate layers and work **directly with clients**.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl my-8 border-l-4 border-primary-500">
                <h4 className="font-bold text-lg mb-2">🏆 Our Advantage:</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Need a Java backend? Our Java expert codes it. Need React frontend? 
                  Our React specialist builds it. **Each project gets the right expert from day one.**
                </p>
              </div>
            </div>
            
            {/* Feature Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - REAL Stats */}
          <div className="bg-gradient-to-br from-primary-600 to-accent rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">By The Numbers</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {realStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Real Tech Stack Visualization */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">🎯 Our Tech Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Java/Spring", color: "bg-red-500" },
                  { name: "React.js", color: "bg-blue-500" },
                  { name: "Python", color: "bg-yellow-500" },
                  { name: "Flutter", color: "bg-teal-500" },
                  { name: "PostgreSQL", color: "bg-purple-500" },
                  { name: "Laravel", color: "bg-orange-500" },
                ].map((tech) => (
                  <span 
                    key={tech.name} 
                    className={`px-4 py-2 rounded-full ${tech.color} bg-opacity-20 text-white text-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Mission Statement - Honest */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-primary-100">
                To deliver **expert-level code** without agency markup. You pay for developers, not for fancy offices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;