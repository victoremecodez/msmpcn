
import React from 'react';

const Motto: React.FC = () => {
  return (
    <section className="py-16 bg-church-blue">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-church-gold"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
        >
          “Bringing the Gospel to Africa”
        </h2>
      </div>
    </section>
  );
};

export default Motto;
