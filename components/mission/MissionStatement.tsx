
import React from 'react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-20 bg-church-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            <p className="text-xl text-slate-700 font-sans leading-relaxed">
              To glorify God by faithfully proclaiming the Gospel of Jesus Christ, making disciples, nurturing believers, and reaching communities with love, hope, and truth.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl h-80 flex items-center justify-center p-8 text-center bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/scripture/600/400')"}}>
              <div className="absolute inset-0 bg-church-blue opacity-60"></div>
              <div className="relative text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                  <blockquote className="text-2xl font-serif italic">
                      “Go into all the world and preach the gospel to all creation.”
                  </blockquote>
                  <cite className="block mt-4 text-lg font-sans font-semibold text-church-gold tracking-wide">Mark 16:15</cite>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
