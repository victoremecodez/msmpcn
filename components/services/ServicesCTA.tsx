

import React from 'react';
import { Page } from '../../types.ts';

interface ServicesCTAProps {
  onNavigate: (page: Page) => void;
}

const ServicesCTA: React.FC<ServicesCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-church-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-200 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
          Whether in person or online, we look forward to welcoming you into our church family.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={() => onNavigate('livestream')} className="w-full md:w-auto bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            Watch Livestream
          </button>
          <button onClick={() => onNavigate('contact')} className="w-full md:w-auto bg-transparent border-2 border-white text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-church-blue transition-all duration-300 transform hover:scale-105">
            Plan Your Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
