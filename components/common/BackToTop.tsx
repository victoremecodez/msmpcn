import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '../icons.tsx';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 p-3 rounded-full bg-church-blue text-white shadow-lg hover:bg-church-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-church-blue transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
            aria-label="Go to top"
        >
            <ArrowUpIcon className="h-6 w-6" />
        </button>
    );
};

export default BackToTop;
