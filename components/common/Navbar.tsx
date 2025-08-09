
import React, { useState, useEffect } from 'react';
import { Page } from '../../types.ts';
import { User } from '../../types.ts';
import { UserCircleIcon } from '../icons.tsx';

interface NavbarProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
    currentUser: User | null;
    onLogout: () => void;
}

const NavLink: React.FC<{
    onClick: () => void;
    isCurrent: boolean;
    children: React.ReactNode;
}> = ({ onClick, isCurrent, children }) => {
    const baseClasses = "relative cursor-pointer py-2 px-2 transition-colors duration-300 group font-sans font-semibold text-base";
    const activeClasses = "text-church-gold";
    const inactiveClasses = "text-white hover:text-church-gold/80";

    return (
        <a onClick={onClick} className={`${baseClasses} ${isCurrent ? activeClasses : inactiveClasses}`}>
            {children}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-church-gold transform transition-transform duration-300 ease-out ${isCurrent ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
        </a>
    );
};

const MobileNavLink: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
}> = ({ onClick, children }) => {
    return (
        <a onClick={onClick} className="text-3xl font-serif text-white py-4 text-center hover:text-church-gold transition-colors duration-300">
            {children}
        </a>
    );
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, currentUser, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
                setIsMoreMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMenuOpen || isMoreMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isMoreMenuOpen]);

    const handleNav = (page: Page) => {
        onNavigate(page);
        setIsMenuOpen(false);
        setIsMoreMenuOpen(false);
    }
    
    const handleDashboardNav = () => {
        if (currentUser && (!currentUser.profile.birthday || !currentUser.profile.phone)) {
            handleNav('profile-setup');
        } else {
            handleNav('user-dashboard');
        }
    }

    const handleLogoutClick = () => {
        onLogout();
        setIsMenuOpen(false);
        setIsMoreMenuOpen(false);
    }
    
    const mainNavItems: { page: Page, label: string }[] = [
        { page: 'home', label: 'Home'},
        { page: 'about', label: 'About'},
        { page: 'sermons', label: 'Sermons'},
        { page: 'events', label: 'Events'},
        { page: 'gallery', label: 'Gallery'},
        { page: 'contact', label: 'Contact'},
    ];

    const moreNavItems: { page: Page, label: string }[] = [
        { page: 'services', label: 'Service Times'},
        { page: 'ministries', label: 'Ministries'},
        { page: 'testimonials', label: 'Testify & Pray'},
        { page: 'mission', label: 'Mission & Vision'},
        { page: 'beliefs', label: 'Our Beliefs'},
        { page: 'faith-journey', label: 'Start Your Faith Journey'},
        { page: 'volunteer', label: 'Volunteer'},
        { page: 'faq', label: 'FAQ'},
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-church-blue shadow-lg h-20 flex items-center`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="font-serif font-bold text-white text-xl cursor-pointer" onClick={() => handleNav('home')}>
                        <span className="hidden md:inline">Mary Slessor Memorial PC</span>
                        <span className="md:hidden">MSMPC</span>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-6">
                        {mainNavItems.map(item => (
                            <NavLink key={item.page} onClick={() => handleNav(item.page)} isCurrent={currentPage === item.page}>{item.label}</NavLink>
                        ))}
                        <div className="relative">
                            <a onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)} className="relative cursor-pointer py-2 px-1 transition-colors duration-300 group font-sans font-semibold text-base text-white hover:text-church-gold/80">
                                More
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-church-gold transform transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                        </div>
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                         <div className="w-px h-6 bg-white/20"></div>
                        {currentUser ? (
                             <>
                                <a onClick={handleDashboardNav} className="flex items-center space-x-2 cursor-pointer text-white hover:text-church-gold transition-colors duration-300">
                                    <UserCircleIcon className="h-7 w-7"/>
                                    <span className="font-sans font-semibold">Dashboard</span>
                                </a>
                                <button onClick={handleLogoutClick} className="cursor-pointer bg-white/10 text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-white/25 transition-colors duration-300">
                                    Logout
                                </button>
                            </>
                        ) : (
                             <>
                                <a onClick={() => handleNav('login')} className="cursor-pointer text-white hover:bg-white/20 font-sans font-semibold py-2 px-5 rounded-full transition-colors duration-300">
                                    Login
                                </a>
                                <a onClick={() => handleNav('signup')} className="cursor-pointer bg-white/10 text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-white/25 transition-colors duration-300">
                                    Sign Up
                                </a>
                            </>
                        )}
                        <a onClick={() => handleNav('donation')} className="cursor-pointer bg-church-gold text-church-blue font-sans font-semibold py-2 px-5 rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                            Donate
                        </a>
                    </div>


                     <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white focus:outline-none z-[60] relative h-6 w-6" aria-label="Toggle menu">
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                    </button>
                </div>
            </header>
            
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-50 bg-church-blue/95 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                 <nav className="flex flex-col items-center justify-center h-full space-y-2">
                    {[...mainNavItems, ...moreNavItems].map(item => (
                       <MobileNavLink key={`mob-${item.page}`} onClick={() => handleNav(item.page)}>{item.label}</MobileNavLink>
                    ))}
                    <div className="border-t border-white/20 w-1/2 my-4"></div>
                    {currentUser ? (
                        <>
                             <MobileNavLink onClick={handleDashboardNav}>Dashboard</MobileNavLink>
                             <MobileNavLink onClick={handleLogoutClick}>Logout</MobileNavLink>
                        </>
                    ): (
                        <>
                         <MobileNavLink onClick={() => handleNav('login')}>Login</MobileNavLink>
                         <MobileNavLink onClick={() => handleNav('signup')}>Sign Up</MobileNavLink>
                        </>
                    )}
                     <div className="pt-4">
                        <a onClick={() => handleNav('donation')} className="cursor-pointer bg-church-gold text-church-blue font-sans font-semibold py-3 px-10 rounded-full shadow-md text-2xl">
                            Donate
                        </a>
                     </div>
                </nav>
            </div>
            
             {/* "More" Side Panel for Desktop */}
            <div className={`fixed inset-0 z-40 transition-all duration-300 ${isMoreMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} onClick={() => setIsMoreMenuOpen(false)}>
                <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isMoreMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMoreMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 pt-24">
                        <h3 className="font-serif text-2xl text-church-blue font-bold mb-6">Explore More</h3>
                        <nav className="flex flex-col space-y-1">
                            {moreNavItems.map(item => (
                                <a key={`more-${item.page}`} onClick={() => handleNav(item.page)} className="font-sans font-semibold text-slate-700 p-3 rounded-lg hover:bg-church-light-gold hover:text-church-blue cursor-pointer transition-colors duration-200">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
