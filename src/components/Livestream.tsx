

import React from 'react';
import { Page } from '../types.ts';

interface LivestreamProps {
    onNavigate: (page: Page) => void;
}

const Livestream: React.FC<LivestreamProps> = ({ onNavigate }) => {
  return (
    <section id="livestream" className="py-20 bg-church-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Watch Our Service Live</h2>
        <p className="text-lg text-gray-200 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
          Can't join us in person? Worship with our church family online, wherever you are.
        </p>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video bg-black mb-8">
            {/* Placeholder for livestream embed */}
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-4 text-gray-400">Livestream is currently offline.</p>
                </div>
            </div>
        </div>
        <button onClick={() => onNavigate('livestream')} className="bg-church-gold text-church-blue font-sans font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
          Watch Live
        </button>
      </div>
    </section>
  );
};

export default Livestream;