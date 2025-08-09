import React, { useState } from 'react';
import { User, DashboardView, Page } from '../types.ts';
import UserDashboardLayout from '../components/dashboard/UserDashboardLayout.tsx';

// Import all the new dashboard views
import WelcomeView from '../components/dashboard/views/WelcomeView.tsx';
import ProfileView from '../components/dashboard/views/ProfileView.tsx';
import BookmarksView from '../components/dashboard/views/BookmarksView.tsx';
import MyEventsView from '../components/dashboard/views/MyEventsView.tsx';
import DonationsView from '../components/dashboard/views/DonationsView.tsx';
import PrayersView from '../components/dashboard/views/PrayersView.tsx';
import AnnouncementsView from '../components/dashboard/views/AnnouncementsView.tsx';
import MessagesView from '../components/dashboard/views/MessagesView.tsx';
import DownloadsView from '../components/dashboard/views/DownloadsView.tsx';
import CertificateView from '../components/dashboard/views/CertificateView.tsx';
import GrowthTrackerView from '../components/dashboard/views/GrowthTrackerView.tsx';
import SecurityView from '../components/dashboard/views/SecurityView.tsx';

interface UserDashboardPageProps {
    currentUser: User;
    onLogout: () => void;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
    onNavigate: (page: Page) => void;
}

const UserDashboardPage: React.FC<UserDashboardPageProps> = ({ currentUser, onLogout, onUpdateUser, onNavigate }) => {
    const [activeView, setActiveView] = useState<DashboardView>('welcome');

    const renderView = () => {
        switch (activeView) {
            case 'welcome':
                return <WelcomeView user={currentUser} onSetView={setActiveView} />;
            case 'profile':
                return <ProfileView user={currentUser} onUpdateUser={onUpdateUser} />;
            case 'bookmarks':
                return <BookmarksView user={currentUser} onUpdateUser={onUpdateUser} />;
            case 'events':
                return <MyEventsView user={currentUser} onUpdateUser={onUpdateUser} />;
            case 'donations':
                return <DonationsView user={currentUser} onUpdateUser={onUpdateUser} onNavigate={onNavigate} />;
            case 'prayers':
                return <PrayersView user={currentUser} onUpdateUser={onUpdateUser} />;
            case 'announcements':
                return <AnnouncementsView />;
            case 'inbox':
                return <MessagesView user={currentUser} onUpdateUser={onUpdateUser} />;
            case 'downloads':
                return <DownloadsView />;
            case 'certificate':
                return <CertificateView user={currentUser} />;
            case 'growth':
                return <GrowthTrackerView user={currentUser} />;
            case 'security':
                return <SecurityView />;
            default:
                return <WelcomeView user={currentUser} onSetView={setActiveView} />;
        }
    };

    return (
        <UserDashboardLayout
            user={currentUser}
            activeView={activeView}
            onSetView={setActiveView}
            onLogout={onLogout}
        >
            {renderView()}
        </UserDashboardLayout>
    );
};

export default UserDashboardPage;