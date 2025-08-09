
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer.tsx';
import Navbar from './components/common/Navbar.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import SermonsPage from './pages/SermonsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ServiceTimesPage from './pages/ServiceTimesPage.tsx';
import BeliefsPage from './pages/BeliefsPage.tsx';
import MissionVisionPage from './pages/MissionVisionPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import AdminPage from './pages/AdminPage.tsx';
import UserDashboardPage from './pages/UserDashboardPage.tsx';
import TestimonialsAndPrayerPage from './pages/TestimonialsAndPrayerPage.tsx';
import AdminLoginPage from './pages/AdminLoginPage.tsx';
import VerificationPage from './pages/VerificationPage.tsx';
import DonationPage from './pages/DonationPage.tsx';
import VolunteerPage from './pages/VolunteerPage.tsx';
import MinistriesPage from './pages/MinistriesPage.tsx';
import EventsPage from './pages/EventsPage.tsx';
import LivestreamPage from './pages/LivestreamPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import WhatIsChristianityPage from './pages/WhatIsChristianityPage.tsx';
import FaqPage from './pages/FaqPage.tsx';
import ProfileSetupPage from './pages/ProfileSetupPage.tsx';
import { User, UserProfile, Page } from './types.ts';
import { initialDashboardData } from './data/dashboard.ts';

