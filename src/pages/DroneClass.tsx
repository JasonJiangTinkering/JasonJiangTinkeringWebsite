import React from 'react';
import TitleElementParent from './components/TitleElementParent';
import CommunityBanner from './components/CommunityBanner';
import ContentSections from './content_components/ContentSections';
const DroneClass: React.FC = () => {
  return (
    <div className="drone-class-page">
      
      <TitleElementParent />
      <CommunityBanner />
      <ContentSections/>
    </div>
  );
};

export default DroneClass; 