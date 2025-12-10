import React, { useEffect, useState } from 'react';
import './CommunityBanner.css';

const CommunityBanner: React.FC = () => {
    const [isHidden, setIsHidden] = useState(false);


    return (
        <div className={`community-banner`}>
            <a href="#community-members-needed">
                Please volunteer to speak with DRONE students about how young people can improve their community — All adults welcome! — sign up now →
            </a>
        </div>
    );
};

export default CommunityBanner;

