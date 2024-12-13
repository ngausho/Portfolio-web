import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;