import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Sullivan Painting LLC</h3>
            <p className="mb-4 opacity-80">
              Professional painting services for residential and commercial properties in the greater Akron, Canton, and Cleveland areas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Services</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Interior Painting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Exterior Painting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Spray Application</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Cabinet Refinishing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition-colors">Deck & Fence Staining</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="flex-shrink-0 mr-3 text-orange" size={20} />
                <a href="tel:3306907639" className="opacity-80 hover:text-orange transition-colors">
                  (330) 690-7639
                </a>
              </li>
              <li className="flex">
                <Mail className="flex-shrink-0 mr-3 text-orange" size={20} />
                <a href="mailto:sullivanpainterz@gmail.com" className="opacity-80 hover:text-orange transition-colors">
                  sullivanpainterz@gmail.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="flex-shrink-0 mr-3 text-orange" size={20} />
                <span className="opacity-80">
                  Serving Akron, Canton, and Cleveland areas
                </span>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
            <ul className="space-y-2 opacity-80">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:30AM - 6:00PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00AM - 2:00PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-block px-6 py-2 font-medium bg-orange text-white rounded-md hover:bg-orange-600 transition-colors">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 bg-navy-800">
        <div className="container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm opacity-80">
              © {currentYear} Sullivan Painting LLC. All rights reserved.
            </p>
            <div className="mt-2 text-sm opacity-80 md:mt-0">
              <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;