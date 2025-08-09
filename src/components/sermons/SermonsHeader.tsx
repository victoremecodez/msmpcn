
import React from 'react';

const SermonsHeader: React.FC = () => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-white font-serif bg-church-blue">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/worship/1920/1080')" }}>
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Sermons
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light mt-2 tracking-wide">
          Listen, watch, and grow in your faith
        </p>
      </div>
    </section>
  );
};

export default SermonsHeader;