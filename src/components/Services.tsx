import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="section-subtitle text-center">
          Professional painting services for every part of your home
        </p>
        
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary">
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;