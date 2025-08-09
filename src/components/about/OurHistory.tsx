
import React from 'react';

const OurHistory: React.FC = () => {
  return (
    <section className="py-20 bg-church-gray">
      <div className="container mx-auto px-6">
        {/* Church History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our History</h2>
            <p className="text-slate-700 font-sans mb-4 leading-relaxed">
              Founded with a vision to serve the community of Port Harcourt, our cathedral has grown from humble beginnings into a vibrant spiritual home for many. Through decades of faithful service, we have remained dedicated to the teachings of the Presbyterian faith, fostering a community built on love, worship, and outreach.
            </p>
            <p className="text-slate-700 font-sans leading-relaxed">
              Our journey has been one of grace, marked by the steadfast support of our congregation and the guidance of the Holy Spirit. We continue to build upon this foundation, looking forward to many more years of service.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/history/600/400" 
              alt="Historic church building" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Mary Slessor's Legacy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
             <img 
              src="https://picsum.photos/seed/slessor/600/400" 
              alt="Portrait of Mary Slessor" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">The Legacy of Mary Slessor</h2>
            <p className="text-slate-700 font-sans mb-4 leading-relaxed">
              Our cathedral is proudly named after Mary Slessor, a Scottish Presbyterian missionary whose impact on Nigeria is immeasurable. A true humanitarian, she defied conventions to spread the gospel, defend the vulnerable, and champion the rights of women and children in the late 19th and early 20th centuries.
            </p>
            <p className="text-slate-700 font-sans leading-relaxed">
              Her legacy of courage, compassion, and selfless ministry inspires our mission. We strive to embody her spirit by serving our community with the same unwavering dedication and love for all of God's people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;