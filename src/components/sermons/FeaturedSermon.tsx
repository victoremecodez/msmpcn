

import React from 'react';
import { Sermon, User } from '../../types.ts';
import { DownloadIcon, BookmarkIcon, PlayIcon } from '../icons.tsx';

interface FeaturedSermonProps {
  sermon: Sermon;
  currentUser: User | null;
  onToggleBookmark: (sermonTitle: string) => void;
}

const FeaturedSermon: React.FC<FeaturedSermonProps> = ({ sermon, currentUser, onToggleBookmark }) => {
  const isBookmarked = currentUser?.bookmarkedSermons.includes(sermon.title) ?? false;

  return (
    <section className="py-20 bg-church-light-gold">
      <div className="container mx-auto px-6">
        <div className="text-left mb-8">
            <h2 className="text-3xl font-serif text-church-blue font-bold">Featured Sermon</h2>
            <div className="w-16 h-1 bg-church-gold mt-2"></div>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-2xl aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={sermon.videoUrl}
              title={`${sermon.title} - Sermon Video Player`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm font-sans text-church-gold font-semibold tracking-wider uppercase">{sermon.series || 'Standalone Message'}</p>
            <h3 className="text-3xl font-serif text-church-dark font-bold mt-1 mb-2">{sermon.title}</h3>
            <p className="text-lg text-slate-600 font-sans mb-4">by {sermon.speaker} &bull; {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="text-slate-700 font-sans mb-6 leading-relaxed">{sermon.description}</p>
            <div className="flex flex-col space-y-3">
              <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-church-blue text-white font-sans font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-800 transition-colors duration-300">
                <PlayIcon className="h-5 w-5 mr-2" /> Watch Now
              </a>
               <a href={sermon.audioUrl} download className="w-full flex items-center justify-center bg-gray-200 text-church-dark font-sans font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300">
                <DownloadIcon className="h-5 w-5 mr-2" /> Download Audio
              </a>
              <button onClick={() => onToggleBookmark(sermon.title)} className={`w-full flex items-center justify-center font-sans font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300 ${isBookmarked ? 'bg-church-gold text-church-blue' : 'bg-transparent border border-gray-300 text-church-dark hover:bg-gray-100'}`}>
                <BookmarkIcon className="h-5 w-5 mr-2" isFilled={isBookmarked} /> {isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSermon;