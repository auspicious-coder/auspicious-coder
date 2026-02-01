import SectionTitle from '../common/SectionTitle';

const TechStack = () => {
  const stacks = [
    {
      category: "Backend",
      color: "bg-red-500",
      items: [
        { name: "Java Spring Boot", level: "Expert", dev: "Java Specialist" },
        { name: "Python FastAPI", level: "Advanced", dev: "Python Dev" },
        { name: "Laravel PHP", level: "Advanced", dev: "Laravel Dev" },
        { name: "Node.js", level: "Intermediate", dev: "Full-Stack" }
      ]
    },
    {
      category: "Frontend",
      color: "bg-blue-500",
      items: [
        { name: "React.js", level: "Expert", dev: "Frontend Specialist" },
        { name: "TypeScript", level: "Advanced", dev: "Frontend Team" },
        { name: "Tailwind CSS", level: "Expert", dev: "All Developers" },
        { name: "Next.js", level: "Intermediate", dev: "React Expert" }
      ]
    },
    {
      category: "Mobile",
      color: "bg-green-500",
      items: [
        { name: "Flutter", level: "Expert", dev: "Mobile Specialist" },
        { name: "React Native", level: "Advanced", dev: "Cross-Platform" },
        { name: "Dart", level: "Expert", dev: "Flutter Dev" }
      ]
    },
    {
      category: "Database",
      color: "bg-purple-500",
      items: [
        { name: "PostgreSQL", level: "Expert", dev: "Backend Team" },
        { name: "MySQL", level: "Advanced", dev: "Laravel Dev" },
        { name: "MongoDB", level: "Intermediate", dev: "Full-Stack" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Technology"
          title="Expertise"
          highlight="Matrix"
          description="Each technology has a dedicated specialist in our team"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stacks.map((stack) => (
            <div key={stack.category} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className={`w-12 h-12 ${stack.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-white font-bold">{stack.category.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{stack.category}</h3>
              <div className="space-y-4">
                {stack.items.map((item) => (
                  <div key={item.name} className="border-l-4 border-primary-500 pl-4 py-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                        {item.level}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {item.dev}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Need a specific tech combination?{' '}
            <a href="#contact" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Tell us your stack requirements →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;