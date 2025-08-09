import React from 'react';
import { User } from '../../../types.ts';
import { sermonsData } from '../../../data/sermons.ts';
import { PlayIcon, DownloadIcon, VideoCameraIcon, BookmarkIcon } from '../../icons.tsx';

interface BookmarksViewProps {
    user: User;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
}

const BookmarksView: React.FC<BookmarksViewProps> = ({ user, onUpdateUser }) => {
    
    const bookmarkedSermons = sermonsData.filter(sermon => user.bookmarkedSermons.includes(sermon.title));

    const handleRemoveBookmark = (sermonTitle: string) => {
        const updatedBookmarks = user.bookmarkedSermons.filter(title => title !== sermonTitle);
        onUpdateUser({ bookmarkedSermons: updatedBookmarks });
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-serif text-church-blue font-bold mb-6">My Bookmarked Sermons</h2>

            {bookmarkedSermons.length > 0 ? (
                <div className="space-y-4">
                    {bookmarkedSermons.map(sermon => (
                        <div key={sermon.title} className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center">
                                <img src={sermon.thumbnail} alt={sermon.title} className="h-16 w-16 rounded-md object-cover mr-4 hidden sm:block" />
                                <div>
                                    <h3 className="font-serif font-bold text-church-dark">{sermon.title}</h3>
                                    <p className="text-sm text-slate-600 font-sans">by {sermon.speaker}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 flex-shrink-0">
                                <a href={sermon.videoUrl} target="_blank" rel="noreferrer" title="Watch" className="p-2 rounded-full bg-gray-200 hover:bg-church-blue hover:text-white transition-colors"><VideoCameraIcon className="h-5 w-5" /></a>
                                <a href={sermon.audioUrl} target="_blank" rel="noreferrer" title="Listen" className="p-2 rounded-full bg-gray-200 hover:bg-church-blue hover:text-white transition-colors"><PlayIcon className="h-5 w-5" /></a>
                                <a href={sermon.audioUrl} download title="Download" className="p-2 rounded-full bg-gray-200 hover:bg-church-blue hover:text-white transition-colors"><DownloadIcon className="h-5 w-5" /></a>
                                <button onClick={() => handleRemoveBookmark(sermon.title)} title="Remove Bookmark" className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-colors">
                                    <BookmarkIcon className="h-5 w-5" isFilled={true} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <BookmarkIcon className="h-16 w-16 mx-auto text-gray-300" />
                    <h3 className="mt-4 text-xl font-serif font-semibold text-church-dark">No Bookmarks Yet</h3>
                    <p className="mt-2 text-slate-600 font-sans">You can bookmark sermons from the Sermons page to save them here for later.</p>
                </div>
            )}
        </div>
    );
};

export default BookmarksView;
