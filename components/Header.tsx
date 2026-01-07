import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Core Competencies', href: '#competencies' },
    { name: 'Experience', href: '#experience' },
    { name: 'Selected Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif text-3xl font-bold tracking-tight leading-none transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          Fabian Bresan<span className={isScrolled ? 'text-primary-800' : 'text-primary-300'}>, MD</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-primary-800' : 'text-slate-200 hover:text-white'
                }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        <button
          className={`md:hidden focus:outline-none ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-800 font-medium py-2 border-b border-gray-100 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};