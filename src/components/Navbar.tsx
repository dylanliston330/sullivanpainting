import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
          Sullivan Painting
        </a>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          <a href="#" className={`font-medium ${isScrolled ? 'text-navy' : 'text-white'} hover:text-orange`}>Home</a>
          <a href="#services" className={`font-medium ${isScrolled ? 'text-navy' : 'text-white'} hover:text-orange`}>Services</a>
          <a href="#before-after" className={`font-medium ${isScrolled ? 'text-navy' : 'text-white'} hover:text-orange`}>Portfolio</a>
          <a href="#about" className={`font-medium ${isScrolled ? 'text-navy' : 'text-white'} hover:text-orange`}>About</a>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>

        {/* Mobile Call Button */}
        <a 
          href="tel:3306907639" 
          className={`flex items-center md:hidden mr-12 ${isScrolled ? 'text-navy' : 'text-white'}`}
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="z-50 md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} className={isScrolled ? 'text-navy' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-navy' : 'text-white'} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center space-y-6">
            <a 
              href="#" 
              className="text-2xl font-medium text-navy hover:text-orange"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-2xl font-medium text-navy hover:text-orange"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#before-after" 
              className="text-2xl font-medium text-navy hover:text-orange"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="text-2xl font-medium text-navy hover:text-orange"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary text-xl"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
            <a 
              href="tel:3306907639" 
              className="flex items-center text-navy text-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} className="mr-2" /> (330) 690-7639
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;