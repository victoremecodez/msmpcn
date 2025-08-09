

import React from 'react';
import { Page } from '../types.ts';
import MissionVisionHeader from '../components/mission/MissionVisionHeader.tsx';
import MissionStatement from '../components/mission/MissionStatement.tsx';
import VisionStatement from '../components/mission/VisionStatement.tsx';
import StrategicPillars from '../components/mission/StrategicPillars.tsx';
import HistoricalRoot from '../components/mission/HistoricalRoot.tsx';
import MissionCTA from '../components/mission/MissionCTA.tsx';

interface MissionVisionPageProps {
  onNavigate: (page: Page) => void;
}

const MissionVisionPage: React.FC<MissionVisionPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <MissionVisionHeader />
      <MissionStatement />
      <VisionStatement />
      <StrategicPillars />
      <HistoricalRoot />
      <MissionCTA onNavigate={onNavigate} />
    </div>
  );
};

export default MissionVisionPage;
