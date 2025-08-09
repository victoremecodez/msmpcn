


import React, { useState } from 'react';
import { DownloadIcon, BookmarkIcon, ArrowRightIcon } from './icons.tsx';
import { sermonsData } from '../data/sermons.ts';
import { Page } from '../types.ts';
import { User } from '../types.ts';

// The latest sermon is the first one in our sorted data
const latestSermon = sermonsData[0];

interface LatestSermonProps {
  onNavigate: (page: Page) => void;
  currentUser: User | null;
  onToggleBookmark: (sermonTitle: string) => void;
}


const LatestSermon: React.FC<LatestSermonProps> = ({ onNavigate, currentUser, onToggleBookmark }) => {
  const [showBookmarkMessage, setShowBookmarkMessage] = useState(false);
  const isBookmarked = currentUser?.bookmarkedSermons.includes(latestSermon.title) ?? false;

  const handleBookmarkClick = () => {
      onToggleBookmark(latestSermon.title);
      if (!isBookmarked) {
          setShowBookmarkMessage(true);
          setTimeout(() => setShowBookmarkMessage(false), 2000);
      }
  };


  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Latest Sermon</h2>
           <div className="w-20 h-1 bg-church-gold mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-2xl aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={latestSermon.videoUrl}
              title="Latest Sermon Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:col-span-2 relative">
            <h3 className="text-3xl font-serif text-church-dark font-bold mb-2">{latestSermon.title}</h3>
            <p className="text-lg text-slate-600 font-sans mb-4">by {latestSermon.speaker}</p>
            <p className="text-slate-700 font-sans mb-4 leading-relaxed">{latestSermon.description}</p>
            <div className="mb-6">
                <audio controls className="w-full">
                    <source src={latestSermon.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="flex flex-col space-y-3">
              <a href={latestSermon.audioUrl} download target="_blank" rel="noreferrer" className="w-full flex items-center justify-center bg-church-blue text-white font-sans font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-800 transition-colors duration-300">
                <DownloadIcon className="h-5 w-5 mr-2" /> Download Audio
              </a>
              <button onClick={handleBookmarkClick} className={`w-full flex items-center justify-center font-sans font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300 ${isBookmarked ? 'bg-church-gold text-church-blue' : 'bg-gray-200 text-church-dark hover:bg-gray-300'}`}>
                <BookmarkIcon className="h-5 w-5 mr-2" isFilled={isBookmarked} /> {isBookmarked ? 'Bookmarked!' : 'Bookmark'}
              </button>
               <button onClick={() => onNavigate('sermons')} className="w-full flex items-center justify-center text-church-blue font-sans font-semibold py-3 px-6 rounded-full hover:bg-church-light-gold transition-colors duration-300">
                View More Sermons <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
             {showBookmarkMessage && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-church-dark text-white text-sm font-sans py-1 px-3 rounded-md animate-pulse">
                    Sermon Bookmarked!
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;