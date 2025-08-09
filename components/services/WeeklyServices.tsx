
import React from 'react';
import { serviceDetails } from '../../data/services.ts';

const WeeklyServices: React.FC = () => {
    return (
        <section className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Weekly Gatherings</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {serviceDetails.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-xl p-8 flex flex-col text-center items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="bg-church-light-gold text-church-blue rounded-full p-5 mb-5">
                                <service.Icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-serif text-church-dark font-bold mb-3">{service.name}</h3>
                            <div className="font-sans text-slate-700 space-y-2 mb-4">
                                <p><strong>Time:</strong> {service.time}</p>
                                <p><strong>Location:</strong> {service.location}</p>
                            </div>
                            <p className="text-slate-600 font-sans leading-relaxed flex-grow">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeeklyServices;
