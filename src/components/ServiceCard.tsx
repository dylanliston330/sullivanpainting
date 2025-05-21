import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="service-card fade-in"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-navy">{service.title}</h3>
        <p className="mb-4 text-gray-700">{service.description}</p>
        <ul className="mb-6 space-y-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-orange rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={`#${service.slug}`}
          className="inline-flex items-center text-orange hover:text-orange-600 font-medium"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;