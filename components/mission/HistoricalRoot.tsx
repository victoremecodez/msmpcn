
import React from 'react';

const HistoricalRoot: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Rooted in a Legacy of Service</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            <div className="space-y-4 text-lg text-slate-700 font-sans leading-relaxed">
                <p>
                    Our mission is deeply inspired by the life of Mary Slessor, the Scottish missionary whose name our cathedral proudly bears. She was a pioneer of faith who devoted her life to transforming lives in Africa through the Gospel.
                </p>
                <p>
                    Her unwavering commitment to service, compassion, and justice continues to fuel our passion. We follow in her footsteps, striving to be a modern-day testament to her legacy by bringing hope and spiritual renewal to Port Harcourt and beyond.
                </p>
            </div>
          </div>
           <div className="lg:col-span-2 order-first lg:order-last">
            <img 
              src="https://picsum.photos/seed/mary-slessor-legacy/600/700" 
              alt="Artistic depiction of Mary Slessor's missionary work" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[6/7]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalRoot;
