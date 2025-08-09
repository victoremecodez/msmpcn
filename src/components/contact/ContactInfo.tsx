
import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, WhatsappIcon } from '../icons.tsx';

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 mt-1 text-church-gold">{icon}</div>
        <div>
            <h4 className="text-lg font-serif font-semibold text-church-dark">{title}</h4>
            <div className="text-slate-700 font-sans">{children}</div>
        </div>
    </div>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-slate-500 hover:text-church-gold transition-colors duration-300">
        {children}
    </a>
);


const ContactInfo: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-xl h-full">
            <h3 className="text-3xl font-serif text-church-blue font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
                <InfoItem icon={<MapPinIcon className="h-6 w-6" />} title="Our Address">
                    <p>25 Cathedral Avenue, Port Harcourt, Rivers State, Nigeria</p>
                </InfoItem>
                <InfoItem icon={<PhoneIcon className="h-6 w-6" />} title="Phone Number">
                    <a href="tel:+2347012345678" className="hover:text-church-blue">+234 701 234 5678</a>
                </InfoItem>
                <InfoItem icon={<MailIcon className="h-6 w-6" />} title="Email Address">
                    <a href="mailto:contact@msmpc.org" className="hover:text-church-blue">contact@msmpc.org</a>
                </InfoItem>
            </div>

            <hr className="my-8 border-gray-200" />

            <h3 className="text-2xl font-serif text-church-blue font-bold mb-4">Service Times</h3>
            <div className="space-y-4">
                 <InfoItem icon={<ClockIcon className="h-6 w-6" />} title="Sunday Service">
                    <p>Sundays, 9:00 AM – 12:00 PM</p>
                </InfoItem>
                 <InfoItem icon={<ClockIcon className="h-6 w-6" />} title="Mid-week Service">
                    <p>Wednesdays, 5:00 PM – 6:30 PM</p>
                </InfoItem>
                 <InfoItem icon={<ClockIcon className="h-6 w-6" />} title="Bible Study">
                    <p>Thursdays, 5:00 PM – 6:30 PM</p>
                </InfoItem>
            </div>
            <p className="mt-4 text-sm text-slate-600 font-sans">Feel free to visit or reach out during office hours.</p>

            <hr className="my-8 border-gray-200" />
            
             <h3 className="text-2xl font-serif text-church-blue font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
                <SocialIcon href="#" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="WhatsApp">
                    <WhatsappIcon className="h-7 w-7" />
                </SocialIcon>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254503.197940172!2d6.914917424667104!3d4.81920703892705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f71c463%3A0x425425263a437060!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1672530182744!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allow="fullscreen"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Church Location Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactInfo;