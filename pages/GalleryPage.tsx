
import React, { useState, useMemo } from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { GalleryImage } from '../types.ts';
import { galleryData } from '../data/gallery.ts';

interface GalleryPageProps {
  onNavigate: (page: Page) => void;
}

type Category = 'All' | 'Worship' | 'Community' | 'Outreach' | 'Events' | 'Cathedral';

const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
    const [filter, setFilter] = useState<Category>('All');
    const categories: Category[] = ['All', 'Worship', 'Community', 'Outreach', 'Events', 'Cathedral'];
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = useMemo(() => {
        if (filter === 'All') return galleryData;
        return galleryData.filter(img => img.category === filter);
    }, [filter]);

    return (
    <div className="bg-white">
      <PageHeader
        title="Our Gallery"
        subtitle="A glimpse into the life of our church family"
        imageUrl="https://picsum.photos/seed/gallerypage/1920/1080"
      />
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
            <div className="flex justify-center flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`py-2 px-5 font-sans font-semibold rounded-full text-sm transition-colors duration-300 ${
                            filter === cat 
                                ? 'bg-church-blue text-white shadow-md' 
                                : 'bg-white text-church-dark hover:bg-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                    <div 
                        key={image.id} 
                        className="overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group"
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
        >
            <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <img src={selectedImage} alt="Selected gallery view" className="rounded-lg shadow-2xl object-contain max-w-full max-h-[90vh]" />
                <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-4 -right-4 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold leading-none"
                    aria-label="Close image view"
                >
                    &times;
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
