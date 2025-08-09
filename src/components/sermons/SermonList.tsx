

import React, { useState, useMemo, useEffect } from 'react';
import { Sermon, User } from '../../types.ts';
import { DownloadIcon, BookmarkIcon, PlayIcon, VideoCameraIcon } from '../icons.tsx';

// Card sub-component
const SermonCard: React.FC<{ sermon: Sermon, currentUser: User | null, onToggleBookmark: (sermonTitle: string) => void }> = ({ sermon, currentUser, onToggleBookmark }) => {
    const isBookmarked = currentUser?.bookmarkedSermons.includes(sermon.title) ?? false;

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative">
                <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
                    <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-48 object-cover" />
                </a>
                <div className="absolute top-2 right-2 bg-church-blue/80 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                    {sermon.series || 'Message'}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-church-dark font-bold mb-1">{sermon.title}</h3>
                <p className="text-sm text-slate-600 font-sans mb-3">
                    {sermon.speaker} &bull; {new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
                <div className="flex-grow mb-4">
                    {sermon.tags.map(tag => (
                        <span key={tag} className="inline-block bg-church-light-gold text-church-blue text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 text-sm">
                    <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-100 text-church-dark font-sans font-semibold py-2 px-3 rounded-md hover:bg-gray-200 transition-colors duration-300">
                        <VideoCameraIcon className="h-4 w-4 mr-2" /> Watch
                    </a>
                    <a href={sermon.audioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-100 text-church-dark font-sans font-semibold py-2 px-3 rounded-md hover:bg-gray-200 transition-colors duration-300">
                        <PlayIcon className="h-4 w-4 mr-2" /> Listen
                    </a>
                    <a href={sermon.audioUrl} download target="_blank" rel="noreferrer" className="flex items-center justify-center bg-gray-100 text-church-dark font-sans font-semibold py-2 px-3 rounded-md hover:bg-gray-200 transition-colors duration-300">
                        <DownloadIcon className="h-4 w-4 mr-2" /> Download
                    </a>
                    <button onClick={() => onToggleBookmark(sermon.title)} className={`flex items-center justify-center font-sans font-semibold py-2 px-3 rounded-md transition-colors duration-300 ${isBookmarked ? 'bg-church-gold/50 text-church-blue' : 'bg-gray-100 text-church-dark hover:bg-gray-200'}`}>
                        <BookmarkIcon className="h-4 w-4 mr-2" isFilled={isBookmarked} /> {isBookmarked ? 'Saved' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Filters sub-component
const SermonFilters: React.FC<{ 
    sermons: Sermon[]; 
    onFilterChange: (filters: any) => void;
    initialFilter: string | null;
}> = ({ sermons, onFilterChange, initialFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [series, setSeries] = useState(initialFilter || 'all');
    const [speaker, setSpeaker] = useState('all');

    const uniqueSeries = useMemo(() => ['all', ...Array.from(new Set(sermons.map(s => s.series).filter(Boolean))) as string[]], [sermons]);
    const uniqueSpeakers = useMemo(() => ['all', ...Array.from(new Set(sermons.map(s => s.speaker)))], [sermons]);
    
    useEffect(() => {
        setSeries(initialFilter || 'all');
    }, [initialFilter]);

    useEffect(() => {
        onFilterChange({ searchTerm, series, speaker });
    }, [searchTerm, series, speaker, onFilterChange]);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                    type="text"
                    placeholder="Search sermons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                    aria-label="Search sermons"
                />
                <select 
                    value={speaker} 
                    onChange={(e) => setSpeaker(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white"
                    aria-label="Filter by speaker"
                >
                    {uniqueSpeakers.map(s => <option key={s} value={s}>{s === 'all' ? 'All Speakers' : s}</option>)}
                </select>
                <select
                    value={series}
                    onChange={(e) => setSeries(e.target.value)}
                    className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white"
                    aria-label="Filter by series"
                >
                    {uniqueSeries.map(s => <option key={s} value={s}>{s === 'all' ? 'All Series' : s}</option>)}
                </select>
            </div>
        </div>
    );
}

// Main component
const SermonList: React.FC<{ sermons: Sermon[], initialFilter: string | null, currentUser: User | null, onToggleBookmark: (sermonTitle: string) => void }> = ({ sermons, initialFilter, currentUser, onToggleBookmark }) => {
    const [filters, setFilters] = useState({ searchTerm: '', series: initialFilter || 'all', speaker: 'all' });

    const filteredSermons = useMemo(() => {
        return sermons
            .filter(sermon => {
                const searchMatch = filters.searchTerm === '' || 
                    sermon.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                    sermon.speaker.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                    sermon.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()));
                const seriesMatch = filters.series === 'all' || sermon.series === filters.series;
                const speakerMatch = filters.speaker === 'all' || sermon.speaker === filters.speaker;
                return searchMatch && seriesMatch && speakerMatch;
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [sermons, filters]);

    return (
        <section id="sermon-library" className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Sermon Library</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                </div>
                
                <SermonFilters sermons={sermons} onFilterChange={setFilters} initialFilter={initialFilter} />

                {filteredSermons.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSermons.map((sermon) => (
                            <SermonCard key={sermon.title + sermon.date} sermon={sermon} currentUser={currentUser} onToggleBookmark={onToggleBookmark} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-lg text-slate-600 font-sans">No sermons found matching your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SermonList;