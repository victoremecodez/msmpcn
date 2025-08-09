
import React, { useState } from 'react';
import TestimonialForm from './TestimonialForm.tsx';
import PrayerRequestForm from './PrayerRequestForm.tsx';
import { UserSubmission } from '../../types.ts';

type ActiveTab = 'testimonial' | 'prayer';

interface SubmissionTabsProps {
    onAddSubmission: (submission: Omit<UserSubmission, 'id' | 'date' | 'likes' | 'comments' | 'isApproved'>) => void;
}

const SubmissionTabs: React.FC<SubmissionTabsProps> = ({ onAddSubmission }) => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('testimonial');

    const handleTestimonialSubmit = (author: string, content: string, imageUrl?: string, videoUrl?: string) => {
        onAddSubmission({ type: 'testimonial', author, content, imageUrl, videoUrl });
    };

    const handlePrayerSubmit = (author: string, content: string) => {
        onAddSubmission({ type: 'prayer', author, content });
    };

    const getTabClass = (tabName: ActiveTab) => {
        return `py-3 px-6 font-sans font-semibold rounded-t-lg cursor-pointer transition-all duration-300 ${
            activeTab === tabName 
            ? 'bg-white text-church-blue shadow-md' 
            : 'bg-church-blue/80 text-white hover:bg-church-blue'
        }`;
    }

    return (
        <section className="py-16 bg-church-light-gold">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="flex justify-center space-x-2">
                    <button onClick={() => setActiveTab('testimonial')} className={getTabClass('testimonial')}>
                        Share Your Testimony
                    </button>
                    <button onClick={() => setActiveTab('prayer')} className={getTabClass('prayer')}>
                        Submit a Prayer Request
                    </button>
                </div>
                <div className="bg-white p-8 rounded-b-xl rounded-tr-xl shadow-xl">
                    {activeTab === 'testimonial' ? (
                        <TestimonialForm onSubmit={handleTestimonialSubmit} />
                    ) : (
                        <PrayerRequestForm onSubmit={handlePrayerSubmit} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default SubmissionTabs;
