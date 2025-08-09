

import React from 'react';
import { Ministry } from '../types.ts';
import { PeopleIcon, WomanIcon, YouthIcon, GirlIcon } from './icons.tsx';
import { Page } from '../types.ts';

interface MinistriesProps {
  onNavigate: (page: Page) => void;
}

const ministriesData: Ministry[] = [
  { name: "Men's Christian Association", acronym: 'MCA', description: 'Fostering brotherhood and spiritual leadership among men.', icon: <PeopleIcon className="h-12 w-12 text-church-blue" /> },
  { name: "Women's Guild", acronym: 'WG', description: 'Empowering women in faith, family, and community service.', icon: <WomanIcon className="h-12 w-12 text-church-blue" /> },
  { name: "Presbyterian Young People's Association", acronym: 'PYPAN', description: 'Nurturing the next generation of Christian leaders.', icon: <YouthIcon className="h-12 w-12 text-church-blue" /> },
  { name: 'Christian Girls in Training', acronym: 'CGIT', description: 'Guiding young girls in their spiritual and personal growth.', icon: <GirlIcon className="h-12 w-12 text-church-blue" /> },
];

const MinistryCard: React.FC<{ ministry: Ministry; onNavigate: (page: Page) => void; }> = ({ ministry, onNavigate }) => (
    <div className="bg-white rounded-xl shadow-xl p-8 text-center flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="bg-church-light-gold rounded-full p-4 mb-4">
            {ministry.icon}
        </div>
        <h3 className="text-xl font-serif text-church-dark font-bold mb-2">{ministry.name} ({ministry.acronym})</h3>
        <p className="text-slate-700 font-sans mb-4 flex-grow">{ministry.description}</p>
        <button onClick={() => onNavigate('ministries')} className="mt-auto bg-church-gold text-church-blue font-sans font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-300">
            Explore
        </button>
    </div>
);

const Ministries: React.FC<MinistriesProps> = ({ onNavigate }) => {
  return (
    <section id="ministries" className="py-20 bg-church-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Ministries</h2>
          <div className="w-20 h-1 bg-church-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-700 mt-4 font-sans leading-relaxed">
            Find your place and grow with us. We have a ministry for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministriesData.map((ministry) => (
            <MinistryCard key={ministry.name} ministry={ministry} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;