

import React from 'react';
import { Page } from '../types.ts';

interface AboutPreviewProps {
  onNavigate: (page: Page) => void;
}

const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">About Our Church</h2>
        <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 mb-8 font-sans leading-relaxed">
          Mary Slessor Memorial Presbyterian Cathedral is a beacon of faith and community in Port Harcourt. Founded on the principles of the Presbyterian denomination, we are dedicated to spiritual growth, community service, and spreading the Gospel, continuing the legacy of our namesake.
        </p>
        <button 
          onClick={() => onNavigate('about')}
          className="bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
          Learn More About Us
        </button>
      </div>
    </section>
  );
};

export default AboutPreview;
