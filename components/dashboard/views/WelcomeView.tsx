import React from 'react';
import { User, DashboardView } from '../../../types.ts';
import { EventsIcon, MailIcon, BookmarkIcon, DonationsIcon } from '../../icons.tsx';

interface WelcomeViewProps {
    user: User;
    onSetView: (view: DashboardView) => void;
}

const StatCard: React.FC<{ icon: React.ReactNode, label: string, value: string | number, onClick: () => void }> = ({ icon, label, value, onClick }) => (
    <div onClick={onClick} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-church-blue mb-2">{icon}</div>
        <p className="text-3xl font-serif font-bold text-church-dark">{value}</p>
        <p className="text-slate-500 font-sans text-sm font-medium uppercase tracking-wider mt-1">{label}</p>
    </div>
);

const QuickLink: React.FC<{ label: string, onClick: () => void }> = ({ label, onClick }) => (
    <button onClick={onClick} className="text-left w-full p-4 bg-gray-50 rounded-lg hover:bg-church-blue/10 hover:text-church-blue transition-colors duration-200 font-semibold text-slate-700">
        {label}
    </button>
);

const WelcomeView: React.FC<WelcomeViewProps> = ({ user, onSetView }) => {
    const unreadMessages = user.inbox ? user.inbox.filter(m => !m.isRead).length : 0;
    const nextEventDate = 'August 15, 2024'; // This would be dynamic in a real app

    return (
        <div>
            <div className="bg-gradient-to-r from-church-blue to-church-blue-light p-8 rounded-xl shadow-lg text-white mb-8">
                <h1 className="text-3xl md:text-4xl font-serif font-bold">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="mt-2 text-lg text-blue-200 font-sans">We're glad to see you. Here's a quick look at your dashboard.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    icon={<EventsIcon className="h-10 w-10" />}
                    label="Upcoming Events"
                    value={user.eventSignups.length}
                    onClick={() => onSetView('events')}
                />
                <StatCard 
                    icon={<MailIcon className="h-10 w-10" />}
                    label="New Messages"
                    value={unreadMessages}
                    onClick={() => onSetView('inbox')}
                />
                <StatCard 
                    icon={<BookmarkIcon className="h-10 w-10" />}
                    label="Bookmarked Sermons"
                    value={user.bookmarkedSermons.length}
                    onClick={() => onSetView('bookmarks')}
                />
                 <StatCard 
                    icon={<DonationsIcon className="h-10 w-10" />}
                    label="Total Donations"
                    value={user.donations.length}
                    onClick={() => onSetView('donations')}
                />
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Announcements */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-serif text-church-dark font-bold mb-4">Latest Announcements</h3>
                    <ul className="divide-y divide-gray-200">
                        <li className="py-3 font-sans text-slate-700">Annual Retreat Registration Now Open!</li>
                        <li className="py-3 font-sans text-slate-700">New sermon series "Living by Faith" starts this Sunday.</li>
                        <li className="py-3 font-sans text-slate-700">Volunteer call for community outreach on Sept 7th.</li>
                    </ul>
                     <button onClick={() => onSetView('announcements')} className="text-sm font-sans text-church-blue hover:underline mt-4">View all announcements</button>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-serif text-church-dark font-bold mb-4">Quick Links</h3>
                    <div className="space-y-3">
                        <QuickLink label="Update My Profile" onClick={() => onSetView('profile')} />
                        <QuickLink label="Make a Donation" onClick={() => onSetView('donations')} />
                        <QuickLink label="View Membership Certificate" onClick={() => onSetView('certificate')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeView;
