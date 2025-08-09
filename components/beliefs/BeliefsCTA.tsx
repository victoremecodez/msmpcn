

import React from 'react';
import { Page } from '../../types.ts';

interface BeliefsCTAProps {
  onNavigate: (page: Page) => void;
}

const BeliefsCTA: React.FC<BeliefsCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-church-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Explore Further</h2>
        <p className="text-lg text-gray-200 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
          Our beliefs are not just statements; they are the heart of our community. We invite you to explore them more deeply with us.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={() => onNavigate('faith-journey')} className="w-full md:w-auto bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            Learn More About Jesus
          </button>
          <button onClick={() => onNavigate('services')} className="w-full md:w-auto bg-transparent border-2 border-white text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-church-blue transition-all duration-300 transform hover:scale-105">
            Join a Bible Class
          </button>
           <button onClick={() => onNavigate('sermons')} className="w-full md:w-auto bg-transparent border-2 border-white text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-church-blue transition-all duration-300 transform hover:scale-105">
            Watch Our Sermons
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeliefsCTA;
