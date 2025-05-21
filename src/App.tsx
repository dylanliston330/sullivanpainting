import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import { initIntersectionObserver } from './utils/animations';

function App() {
  useEffect(() => {
    document.title = "Sullivan Painting LLC | Professional Painting Services";
    initIntersectionObserver();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;