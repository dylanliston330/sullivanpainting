import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - (isMobile ? 1 : 3) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - (isMobile ? 1 : 3) ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  // Determine visible testimonials based on screen size
  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]] 
    : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-16 bg-navy text-white">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl">
          What Our Customers Say
        </h2>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.33)}%)`,
                width: `${isMobile ? '100%' : '300%'}`
              }}
            >
              {visibleTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="px-4"
                  style={{ width: `${isMobile ? '100%' : '33.33%'}` }}
                >
                  <div className="p-6 h-full bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-orange' : 'text-gray-400'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-300">{testimonial.location}</p>
                      <p className="text-sm text-orange">{testimonial.projectType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 text-navy hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 text-navy hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.slice(0, testimonials.length - (isMobile ? 0 : 2)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-orange' : 'bg-white bg-opacity-30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;