import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Menus', path: '/menus' },
    { name: 'Our Special Menus', path: '/specialmenus' },

    
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl md:text-3xl font-serif font-bold ${scrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
            Hotel Ashraya
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-[#D4AF37] transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              } ${location.pathname === link.path ? 'text-[#D4AF37]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+9771234567890" 
            className="flex items-center bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#BF9E30] transition-colors"
          >
            <Phone size={18} className="mr-2" />
            Book Now
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-[#1E3A8A] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium text-white hover:text-[#D4AF37] transition-colors ${
                  location.pathname === link.path ? 'text-[#D4AF37]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+9771234567890" 
              className="flex items-center bg-[#D4AF37] text-white px-4 py-2 rounded hover:bg-[#BF9E30] transition-colors mt-4"
            >
              <Phone size={18} className="mr-2" />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;