import { useState } from 'react';
import Button from '../UI/Button';
import DarkModeToggle from '../UI/DarkModeToggle';

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-dark-card shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent rounded-lg"></div>
            <span className="font-bold">Auspicious Coder</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-700 dark:text-gray-300"
          >
            ✕
          </button>
        </div>
        
        <nav className="space-y-4 mb-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium border-b border-gray-100 dark:border-gray-800"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Dark Mode</span>
            <DarkModeToggle />
          </div>
          <Button className="w-full">Get Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;