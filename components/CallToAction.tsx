
import React from 'react';
import { Page } from '../types.ts';

interface CallToActionProps {
  onNavigate: (page: Page) => void;
}


const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Get Involved</h2>
         <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-lg text-slate-700 mb-8 font-sans leading-relaxed">
          Be a part of our mission. Your time, talents, and treasures can make a difference in our community and beyond.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button onClick={() => onNavigate('volunteer')} className="w-full md:w-auto bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
            Volunteer
          </button>
          <button onClick={() => onNavigate('donation')} className="w-full md:w-auto bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
            Donate Now
          </button>
          <button onClick={() => onNavigate('contact')} className="w-full md:w-auto bg-gray-200 text-church-dark font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
