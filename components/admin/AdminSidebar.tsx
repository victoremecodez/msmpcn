

import React from 'react';
import { AdminView } from '../../App.tsx';
import { DashboardIcon, ContentIcon, SermonsIcon, EventsIcon, SettingsIcon, LogoutIcon } from '../icons.tsx';

interface AdminSidebarProps {
    activeView: AdminView;
    onSetView: (view: AdminView) => void;
    onLogout: () => void;
}

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
    return (
        <li>
            <a
                onClick={onClick}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                    isActive
                        ? 'bg-church-blue text-white shadow-lg'
                        : 'text-gray-300 hover:bg-church-dark/50 hover:text-white'
                }`}
            >
                {icon}
                <span className="ml-3 font-medium">{label}</span>
            </a>
        </li>
    );
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeView, onSetView, onLogout }) => {
    return (
        <aside className="w-64 bg-church-dark text-white flex-shrink-0 p-4 flex flex-col font-sans">
            <div className="text-center py-4 border-b border-gray-600">
                <h1 className="text-xl font-serif font-bold text-church-gold">MSM PC Admin</h1>
                <p className="text-sm text-gray-400">Content Management</p>
            </div>
            <nav className="mt-6 flex-1">
                <ul className="space-y-2">
                    <NavItem
                        icon={<DashboardIcon className="h-6 w-6" />}
                        label="Dashboard"
                        isActive={activeView === 'dashboard'}
                        onClick={() => onSetView('dashboard')}
                    />
                    <NavItem
                        icon={<ContentIcon className="h-6 w-6" />}
                        label="Content"
                        isActive={activeView === 'content'}
                        onClick={() => onSetView('content')}
                    />
                    <NavItem
                        icon={<SermonsIcon className="h-6 w-6" />}
                        label="Sermons"
                        isActive={activeView === 'sermons'}
                        onClick={() => onSetView('sermons')}
                    />
                     <NavItem
                        icon={<EventsIcon className="h-6 w-6" />}
                        label="Events"
                        isActive={activeView === 'events'}
                        onClick={() => onSetView('events')}
                    />
                    <NavItem
                        icon={<SettingsIcon className="h-6 w-6" />}
                        label="Settings"
                        isActive={activeView === 'settings'}
                        onClick={() => onSetView('settings')}
                    />
                </ul>
            </nav>
            <div className="mt-6 pt-4 border-t border-gray-600">
                 <ul className="space-y-2">
                     <li>
                        <a
                            onClick={onLogout}
                            className="flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 text-gray-300 hover:bg-church-dark/50 hover:text-white"
                        >
                            <LogoutIcon className="h-6 w-6" />
                            <span className="ml-3 font-medium">Logout</span>
                        </a>
                    </li>
                 </ul>
                 <div className="text-center text-sm mt-4">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} MSMPC</p>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-church-gold mt-1 inline-block">View Site</a>
                 </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;