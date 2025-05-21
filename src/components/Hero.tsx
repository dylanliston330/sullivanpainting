import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Professional Interior Painting',
    subtitle: 'Transform your living spaces with premium quality finishes'
  },
  {
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Expert Exterior Painting',
    subtitle: 'Protect and beautify your home with weather-resistant coatings'
  },
  {
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Specialized Spray Application',
    subtitle: 'Flawless finishes for cabinets, fences, decks, and more'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen-75 min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {slides[currentSlide].title}
          </h1>
          <p className="mb-10 text-xl text-white md:text-2xl">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="#contact"
              className="btn btn-primary inline-flex items-center text-lg"
            >
              Get a Free Quote <ChevronRight size={20} className="ml-2" />
            </a>
            <a
              href="#services"
              className="btn bg-white text-navy hover:bg-gray-100 inline-flex items-center text-lg"
            >
              Our Services <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-12 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;