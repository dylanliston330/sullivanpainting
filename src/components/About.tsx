import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">About Sullivan Painting</h2>
            
            <div className="mb-8 prose fade-in">
              <p className="mb-4 text-lg">
                Sullivan Painting LLC is a professional painting company serving the greater Akron, Canton, and Cleveland areas. Founded by Deegan Sullivan, we specialize in interior, exterior, and spray application painting services for residential and commercial properties.
              </p>
              
              <p className="mb-4 text-lg">
                With years of experience and a commitment to quality, we take pride in transforming spaces with precision, attention to detail, and premium materials. Our team is fully insured, professional, and dedicated to exceeding customer expectations on every project.
              </p>
            </div>
            
            <h3 className="mb-4 text-xl font-semibold text-navy fade-in">Why Choose Us?</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start fade-in">
                <CheckCircle className="flex-shrink-0 mr-3 text-orange" size={20} />
                <span>Premium quality materials and expert application</span>
              </li>
              <li className="flex items-start fade-in">
                <CheckCircle className="flex-shrink-0 mr-3 text-orange" size={20} />
                <span>Fully insured and professional team</span>
              </li>
              <li className="flex items-start fade-in">
                <CheckCircle className="flex-shrink-0 mr-3 text-orange" size={20} />
                <span>Detailed prep work and thorough cleanup</span>
              </li>
              <li className="flex items-start fade-in">
                <CheckCircle className="flex-shrink-0 mr-3 text-orange" size={20} />
                <span>Clear communication and on-time completion</span>
              </li>
              <li className="flex items-start fade-in">
                <CheckCircle className="flex-shrink-0 mr-3 text-orange" size={20} />
                <span>Satisfaction guaranteed on all projects</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="p-8 bg-white rounded-lg shadow-md fade-in">
              <div className="text-center mb-8">
                <div className="inline-block p-1 mb-4 border-4 border-orange rounded-full">
                  <img
                    src="https://images.pexels.com/photos/8961098/pexels-photo-8961098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Deegan Sullivan"
                    className="object-cover w-40 h-40 rounded-full"
                  />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-navy">Deegan Sullivan</h3>
                <p className="text-gray-600">Owner & Lead Painter</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="flex-shrink-0 mr-4 text-orange" size={20} />
                  <div>
                    <h4 className="font-medium text-navy">Phone</h4>
                    <a href="tel:3306907639" className="text-gray-600 hover:text-orange">
                      (330) 690-7639
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="flex-shrink-0 mr-4 text-orange" size={20} />
                  <div>
                    <h4 className="font-medium text-navy">Email</h4>
                    <a href="mailto:sullivanpainterz@gmail.com" className="text-gray-600 hover:text-orange">
                      sullivanpainterz@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="flex-shrink-0 mr-4 text-orange" size={20} />
                  <div>
                    <h4 className="font-medium text-navy">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 7:30AM - 6:00PM</p>
                    <p className="text-gray-600">Sat: 8:00AM - 2:00PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;