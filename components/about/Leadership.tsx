
import React from 'react';
import { Leader } from '../../types.ts';

const leadershipData: Leader[] = [
    { name: "Rev. Dr. Joseph T.", title: "Cathedral Pastor", imageUrl: "https://picsum.photos/seed/pastor1/400/400", bio: "Leading our congregation with wisdom and a heart for God's word." },
    { name: "Pastor Grace E.", title: "Associate Pastor", imageUrl: "https://picsum.photos/seed/pastor2/400/400", bio: "Focused on youth ministry and community outreach initiatives." },
    { name: "Elder Michael O.", title: "Head of Elders", imageUrl: "https://picsum.photos/seed/elder1/400/400", bio: "Providing spiritual oversight and guidance to the church family." },
];

const LeaderCard: React.FC<{ leader: Leader }> = ({ leader }) => (
    <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-4">
            <img src={leader.imageUrl} alt={leader.name} className="rounded-full w-full h-full object-cover shadow-lg" />
        </div>
        <h3 className="text-xl font-serif font-bold text-church-dark">{leader.name}</h3>
        <p className="text-church-gold font-semibold">{leader.title}</p>
        <p className="text-slate-700 font-sans text-sm mt-1">{leader.bio}</p>
    </div>
);

const Leadership: React.FC = () => {
    return (
        <section id="leadership-section" className="py-20 bg-church-gray">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Meet Our Leadership</h2>
                <div className="w-20 h-1 bg-church-gold mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {leadershipData.map(leader => (
                        <LeaderCard key={leader.name} leader={leader} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;