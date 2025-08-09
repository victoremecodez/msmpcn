


import React from 'react';
import SermonsHeader from '../components/sermons/SermonsHeader.tsx';
import FeaturedSermon from '../components/sermons/FeaturedSermon.tsx';
import SermonList from '../components/sermons/SermonList.tsx';
import SermonSeriesCarousel from '../components/sermons/SermonSeriesCarousel.tsx';
import SermonsCTA from '../components/sermons/SermonsCTA.tsx';
import { sermonsData, sermonSeriesData } from '../data/sermons.ts';
import { Page } from '../types.ts';
import { User } from '../types.ts';

interface SermonsPageProps {
  onNavigate: (page: Page) => void;
  onNavigateToSermons: (series?: string) => void;
  initialFilter: string | null;
  currentUser: User | null;
  onToggleBookmark: (sermonTitle: string) => void;
}

const SermonsPage: React.FC<SermonsPageProps> = ({ onNavigate, onNavigateToSermons, initialFilter, currentUser, onToggleBookmark }) => {
  // The first sermon is featured
  const featuredSermon = sermonsData[0]; 

  return (
    <div className="bg-white">
      <SermonsHeader />
      <FeaturedSermon sermon={featuredSermon} currentUser={currentUser} onToggleBookmark={onToggleBookmark}/>
      <SermonList sermons={sermonsData} initialFilter={initialFilter} currentUser={currentUser} onToggleBookmark={onToggleBookmark}/>
      <SermonSeriesCarousel seriesData={sermonSeriesData} onNavigateToSermons={onNavigateToSermons}/>
      <SermonsCTA onNavigate={onNavigate} />
    </div>
  );
};

export default SermonsPage;
