import React, { useState } from 'react';
import { User, UserSubmission } from '../../../types.ts';
import { PrayingHandsIcon, MailIcon } from '../../icons.tsx';

interface PrayersViewProps {
    user: User;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
}

const PrayersView: React.FC<PrayersViewProps> = ({ user, onUpdateUser }) => {
    const [content, setContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    
    const usersPrayerRequests = user.prayerRequests || [];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        const newRequest: UserSubmission = {
            id: `prayer_${Date.now()}`,
            type: 'prayer',
            author: isAnonymous ? 'Anonymous' : user.name,
            content: content.trim(),
            date: new Date().toISOString(),
            likes: 0,
            comments: [],
            isApproved: false, // Needs admin approval
            adminFeedback: "Our pastoral team is praying for you.", // Mock feedback
        };

        const updatedRequests = [newRequest, ...usersPrayerRequests];
        onUpdateUser({ prayerRequests: updatedRequests });
        
        setContent('');
        setIsAnonymous(false);
    };

    return (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-serif text-church-blue font-bold mb-6">My Prayer Requests</h2>
                {usersPrayerRequests.length > 0 ? (
                    <div className="space-y-4">
                        {usersPrayerRequests.map(req => (
                            <div key={req.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-church-blue">
                                <p className="font-sans text-slate-700">{req.content}</p>
                                <p className="text-xs text-slate-500 mt-2">{new Date(req.date).toLocaleDateString()} &bull; {req.isApproved ? <span className="text-green-600 font-semibold">Approved</span> : <span className="text-yellow-600 font-semibold">Pending Review</span>}</p>
                                {req.adminFeedback && (
                                    <div className="mt-3 pt-3 border-t border-gray-200 flex items-start space-x-2">
                                        <MailIcon className="h-5 w-5 text-church-gold flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-church-dark">A Note from Pastoral Team:</p>
                                            <p className="text-sm font-sans text-slate-600 italic">"{req.adminFeedback}"</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <PrayingHandsIcon className="h-16 w-16 mx-auto text-gray-300" />
                        <h3 className="mt-4 text-xl font-serif font-semibold text-church-dark">No Prayer Requests Found</h3>
                        <p className="mt-2 text-slate-600 font-sans">Submit a prayer request using the form.</p>
                    </div>
                )}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-serif font-bold text-church-dark mb-4 text-center">Submit a New Request</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label htmlFor="prayer-content" className="block text-sm font-sans font-medium text-slate-700 mb-1">Your Prayer Request</label>
                        <textarea
                            id="prayer-content"
                            rows={5}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                            placeholder="How can we pray for you?"
                            required
                        ></textarea>
                    </div>
                     <div className="flex items-center">
                        <input
                            id="anonymous"
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={(e) => setIsAnonymous(e.target.checked)}
                            className="h-4 w-4 text-church-blue focus:ring-church-gold border-gray-300 rounded"
                        />
                        <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900 font-sans">
                            Submit anonymously
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-church-blue text-white font-sans font-semibold py-2 px-4 rounded-full hover:bg-church-blue-light transition-colors">
                        Submit Prayer Request
                    </button>
                    <p className="text-xs text-center text-slate-500 font-sans">
                        Your request will be sent to our pastoral team for prayer and review.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PrayersView;
