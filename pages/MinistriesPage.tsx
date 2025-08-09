
import React from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { Ministry } from '../types.ts';
import { PeopleIcon, WomanIcon, YouthIcon, GirlIcon } from '../components/icons.tsx';

interface MinistriesPageProps {
  onNavigate: (page: Page) => void;
}

const ministriesData: Ministry[] = [
  { name: "Men's Christian Association", acronym: 'MCA', description: 'Fostering brotherhood and spiritual leadership among men through fellowship, study, and service. Open to all men of the church.', icon: <PeopleIcon className="h-12 w-12 text-church-blue" /> },
  { name: "Women's Guild", acronym: 'WG', description: 'Empowering women in faith, family, and community service. We meet regularly for prayer, workshops, and outreach.', icon: <WomanIcon className="h-12 w-12 text-church-blue" /> },
  { name: "Presbyterian Young People's Association", acronym: 'PYPAN', description: 'Nurturing the next generation of Christian leaders through dynamic worship, relevant teaching, and fun activities.', icon: <YouthIcon className="h-12 w-12 text-church-blue" /> },
  { name: 'Christian Girls in Training', acronym: 'CGIT', description: 'Guiding young girls in their spiritual and personal growth, teaching them to be virtuous women of God.', icon: <GirlIcon className="h-12 w-12 text-church-blue" /> },
];


const MinistryCard: React.FC<{ ministry: Ministry; onNavigate: (page: Page) => void }> = ({ ministry, onNavigate }) => (
    <div className="bg-white rounded-xl shadow-xl p-8 text-center flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="bg-church-light-gold rounded-full p-4 mb-4">
            {ministry.icon}
        </div>
        <h3 className="text-2xl font-serif text-church-dark font-bold mb-2">{ministry.name} ({ministry.acronym})</h3>
        <p className="text-slate-700 font-sans mb-6 flex-grow">{ministry.description}</p>
        <button onClick={() => onNavigate('contact')} className="mt-auto bg-church-blue text-white font-sans font-semibold py-2 px-6 rounded-full hover:bg-church-blue-light transition-colors duration-300">
            Contact Leader
        </button>
    </div>
);

const MinistriesPage: React.FC<MinistriesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Our Ministries"
        subtitle="Find your place and grow with us"
        imageUrl="https://picsum.photos/seed/ministries/1920/1080"
      />
      
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">A Place for Everyone</h2>
                 <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-lg text-slate-700 font-sans leading-relaxed">
                    Our ministries are the heart of our community life. They are designed to help you connect with others, grow in your faith, and serve according to your unique gifts. Explore our groups and find where you belong.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {ministriesData.map((ministry) => (
                    <MinistryCard key={ministry.name} ministry={ministry} onNavigate={onNavigate} />
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-church-blue text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Can't Find Your Fit?</h2>
            <p className="text-lg text-gray-200 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
                If you have an idea for a new ministry or small group, we'd love to hear it. Let's build God's kingdom together.
            </p>
            <button onClick={() => onNavigate('contact')} className="bg-church-gold text-church-blue font-sans font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                Suggest a New Group
            </button>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
