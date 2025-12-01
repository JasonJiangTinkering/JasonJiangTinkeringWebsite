import React, { useEffect, useState } from 'react';
import './CommunityBanner.css';

const CommunityBanner: React.FC = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const target = document.getElementById('community-members-needed');
        if (!target) {
            return;
        }

        const handlePositionCheck = () => {
            const rect = target.getBoundingClientRect();
            const isAtTop = rect.top <= 80;
            setIsHidden(isAtTop);
        };

        handlePositionCheck();
        window.addEventListener('scroll', handlePositionCheck, { passive: true });
        window.addEventListener('resize', handlePositionCheck);

        return () => {
            window.removeEventListener('scroll', handlePositionCheck);
            window.removeEventListener('resize', handlePositionCheck);
        };
    }, []);

    return (
        <div className={`community-banner ${isHidden ? 'community-banner--hidden' : ''}`}>
            <a href="#community-members-needed">
                Please volunteer to speak with DRONE students about how young people can improve their community — All adults welcome! — sign up now →
            </a>
        </div>
    );
};

export default CommunityBanner;

