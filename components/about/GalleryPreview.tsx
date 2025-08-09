

import React from 'react';
import { galleryData } from '../../data/gallery.ts';
import { Page } from '../../types.ts';

interface GalleryPreviewProps {
    onNavigate: (page: Page) => void;
}

const galleryImages = galleryData.slice(0, 4);

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onNavigate }) => {
    return (
        <section className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">A Glimpse of Our Family</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover aspect-square transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button onClick={() => onNavigate('gallery')} className="bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
