

import React from 'react';
import ServiceTimesHeader from '../components/services/ServiceTimesHeader.tsx';
import CountdownTimer from '../components/services/CountdownTimer.tsx';
import WeeklyServices from '../components/services/WeeklyServices.tsx';
import LocationMap from '../components/services/LocationMap.tsx';
import ServicesCTA from '../components/services/ServicesCTA.tsx';
import { Page } from '../types.ts';

interface ServiceTimesPageProps {
  onNavigate: (page: Page) => void;
}

const ServiceTimesPage: React.FC<ServiceTimesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <ServiceTimesHeader />
      <CountdownTimer />
      <WeeklyServices />
      <LocationMap />
      <ServicesCTA onNavigate={onNavigate} />
    </div>
  );
};

export default ServiceTimesPage;
