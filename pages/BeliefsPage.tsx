

import React from 'react';
import { Page } from '../types.ts';
import BeliefsHeader from '../components/beliefs/BeliefsHeader.tsx';
import CoreBeliefs from '../components/beliefs/CoreBeliefs.tsx';
import PresbyterianHeritage from '../components/beliefs/PresbyterianHeritage.tsx';
import BeliefsCTA from '../components/beliefs/BeliefsCTA.tsx';

interface BeliefsPageProps {
  onNavigate: (page: Page) => void;
}

const BeliefsPage: React.FC<BeliefsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <BeliefsHeader />
      <CoreBeliefs />
      <PresbyterianHeritage />
      <BeliefsCTA onNavigate={onNavigate} />
    </div>
  );
};

export default BeliefsPage;
