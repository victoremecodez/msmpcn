


import React from 'react';
import Hero from '../components/Hero.tsx';
import ServiceTimes from '../components/ServiceTimes.tsx';
import AboutPreview from '../components/AboutPreview.tsx';
import Ministries from '../components/Ministries.tsx';
import LatestSermon from '../components/LatestSermon.tsx';
import Livestream from '../components/Livestream.tsx';
import Testimonials from '../components/Testimonials.tsx';
import CallToAction from '../components/CallToAction.tsx';
import Newsletter from '../components/Newsletter.tsx';
import { Page, User } from '../types.ts';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  currentUser: User | null;
  onToggleBookmark: (sermonTitle: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, currentUser, onToggleBookmark }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ServiceTimes />
      <AboutPreview onNavigate={onNavigate} />
      <Ministries onNavigate={onNavigate} />
      <LatestSermon onNavigate={onNavigate} currentUser={currentUser} onToggleBookmark={onToggleBookmark} />
      <Livestream onNavigate={onNavigate} />
      <Testimonials />
      <CallToAction onNavigate={onNavigate} />
      <Newsletter />
    </>
  );
};

export default HomePage;
