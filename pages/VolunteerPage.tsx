
import React, { useState } from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { PeopleIcon, CommunityIcon, WorshipIcon, YouthIcon } from '../components/icons.tsx';

interface VolunteerPageProps {
  onNavigate: (page: Page) => void;
}

const opportunities = [
    { title: "Welcome & Usher Team", description: "Be the first friendly face visitors see. Help greet, guide, and seat our congregation.", Icon: PeopleIcon },
    { title: "Children's Ministry", description: "Invest in the next generation by teaching, assisting, or helping with Sunday school activities.", Icon: YouthIcon },
    { title: "Worship & Tech Team", description: "Use your musical or technical talents to support our worship services (sound, slides, camera).", Icon: WorshipIcon },
    { title: "Community Outreach", description: "Participate in local service projects, food drives, and events that show God's love to our city.", Icon: CommunityIcon },
];

const VolunteerPage: React.FC<VolunteerPageProps> = ({ onNavigate }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', interests: [] as string[] });

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            interests: checked ? [...prev.interests, value] : prev.interests.filter(i => i !== value),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        console.log("Volunteer Form Submitted:", formData);
        setTimeout(() => setStatus('success'), 1000);
    };

    return (
    <div className="bg-white">
        <PageHeader
            title="Volunteer"
            subtitle="Use your gifts to serve God and others"
            imageUrl="https://picsum.photos/seed/volunteer/1920/1080"
        />

        <section className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Be the Hands and Feet of Jesus</h2>
                     <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-lg text-slate-700 font-sans leading-relaxed">
                        Serving is a vital part of our walk with Christ and a powerful way to build community. We have many opportunities for you to get involved, no matter your skills or experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {opportunities.map(op => (
                        <div key={op.title} className="bg-white rounded-xl shadow-lg p-8 flex flex-col text-center items-center transition-transform hover:-translate-y-2 duration-300">
                            <div className="bg-church-light-gold text-church-blue rounded-full p-4 mb-4">
                                <op.Icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-serif text-church-dark font-bold mb-2">{op.title}</h3>
                            <p className="text-slate-600 font-sans text-sm flex-grow">{op.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="volunteer-form" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Ready to Serve?</h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-700 font-sans">
                        Let us know what areas you're interested in, and we'll be in touch to help you get connected.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                             <div className="mx-auto bg-green-100 text-green-700 p-4 rounded-full mb-4 w-max">
                                <PeopleIcon className="h-12 w-12" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-church-dark mb-2">Thank You!</h3>
                            <p className="text-slate-700 font-sans text-lg">We've received your interest form. A ministry leader will contact you soon!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-sans font-medium text-slate-700 mb-1">Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" required />
                                </div>
                                 <div>
                                    <label htmlFor="email" className="block text-sm font-sans font-medium text-slate-700 mb-1">Email Address</label>
                                    <input type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-sans font-medium text-slate-700 mb-2">Areas of Interest (select all that apply)</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {opportunities.map(op => (
                                        <div key={op.title} className="flex items-center">
                                            <input id={op.title} type="checkbox" value={op.title} onChange={handleCheckboxChange} className="h-4 w-4 text-church-blue focus:ring-church-gold border-gray-300 rounded" />
                                            <label htmlFor={op.title} className="ml-3 text-sm font-sans text-slate-700">{op.title}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                             <div className="text-center pt-4">
                                <button type="submit" disabled={status === 'submitting'} className="bg-church-blue text-white font-sans font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-church-blue-light transition-colors duration-300 disabled:bg-blue-300">
                                    {status === 'submitting' ? 'Submitting...' : 'I\'m Ready to Serve'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    </div>
  );
};

export default VolunteerPage;
