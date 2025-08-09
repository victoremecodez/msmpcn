
import React from 'react';

const PresbyterianHeritage: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img 
              src="https://picsum.photos/seed/slessor-heritage/600/800" 
              alt="Mary Slessor" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[3/4]"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Presbyterian Heritage</h2>
            <div className="w-20 h-1 bg-church-gold mb-6"></div>
            <div className="space-y-4 text-lg text-slate-700 font-sans leading-relaxed">
                <p>
                    We are a proud member of the Presbyterian Church, a tradition rooted in the Protestant Reformation and shaped by the theological insights of leaders like John Calvin. Our Reformed theology emphasizes the sovereignty of God in all things, the authority of the Scriptures, and the necessity of grace through faith in Jesus Christ.
                </p>
                <p>
                    Our cathedral's name honors the incredible legacy of Mary Slessor, a Scottish missionary whose pioneering work in Nigeria transformed communities. Her courage, compassion, and commitment to sharing the Gospel inspire our mission to this day. We strive to embody her spirit of selfless service as we continue to be a beacon of hope and faith in Port Harcourt and beyond.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresbyterianHeritage;
