const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center p-4 glass-effect rounded-xl">
        <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">150+</div>
        <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
      </div>
      <div className="text-center p-4 glass-effect rounded-xl">
        <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">80+</div>
        <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
      </div>
      <div className="text-center p-4 glass-effect rounded-xl">
        <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
        <div className="text-gray-600 dark:text-gray-400">Team Members</div>
      </div>
      <div className="text-center p-4 glass-effect rounded-xl">
        <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">98%</div>
        <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
      </div>
    </div>
  );
};

export default HeroStats;