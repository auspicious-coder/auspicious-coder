import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
          darkMode ? 'left-7' : 'left-1'
        }`}
      >
        {darkMode ? (
          <Moon className="w-4 h-4 text-gray-800" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;