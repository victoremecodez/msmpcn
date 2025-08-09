

import React from 'react';
import { Page } from '../../types.ts';

interface SermonsCTAProps {
  onNavigate: (page: Page) => void;
}

const SermonsCTA: React.FC<SermonsCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-church-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Ready to Grow Deeper?</h2>
        <p className="text-lg text-gray-200 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
          We're so glad you're engaging with God's Word. Subscribe for updates on new sermons or consider joining us in person this Sunday.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            Subscribe for Updates
          </button>
          <button onClick={() => onNavigate('services')} className="w-full md:w-auto bg-transparent border-2 border-white text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-church-blue transition-all duration-300 transform hover:scale-105">
            Visit Us In Person
          </button>
        </div>
      </div>
    </section>
  );
};

export default SermonsCTA;