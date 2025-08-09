

import React from 'react';
import { Page } from '../../types.ts';

interface AboutCTAProps {
  onNavigate: (page: Page) => void;
}

const AboutCTA: React.FC<AboutCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Become Part of Our Story</h2>
        <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-lg text-slate-700 mb-8 font-sans leading-relaxed">
          We invite you to experience God's love with us. Whether you're looking for a new church home or exploring faith, you are welcome here.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={() => onNavigate('services')} className="w-full md:w-auto bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
            Plan a Visit
          </button>
          <button onClick={() => onNavigate('ministries')} className="w-full md:w-auto bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            Join a Ministry
          </button>
           <a href="#leadership-section" onClick={(e) => {
               e.preventDefault();
               document.getElementById('leadership-section')?.scrollIntoView({ behavior: 'smooth' });
           }} className="w-full md:w-auto bg-gray-200 text-church-dark font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
            Meet the Pastor
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;