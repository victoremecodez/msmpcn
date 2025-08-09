
import React from 'react';

const ChurchOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">A Christ-Centered Community</h2>
        <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 font-sans leading-relaxed">
          Mary Slessor Memorial Presbyterian Cathedral is a Christ-centered community committed to spreading the Gospel across Africa. As part of the Presbyterian Church family, we uphold strong Christian values, meaningful worship, and compassionate service.
        </p>
      </div>
    </section>
  );
};

export default ChurchOverview;