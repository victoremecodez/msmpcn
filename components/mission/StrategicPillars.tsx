
import React from 'react';
import { pillarsData } from '../../data/mission.ts';
import { StrategicPillar } from '../../types.ts';

const PillarCard: React.FC<{ pillar: StrategicPillar }> = ({ pillar }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col text-center items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-church-light-gold text-church-blue rounded-full p-5 mb-5">
                <pillar.Icon className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-serif text-church-dark font-bold mb-3">{pillar.title}</h3>
            <p className="text-slate-600 font-sans leading-relaxed flex-grow">{pillar.description}</p>
        </div>
    );
};

const StrategicPillars: React.FC = () => {
    return (
        <section className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Strategic Pillars</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                    <p className="max-w-2xl mx-auto text-lg text-slate-700 mt-4 font-sans leading-relaxed">
                        These five pillars guide our ministry and shape our activities as we live out our mission.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pillarsData.map((pillar, index) => (
                         <PillarCard key={index} pillar={pillar} />
                    ))}
                    {/* Empty divs for layout balancing on large screens if needed */}
                    <div className="hidden lg:block md:hidden"></div>
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
};

export default StrategicPillars;
