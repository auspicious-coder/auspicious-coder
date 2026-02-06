import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../UI/Button';
import DarkModeToggle from '../UI/DarkModeToggle';
import MobileMenu from './MobileMenu';
import Logo from "@/assets/logos/auspicious-coders-logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="Auspicious Coder"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold gradient-text hidden sm:block">
                Auspicious Coder
              </span>
              <span className="text-2xl font-bold gradient-text sm:hidden">
                AC
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <DarkModeToggle />
              {/* <Button>Get Quote</Button> */}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;