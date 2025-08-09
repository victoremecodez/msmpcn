
import React from 'react';

const TestimonialsWallHeader: React.FC = () => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-white font-serif bg-church-blue">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/community-praise/1920/1080')" }}>
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Testimonials & Prayer Wall
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light mt-2 tracking-wide">
          Share God's goodness and lift one another in prayer.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsWallHeader;
