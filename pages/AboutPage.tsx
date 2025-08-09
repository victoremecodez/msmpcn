

import React from 'react';
import AboutHeader from '../components/about/AboutHeader.tsx';
import ChurchOverview from '../components/about/ChurchOverview.tsx';
import OurHistory from '../components/about/OurHistory.tsx';
import MissionVision from '../components/about/MissionVision.tsx';
import Leadership from '../components/about/Leadership.tsx';
import StatementOfFaith from '../components/about/StatementOfFaith.tsx';
import Motto from '../components/about/Motto.tsx';
import GalleryPreview from '../components/about/GalleryPreview.tsx';
import AboutCTA from '../components/about/AboutCTA.tsx';
import { Page } from '../types.ts';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <AboutHeader />
      <ChurchOverview />
      <OurHistory />
      <MissionVision />
      <Leadership />
      <StatementOfFaith />
      <Motto />
      <GalleryPreview onNavigate={onNavigate} />
      <AboutCTA onNavigate={onNavigate} />
    </>
  );
};

export default AboutPage;
