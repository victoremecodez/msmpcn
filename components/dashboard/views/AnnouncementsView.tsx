import React from 'react';
import { announcementsData } from '../../../data/dashboard.ts';
import { AnnouncementsIcon } from '../../icons.tsx';

const AnnouncementsView: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-serif text-church-blue font-bold mb-6">Church Announcements</h2>
            
            {announcementsData.length > 0 ? (
                 <div className="space-y-6">
                    {announcementsData.map(ann => (
                        <div key={ann.id} className="relative pl-8">
                            <div className="absolute left-0 top-1 flex items-center justify-center bg-church-light-gold h-6 w-6 rounded-full">
                                <AnnouncementsIcon className="h-4 w-4 text-church-blue" />
                            </div>
                            <p className="text-xs font-semibold text-slate-500 font-sans">{new Date(ann.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <h3 className="font-serif font-bold text-lg text-church-dark">{ann.title}</h3>
                            <p className="font-sans text-slate-700">{ann.content}</p>
                        </div>
                    ))}
                </div>
            ) : (
                 <div className="text-center py-16">
                    <AnnouncementsIcon className="h-16 w-16 mx-auto text-gray-300" />
                    <h3 className="mt-4 text-xl font-serif font-semibold text-church-dark">No Announcements Right Now</h3>
                    <p className="mt-2 text-slate-600 font-sans">Check back later for updates from the church.</p>
                </div>
            )}
        </div>
    );
};

export default AnnouncementsView;