export type AdminView = 'dashboard' | 'content' | 'sermons' | 'events' | 'settings';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pendingUser, setPendingUser] = useState<User | null>(null);
  const [adminView, setAdminView] = useState<AdminView>('dashboard');
  const [sermonFilter, setSermonFilter] = useState<string | null>(null);

  useEffect(() => {
    // Check for persisted user state
    try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            // Ensure user object has the new structure
            if (!user.profile) {
                user.profile = {};
            }
            setCurrentUser(user);
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('currentUser');
    }
  }, []);
  
  const updateUser = (updatedUserData: Partial<User>) => {
      setCurrentUser(prevUser => {
          if (!prevUser) return null;
          const newUser = { ...prevUser, ...updatedUserData };
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          return newUser;
      });
  };

  const navigate = (page: Page) => {
    if (page === 'admin' && currentUser?.role !== 'admin') {
      setCurrentPage('admin-login');
    } else if ((page === 'user-dashboard' || page === 'profile-setup') && !currentUser && !pendingUser) {
      setCurrentPage('login');
    }
    else {
      setCurrentPage(page);
    }
    
    if (page !== 'admin') {
      setAdminView('dashboard');
    }
    if (page !== 'sermons') {
        setSermonFilter(null);
    }
    window.scrollTo(0, 0);
  };
  
  const handleToggleBookmark = (sermonTitle: string) => {
    if (!currentUser) {
        navigate('login');
        return;
    }
    const isBookmarked = currentUser.bookmarkedSermons.includes(sermonTitle);
    const newBookmarks = isBookmarked
        ? currentUser.bookmarkedSermons.filter(t => t !== sermonTitle)
        : [...currentUser.bookmarkedSermons, sermonTitle];
    updateUser({ bookmarkedSermons: newBookmarks });
  };


  const handleNavigateToSermons = (series?: string) => {
      if (series) {
          setSermonFilter(series);
      }
      navigate('sermons');
  }
  
  const handleLogin = (user: User) => {
    const fullUser = {
        ...initialDashboardData,
        ...user,
    };
    localStorage.setItem('currentUser', JSON.stringify(fullUser));
    setCurrentUser(fullUser);
    
    // If profile is not set up, go to setup page, otherwise dashboard
    if (!fullUser.profile.birthday || !fullUser.profile.phone) {
        navigate('profile-setup');
    } else {
        navigate('user-dashboard');
    }
  };

  const handleAdminLogin = (user: User) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
    if (user.role === 'admin') {
      navigate('admin');
    }
  };

  const handleSignup = (user: User) => {
    setPendingUser(user);
    navigate('verification');
  };

  const handleVerificationComplete = () => {
    if (pendingUser) {
        const newUser = {
            ...initialDashboardData,
            ...pendingUser,
        };
        setCurrentUser(newUser);
        setPendingUser(null);
        navigate('profile-setup'); // Go to profile setup instead of dashboard
    } else {
        navigate('login');
    }
  };
  
  const handleProfileSetupComplete = (profileData: UserProfile) => {
      if (currentUser) {
          const updatedUser = {
              ...currentUser,
              profile: { ...currentUser.profile, ...profileData },
          };
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          setCurrentUser(updatedUser);
          navigate('user-dashboard');
      }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('home');
  };

  const renderPage = () => {
    switch(currentPage) {
        case 'home': return <HomePage onNavigate={navigate} currentUser={currentUser} onToggleBookmark={handleToggleBookmark} />;
        case 'about': return <AboutPage onNavigate={navigate} />;
        case 'mission': return <MissionVisionPage onNavigate={navigate} />;
        case 'sermons': return <SermonsPage onNavigate={navigate} onNavigateToSermons={handleNavigateToSermons} initialFilter={sermonFilter} currentUser={currentUser} onToggleBookmark={handleToggleBookmark} />;
        case 'contact': return <ContactPage onNavigate={navigate} />;
        case 'services': return <ServiceTimesPage onNavigate={navigate} />;
        case 'beliefs': return <BeliefsPage onNavigate={navigate} />;
        case 'testimonials': return <TestimonialsAndPrayerPage onNavigate={navigate} />;
        case 'login': return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
        case 'signup': return <SignupPage onSignup={handleSignup} onNavigate={navigate} />;
        case 'admin-login': return <AdminLoginPage onLogin={handleAdminLogin} onNavigate={navigate} />;
        case 'verification': return <VerificationPage userEmail={pendingUser?.email || ''} onVerify={handleVerificationComplete} onNavigate={navigate} />;
        case 'profile-setup': return currentUser ? <ProfileSetupPage currentUser={currentUser} onSetupComplete={handleProfileSetupComplete} /> : <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
        case 'user-dashboard': return currentUser ? <UserDashboardPage currentUser={currentUser} onLogout={handleLogout} onUpdateUser={updateUser} onNavigate={navigate} /> : <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
        case 'admin': return currentUser?.role === 'admin' ? <AdminPage currentView={adminView} onSetView={setAdminView} onLogout={handleLogout} /> : <HomePage onNavigate={navigate} currentUser={currentUser} onToggleBookmark={handleToggleBookmark} />;
        
        case 'donation': return <DonationPage onNavigate={navigate} />;
        case 'volunteer': return <VolunteerPage onNavigate={navigate} />;
        case 'ministries': return <MinistriesPage onNavigate={navigate} />;
        case 'events': return <EventsPage onNavigate={navigate} />;
        case 'livestream': return <LivestreamPage onNavigate={navigate} />;
        case 'gallery': return <GalleryPage onNavigate={navigate} />;
        case 'faith-journey': return <WhatIsChristianityPage onNavigate={navigate} />;
        case 'faq': return <FaqPage onNavigate={navigate} />;
        
        default: return <HomePage onNavigate={navigate} currentUser={currentUser} onToggleBookmark={handleToggleBookmark} />;
    }
  }
  
  const authPages: Page[] = ['login', 'signup', 'admin-login', 'verification', 'profile-setup'];
  const fullScreenPages: Page[] = ['admin', 'user-dashboard'];

  const showNavbar = !authPages.includes(currentPage) && !fullScreenPages.includes(currentPage);
  const showFooter = !authPages.includes(currentPage) && !fullScreenPages.includes(currentPage);

  const renderAppContent = () => (
    <>
      {showNavbar && <Navbar onNavigate={navigate} currentPage={currentPage} currentUser={currentUser} onLogout={handleLogout} />}
      <main className={showNavbar ? 'pt-20' : ''}>
        {renderPage()}
      </main>
      {showFooter && <Footer onNavigate={navigate} />}
    </>
  );

  if (fullScreenPages.includes(currentPage)) {
    return renderPage();
  }

  return (
    <div className="bg-white font-sans text-church-dark">
      {renderAppContent()}
    </div>
  );
};

export default App;
