
import React from 'react';
import StatCard from './StatCard.tsx';
import { SermonsIcon, EventsIcon, PeopleIcon, MailIcon } from '../icons.tsx';
import { AdminView } from '../../App.tsx';

interface DashboardHomeProps {
    onSetView: (view: AdminView) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ onSetView }) => {
    return (
        <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
                <h2 className="text-3xl font-serif text-church-blue font-bold">Welcome, Admin of Mary Slessor Cathedral</h2>
                <p className="text-slate-600 font-sans mt-2">Here’s a snapshot of your website's activity. You can manage all content from the sidebar navigation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    icon={<SermonsIcon className="h-8 w-8 text-church-blue" />} 
                    label="Sermons Uploaded" 
                    value="6"
                    details="Manage Sermons"
                    onClick={() => onSetView('sermons')}
                />
                 <StatCard 
                    icon={<EventsIcon className="h-8 w-8 text-green-600" />} 
                    label="Upcoming Events" 
                    value="3"
                    details="View Events"
                    onClick={() => onSetView('events')}
                />
                 <StatCard 
                    icon={<MailIcon className="h-8 w-8 text-yellow-600" />} 
                    label="Prayer Requests" 
                    value="12"
                    details="Review Requests"
                    onClick={() => onSetView('content')}
                />
                 <StatCard 
                    icon={<PeopleIcon className="h-8 w-8 text-purple-600" />} 
                    label="Registered Members" 
                    value="152"
                    details="Manage Users"
                    onClick={() => onSetView('settings')}
                />
            </div>

            {/* Placeholder for recent activity feed */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-serif text-church-dark font-bold mb-4">Recent Activity</h3>
                <ul className="divide-y divide-gray-200">
                    <li className="py-3 font-sans text-slate-700">New sermon "Faith That Moves Mountains" was uploaded.</li>
                    <li className="py-3 font-sans text-slate-700">An event "Annual Retreat 2024" was created.</li>
                    <li className="py-3 font-sans text-slate-700">A new testimonial was approved and published.</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardHome;