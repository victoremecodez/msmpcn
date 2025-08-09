
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-church-light-gold p-10 rounded-xl shadow-xl text-center">
            <h3 className="text-3xl font-serif text-church-blue font-bold mb-3">Our Mission</h3>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              To glorify God by bringing the Gospel to Africa through worship, teaching, fellowship, and outreach.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-church-light-gold p-10 rounded-xl shadow-xl text-center">
            <h3 className="text-3xl font-serif text-church-blue font-bold mb-3">Our Vision</h3>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              To raise a spiritually vibrant church that transforms lives and communities for Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;