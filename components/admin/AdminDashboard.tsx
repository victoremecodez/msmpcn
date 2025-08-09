

import React from 'react';
import { Page } from '../../types.ts';

interface AdminDashboardProps {
  onNavigate: (page: Page) => void;
}

const ManagementCard: React.FC<{title: string, description: string, buttonText: string, onClick: () => void}> = ({ title, description, buttonText, onClick }) => (
    <div className="bg-church-light-gold p-6 rounded-xl shadow-lg border border-church-gold/20 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-church-dark mb-2">{title}</h3>
        <p className="text-slate-700 font-sans mb-4 flex-grow">{description}</p>
        <button 
            onClick={onClick}
            className="mt-auto self-start bg-church-blue text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
            {buttonText}
        </button>
    </div>
);


const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-serif text-church-blue font-bold mb-6">Dashboard</h2>
            <p className="text-slate-700 font-sans mb-8">
                Welcome, Admin. From here you can manage the church website's content. Select a section below to begin editing.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ManagementCard 
                    title="Mission & Vision Page" 
                    description="Update the mission statement, vision, strategic pillars, and historical context." 
                    buttonText="Edit Content"
                    onClick={() => { /* Placeholder for future functionality */ alert('Edit Mission & Vision page coming soon!'); }}
                />
                <ManagementCard 
                    title="Sermons" 
                    description="Upload new sermons, manage series, and update featured messages." 
                    buttonText="Manage Sermons"
                    onClick={() => onNavigate('sermons')}
                />
                <ManagementCard 
                    title="Leadership & Staff" 
                    description="Add new leaders, update bios, and change photos for the leadership team." 
                    buttonText="Edit Leadership"
                    onClick={() => onNavigate('about')}
                />
                 <ManagementCard 
                    title="Service Times" 
                    description="Modify weekly service times, locations, and descriptions." 
                    buttonText="Update Services"
                    onClick={() => onNavigate('services')}
                />
                  <ManagementCard 
                    title="Events Calendar" 
                    description="Post new church events, update details, and manage the calendar." 
                    buttonText="Manage Events"
                    onClick={() => { /* Placeholder for future functionality */ alert('Events management coming soon!'); }}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
