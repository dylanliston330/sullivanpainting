import React, { useState } from 'react';

const BeforeAfter: React.FC = () => {
  const interiorExamples = [
    {
      id: 1,
      image: '/1.jpg',
      alt: 'Interior painting example 1'
    },
    {
      id: 2,
      image: '/2.jpg',
      alt: 'Interior painting example 2'
    },
    {
      id: 3,
      image: '/3.jpg',
      alt: 'Interior painting example 3'
    }
  ];

  return (
    <section id="before-after" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">Our Transformation</h2>
        <p className="section-subtitle text-center">
          See the difference professional painting can make
        </p>

        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-2 gap-4">
            {/* Before Image */}
            <div className="relative">
              <img
                src="/oldhouse.jpg"
                alt="Before transformation"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                style={{ maxHeight: '400px' }}
              />
              <div className="absolute top-4 left-4 bg-navy text-white px-4 py-2 rounded-md font-semibold">
                Before
              </div>
            </div>

            {/* After Image */}
            <div className="relative">
              <img
                src="/newhouse.jpg"
                alt="After transformation"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                style={{ maxHeight: '400px' }}
              />
              <div className="absolute top-4 left-4 bg-orange text-white px-4 py-2 rounded-md font-semibold">
                After
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-navy mb-6 text-center">Interior Painting Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interiorExamples.map((example) => (
                <div key={example.id} className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={example.image}
                    alt={example.alt}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;