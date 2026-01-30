const SectionTitle = ({ subtitle, title, highlight, description }) => {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;