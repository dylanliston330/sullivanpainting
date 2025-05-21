import React, { useState, useEffect, useRef } from 'react';
import { ContactFormData } from '../types';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  projectType: [],
  squareFootage: '',
  timeline: '',
  message: ''
};

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const projectTypes = [
    'Interior Painting',
    'Exterior Painting',
    'Cabinet Refinishing',
    'Deck Staining',
    'Fence Painting/Staining',
    'Commercial Painting'
  ];

  const timelineOptions = [
    'As soon as possible',
    'Within 1 month',
    'Within 3 months',
    'Just getting quotes for now'
  ];

  useEffect(() => {
    if (formRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(formRef.current);

      return () => {
        if (formRef.current) {
          observer.unobserve(formRef.current);
        }
      };
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const updatedProjectType = prev.projectType.includes(value)
        ? prev.projectType.filter((type) => type !== value)
        : [...prev.projectType, value];
      
      return { ...prev, projectType: updatedProjectType };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
      // In a real implementation, you would send the form data to a server
    }, 1500);
  };

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if current step is valid
  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      return formData.projectType.length > 0;
    }
    return true;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center">Get a Free Quote</h2>
        <p className="section-subtitle text-center">
          Tell us about your project and we'll get back to you within 24 hours
        </p>
        
        <div 
          ref={formRef}
          className="max-w-3xl p-8 mx-auto mt-12 bg-white rounded-lg shadow-lg fade-in"
        >
          {isSubmitted ? (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white bg-green-500 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-navy">Thank You!</h3>
              <p className="mb-6 text-lg text-gray-600">
                Your quote request has been submitted successfully. We'll be in touch with you shortly!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center w-full">
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-white
                      ${currentStep >= 1 ? 'bg-navy' : 'bg-gray-300'}`}
                  >
                    1
                  </div>
                  <div 
                    className={`flex-1 h-1 mx-2
                      ${currentStep >= 2 ? 'bg-navy' : 'bg-gray-200'}`}
                  />
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-white
                      ${currentStep >= 2 ? 'bg-navy' : 'bg-gray-300'}`}
                  >
                    2
                  </div>
                  <div 
                    className={`flex-1 h-1 mx-2
                      ${currentStep >= 3 ? 'bg-navy' : 'bg-gray-200'}`}
                  />
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full text-white
                      ${currentStep >= 3 ? 'bg-navy' : 'bg-gray-300'}`}
                  >
                    3
                  </div>
                </div>
              </div>

              {/* Step 1: Contact Information */}
              <div className={currentStep === 1 ? 'block' : 'hidden'}>
                <h3 className="mb-6 text-xl font-semibold text-navy">Contact Information</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block mb-2 font-medium text-gray-700">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                </div>
              </div>

              {/* Step 2: Project Details */}
              <div className={currentStep === 2 ? 'block' : 'hidden'}>
                <h3 className="mb-6 text-xl font-semibold text-navy">Project Details</h3>
                
                <div className="mb-6">
                  <label className="block mb-3 font-medium text-gray-700">
                    Project Type(s) *
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {projectTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type}`}
                          checked={formData.projectType.includes(type)}
                          onChange={() => handleCheckboxChange(type)}
                          className="w-4 h-4 text-orange border-gray-300 rounded focus:ring-orange"
                        />
                        <label htmlFor={`type-${type}`} className="ml-2">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="squareFootage" className="block mb-2 font-medium text-gray-700">
                    Approximate Square Footage
                  </label>
                  <input
                    type="text"
                    id="squareFootage"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleInputChange}
                    placeholder="e.g., 1,500 sq ft or 'Not sure'"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="timeline" className="block mb-2 font-medium text-gray-700">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Additional Information */}
              <div className={currentStep === 3 ? 'block' : 'hidden'}>
                <h3 className="mb-6 text-xl font-semibold text-navy">Additional Information</h3>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    Project Details / Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600">
                    By submitting this form, you agree to be contacted regarding your project request.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="px-6 py-2 font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Back
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={goToNextStep}
                    disabled={!isStepValid()}
                    className={`px-6 py-2 font-medium text-white rounded-md ml-auto ${
                      isStepValid() ? 'bg-navy hover:bg-navy-700' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 font-medium text-white rounded-md ml-auto bg-orange hover:bg-orange-600 disabled:bg-orange-300"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;