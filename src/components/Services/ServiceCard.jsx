import { Check } from 'lucide-react';

const ServiceCard = ({ service }) => {
  // Map services to your team's expertise
  const expertMap = {
    1: "Java + React Experts",
    2: "Flutter Specialist",
    3: "Backend Team",
    4: "React Frontend Expert", 
    5: "Laravel Developer",
    6: "Senior Architects"
  };

  return (
    <div className="group bg-white dark:bg-dark-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
          <span className="text-2xl">{service.icon}</span>
        </div>
        {/* EXPERT BADGE */}
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
          {expertMap[service.id]}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
      
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-3" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      {/* <button className="w-full py-3 text-primary-600 dark:text-primary-400 font-semibold rounded-lg border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
        Meet the Expert →
      </button> */}
    </div>
  );
};

export default ServiceCard;