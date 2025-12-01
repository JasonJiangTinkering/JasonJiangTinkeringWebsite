import React from 'react';
import TitleElementParent from './components/TitleElementParent';
import CommunityBanner from './components/CommunityBanner';
import ContentSections from './content_components/ContentSections';
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      
      <TitleElementParent />
      <CommunityBanner />
      <ContentSections/>
    </div>
  );
};

export default HomePage; 