

import React from 'react';
import { VideoCameraIcon, PlayIcon } from './icons.tsx';
import { Page } from '../types.ts';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white font-serif">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/church/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-church-blue opacity-70"></div>
      <div className="relative z-10 text-center p-4"
        style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Welcome to Mary Slessor Memorial Presbyterian Cathedral
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light mb-8 tracking-wide">
          Bringing the Gospel to Africa
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => onNavigate('services')} className="w-full sm:w-auto flex items-center justify-center bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            <PlayIcon className="h-6 w-6 mr-2"/>
            Join Us This Sunday
          </button>
          <button onClick={() => onNavigate('livestream')} className="w-full sm:w-auto flex items-center justify-center bg-transparent border-2 border-white text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-church-blue transition-all duration-300 transform hover:scale-105">
            <VideoCameraIcon className="h-6 w-6 mr-2"/>
            Watch Livestream
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;