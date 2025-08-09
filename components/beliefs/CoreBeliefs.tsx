
import React, { useEffect, useState } from 'react';
import { beliefsData } from '../../data/beliefs.ts';
import { Belief } from '../../types.ts';

const BeliefCard: React.FC<{ belief: Belief, isVisible: boolean }> = ({ belief, isVisible }) => {
    return (
        <div className={`bg-white rounded-xl shadow-xl p-8 flex flex-col text-center items-center transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-church-light-gold text-church-blue rounded-full p-5 mb-5">
                <belief.Icon className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-serif text-church-dark font-bold mb-3">{belief.title}</h3>
            <p className="text-slate-600 font-sans leading-relaxed flex-grow">{belief.description}</p>
        </div>
    );
};

const CoreBeliefs: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger animation shortly after component mounts
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Core Beliefs</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {beliefsData.map((belief, index) => (
                        <div key={index} style={{transitionDelay: `${index * 100}ms`}}>
                             <BeliefCard belief={belief} isVisible={visible} />
                        </div>
                    ))}
                     {/* Adding an empty div to balance the last row if there are 7 items */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
};

export default CoreBeliefs;
