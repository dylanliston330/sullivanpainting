import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';

type FilterCategory = 'all' | 'interior' | 'exterior' | 'spray';

const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showBefore, setShowBefore] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category: FilterCategory) => {
    setActiveCategory(category);
  };

  const openModal = (projectId: string) => {
    setActiveProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    setShowBefore(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (activeProject) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeProject]);

  const selectedProject = projects.find(p => p.id === activeProject);

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <h2 className="section-title text-center">Our Work</h2>
        <p className="section-subtitle text-center">
          Browse our portfolio of completed projects
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-2 mb-2 transition-colors duration-200 rounded-full ${
              activeCategory === 'all' 
                ? 'bg-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleCategoryChange('interior')}
            className={`px-6 py-2 mb-2 transition-colors duration-200 rounded-full ${
              activeCategory === 'interior' 
                ? 'bg-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Interior
          </button>
          <button
            onClick={() => handleCategoryChange('exterior')}
            className={`px-6 py-2 mb-2 transition-colors duration-200 rounded-full ${
              activeCategory === 'exterior' 
                ? 'bg-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Exterior
          </button>
          <button
            onClick={() => handleCategoryChange('spray')}
            className={`px-6 py-2 mb-2 transition-colors duration-200 rounded-full ${
              activeCategory === 'spray' 
                ? 'bg-navy text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Spray Application
          </button>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="overflow-hidden bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(project.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.afterImageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 text-xs font-semibold bg-orange text-white px-3 py-1 rounded-full">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-navy">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
          <div 
            ref={modalRef}
            className="relative w-full max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-navy text-white hover:bg-navy-700"
              aria-label="Close modal"
            >
              ×
            </button>
            
            <h3 className="mb-2 text-2xl font-semibold text-navy">{selectedProject.title}</h3>
            <p className="mb-4 text-gray-600">{selectedProject.description}</p>
            
            <div className="relative">
              <img
                src={showBefore ? selectedProject.beforeImageUrl : selectedProject.afterImageUrl}
                alt={`${showBefore ? 'Before' : 'After'} - ${selectedProject.title}`}
                className="object-cover w-full rounded-lg"
                style={{ height: '500px' }}
              />
              
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBefore(true);
                  }}
                  className={`px-4 py-2 font-medium rounded ${
                    showBefore 
                      ? 'bg-orange text-white' 
                      : 'bg-white text-navy'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBefore(false);
                  }}
                  className={`px-4 py-2 font-medium rounded ${
                    !showBefore 
                      ? 'bg-orange text-white' 
                      : 'bg-white text-navy'
                  }`}
                >
                  After
                </button>
              </div>
            </div>
            
            {selectedProject.testimonial && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="italic text-gray-700 mb-2">"{selectedProject.testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < selectedProject.testimonial!.rating 
                            ? 'text-orange' 
                            : 'text-gray-300'
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
                  <span className="ml-2 text-gray-600">- {selectedProject.testimonial.author}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;