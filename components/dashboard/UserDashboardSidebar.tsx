import React, { useState } from 'react';
import { User, DashboardView } from '../../types.ts';
import {
    HomeIcon,
    ProfileIcon,
    BookmarkIcon,
    EventsIcon,
    DonationsIcon,
    PrayingHandsIcon,
    AnnouncementsIcon,
    MailIcon,
    DownloadIcon,
    CertificateIcon,
    GrowthIcon,
    SecurityIcon,
    LogoutIcon
} from '../icons.tsx';

interface UserDashboardSidebarProps {
    user: User;
    activeView: DashboardView;
    onSetView: (view: DashboardView) => void;
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
                        ? 'bg-church-blue/10 text-church-blue font-bold'
                        : 'text-slate-600 hover:bg-church-blue/5 hover:text-church-blue'
                }`}
            >
                {icon}
                <span className="ml-3 font-medium text-sm">{label}</span>
            </a>
        </li>
    );
};

const UserDashboardSidebar: React.FC<UserDashboardSidebarProps> = ({ user, activeView, onSetView, onLogout }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (view: DashboardView) => {
        onSetView(view);
        setMobileMenuOpen(false);
    }
    
    const navItems: { view: DashboardView, label: string, icon: React.ReactNode }[] = [
        { view: 'welcome', label: 'Dashboard', icon: <HomeIcon className="h-5 w-5" /> },
        { view: 'profile', label: 'My Profile', icon: <ProfileIcon className="h-5 w-5" /> },
        { view: 'bookmarks', label: 'My Bookmarks', icon: <BookmarkIcon className="h-5 w-5" /> },
        { view: 'events', label: 'My Events', icon: <EventsIcon className="h-5 w-5" /> },
        { view: 'donations', label: 'My Donations', icon: <DonationsIcon className="h-5 w-5" /> },
        { view: 'prayers', label: 'My Prayers', icon: <PrayingHandsIcon className="h-5 w-5" /> },
        { view: 'announcements', label: 'Announcements', icon: <AnnouncementsIcon className="h-5 w-5" /> },
        { view: 'inbox', label: 'Inbox', icon: <MailIcon className="h-5 w-5" /> },
        { view: 'downloads', label: 'Downloads', icon: <DownloadIcon className="h-5 w-5" /> },
        { view: 'certificate', label: 'Certificate', icon: <CertificateIcon className="h-5 w-5" /> },
        { view: 'growth', label: 'Spiritual Growth', icon: <GrowthIcon className="h-5 w-5" /> },
        { view: 'security', label: 'Security', icon: <SecurityIcon className="h-5 w-5" /> },
    ];
    
    const SidebarContent = () => (
         <>
            <div className="flex items-center py-4 px-2 border-b border-gray-200">
                <img src={user.profile.profilePictureUrl || 'https://picsum.photos/seed/default-avatar/100'} alt="User" className="h-12 w-12 rounded-full object-cover"/>
                <div className="ml-3 overflow-hidden">
                    <p className="font-bold text-base text-church-dark truncate">{user.name}</p>
                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
                </div>
            </div>
            <nav className="mt-4 flex-1 overflow-y-auto">
                <ul className="space-y-1.5">
                    {navItems.map(item => (
                         <NavItem
                            key={item.view}
                            icon={item.icon}
                            label={item.label}
                            isActive={activeView === item.view}
                            onClick={() => handleNavClick(item.view)}
                        />
                    ))}
                </ul>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
                 <ul className="space-y-2">
                     <li>
                        <a
                            onClick={onLogout}
                            className="flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 text-slate-600 hover:bg-red-50 hover:text-red-600"
                        >
                            <LogoutIcon className="h-5 w-5" />
                            <span className="ml-3 font-medium text-sm">Logout</span>
                        </a>
                    </li>
                 </ul>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-md p-4 flex justify-between items-center">
                 <div className="font-serif font-bold text-church-blue text-lg">My Dashboard</div>
                 <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-church-dark focus:outline-none z-50 relative h-6 w-6" aria-label="Toggle menu">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                </button>
            </header>

            {/* Mobile Sidebar (Drawer) */}
            <div className={`lg:hidden fixed inset-0 z-30 bg-white transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col font-sans p-4 pt-20`}>
                <SidebarContent />
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed top-0 left-0 w-64 h-full bg-white text-slate-800 flex-shrink-0 p-4 flex-col font-sans border-r border-gray-200">
               <SidebarContent />
            </aside>
        </>
    );
};

export default UserDashboardSidebar;
