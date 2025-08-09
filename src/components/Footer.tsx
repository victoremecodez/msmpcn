
import React from 'react';
import { Page } from '../types.ts';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-church-gold-dark transition-colors duration-300">
        {children}
    </a>
);

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-church-blue-dark text-white font-sans">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="text-xl font-serif font-bold mb-4">Mary Slessor Memorial Presbyterian Cathedral</h3>
                        <p className="text-gray-300 text-sm">Bringing the Gospel to Africa.</p>
                        <p className="text-gray-300 text-sm mt-2">Port Harcourt, Nigeria</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a onClick={() => onNavigate('about')} className="hover:text-church-gold cursor-pointer">About Us</a></li>
                            <li><a onClick={() => onNavigate('beliefs')} className="hover:text-church-gold cursor-pointer">Our Beliefs</a></li>
                            <li><a onClick={() => onNavigate('services')} className="hover:text-church-gold cursor-pointer">Service Times</a></li>
                            <li><a onClick={() => onNavigate('sermons')} className="hover:text-church-gold cursor-pointer">Sermons</a></li>
                            <li><a onClick={() => onNavigate('testimonials')} className="hover:text-church-gold cursor-pointer">Testify & Pray</a></li>
                            <li><a onClick={() => onNavigate('events')} className="hover:text-church-gold cursor-pointer">Events</a></li>
                            <li><a onClick={() => onNavigate('faq')} className="hover:text-church-gold cursor-pointer">FAQ</a></li>
                            <li><a onClick={() => onNavigate('contact')} className="hover:text-church-gold cursor-pointer">Contact</a></li>
                        </ul>
                    </div>

                    {/* Ministries */}
                     <div>
                        <h4 className="font-semibold text-lg mb-4">Ministries</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a onClick={() => onNavigate('ministries')} className="hover:text-church-gold cursor-pointer">MCA</a></li>
                            <li><a onClick={() => onNavigate('ministries')} className="hover:text-church-gold cursor-pointer">Women's Guild</a></li>
                            <li><a onClick={() => onNavigate('ministries')} className="hover:text-church-gold cursor-pointer">PYPAN</a></li>
                            <li><a onClick={() => onNavigate('ministries')} className="hover:text-church-gold cursor-pointer">CGIT</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="text-sm">Email: contact@msmpc.org</li>
                            <li className="text-sm">Phone: +234 123 456 7890</li>
                            <li className="text-sm">123 Faith Avenue, Port Harcourt, Nigeria</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
                        <p>&copy; {currentYear} Mary Slessor Memorial Presbyterian Cathedral. All Rights Reserved.</p>
                        <a onClick={() => onNavigate('admin-login')} className="hover:text-church-gold cursor-pointer mt-1 inline-block text-xs">Site Admin</a>
                    </div>
                    <div className="flex space-x-4">
                        <SocialIcon href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </SocialIcon>
                         <SocialIcon href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;